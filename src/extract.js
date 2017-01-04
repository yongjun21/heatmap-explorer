import fs from 'fs'
import fetch from 'node-fetch'
import flatten from 'lodash/flatten'
const planningAreas = {
  '2010': require('sg-heatmap/data/planning_area_mp08.json'),
  '2015': require('sg-heatmap/data/planning_area_mp14.json')
}
import {ONEMAP_TOKEN, ONEMAP_ENDPOINTS} from './constants'

Promise.all(ONEMAP_ENDPOINTS.slice(17, 19).map(ep => {
  const urls = flatten(
    ['2010', '2015'].map(year => planningAreas[year].map(pa => {
      const query = {
        token: ONEMAP_TOKEN,
        planningArea: pa.properties.Planning_Area_Name,
        year: year
      }
      return `https://developers.onemap.sg/privateapi/popapi/${ep}?${getQueryString(query)}`
    }))
  )

  return Promise.all(urls.map(async url => {
    const fetchResult = await fetch(url).then(res => res.json())
    if (fetchResult.error) {
      throw new Error('Error fetching resource from ' + url + '. ' + fetchResult.error)
    }
    return fetchResult
  })).then(flatten).then(data => {
    const validData = data.filter(d => d.Result !== 'No Data Available!')
    fs.writeFileSync('data/' + ep + '.json', JSON.stringify(validData, null, '\t'))
  }).catch(err => {
    if (err) throw err
  })
})).catch(console.error)

function getQueryString (query) {
  return Object.keys(query).map(key => key + '=' + query[key]).join('&')
}
