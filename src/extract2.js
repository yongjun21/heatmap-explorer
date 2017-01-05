import fs from 'fs'
import fetch from 'node-fetch'

import {DATAGOVSG_ENDPOINTS} from './constants'

const endpoints = {
  DwellingType: Object.keys(DATAGOVSG_ENDPOINTS).slice(0, 17),
  Resident: Object.keys(DATAGOVSG_ENDPOINTS).slice(17, 51)
}

for (let key in endpoints) {
  const fetchResults = endpoints[key].map(ep => {
    return fetch(DATAGOVSG_ENDPOINTS[ep])
      .then(res => res.json())
      .then(json => json.features.map(feature => feature.properties))
  })

  Promise.all(fetchResults)
    .then(results => {
      const data = Object.keys(DATAGOVSG_ENDPOINTS).slice(17, 51)
        .reduce((obj, k, i) => Object.assign(obj, {[k]: results[i]}), {})
      fs.writeFileSync('data/' + key + '.json', JSON.stringify(data, null, '\t'))
    })
    .catch(console.error)
}
