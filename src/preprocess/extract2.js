import fs from 'fs'
import fetch from 'node-fetch'

import {GEOSPACE_DATASETS} from './constants'

fetchResource('package_list')
  .then(packageList => {
    async function fetchData (theme, pattern) {
      const result = {}
      for (let pkg of packageList) {
        const match = pkg.match(pattern)
        if (match) {
          const packageMeta = await fetchResource('package_metadata_show', match[0])
          const resourceUrl = packageMeta.resources[0].url
            .replace(/\/kml\//, '/json/')
            .replace(/\.zip$/, '.json')
          const year = match[1]
          const geojson = await fetch(resourceUrl).then(res => res.json())
          result[year + '.' + theme] = geojson.features.map(feature => feature.properties)
        }
      }
      return result
    }

    return Promise.all(Object.keys(GEOSPACE_DATASETS).map(key => {
      const pattern = GEOSPACE_DATASETS[key]
      return fetchData(key, pattern).then(result => {
        fs.writeFileSync('data/raw/' + key + '.json', JSON.stringify(result, null, '\t'))
      })
    }))
  })
  .catch(console.error)

function fetchResource (endpoint, id) {
  let url = 'https://data.gov.sg/api/action/' + endpoint
  if (id) url += '?id=' + id
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      if (json.success) return json.result
      throw json.error
    })
}
