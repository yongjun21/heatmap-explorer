import fs from 'fs'
import fetch from 'node-fetch'

import {DATAGOVSG_ENDPOINTS} from './constants'

const fetchResults = Object.keys(DATAGOVSG_ENDPOINTS).slice(17, 51).map(ep => {
  return fetch(DATAGOVSG_ENDPOINTS[ep])
    .then(res => res.json())
    .then(json => json.features.map(feature => feature.properties))
})

Promise.all(fetchResults)
  .then(results => {
    const data = Object.keys(DATAGOVSG_ENDPOINTS).slice(17, 51)
      .reduce((obj, k, i) => Object.assign(obj, {[k]: results[i]}), {})
    fs.writeFileSync('data/Resident.json', JSON.stringify(data, null, '\t'))
  })
  .catch(console.error)
