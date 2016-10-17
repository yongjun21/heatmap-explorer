import fs from 'fs'
import fetch from 'node-fetch'
import flatten from 'lodash/flatten'
const planningAreas = {
  '2010': require('sg-heatmap/data/planning_area_2008.json'),
  '2015': require('sg-heatmap/data/planning_area_2014.json')
}

const TOKEN = process.env.ONEMAP_TOKEN

const datasets = [{
  endpoint: 'getEconomicStatus'
}, {
  endpoint: 'getEducationAttending'
}, {
  endpoint: 'getEthnicGroup'
}, {
  endpoint: 'getHouseholdMonthlyIncomeWork'
}, {
  endpoint: 'getHouseholdSize'
}, {
  endpoint: 'getHouseholdStructure'
}, {
  endpoint: 'getIncomeFromWork'
}, {
  endpoint: 'getIndustry'
}, {
  endpoint: 'getLanguageLiterate'
}, {
  endpoint: 'getMaritalStatus'
}, {
  endpoint: 'getModeOfTransportSchool'
}, {
  endpoint: 'getModeOfTransportWork'
}, {
  endpoint: 'getOccupation'
}, {
  endpoint: 'getPopulationAgeGroup'
}, {
  endpoint: 'getReligion'
}, {
  endpoint: 'getSpokenAtHome'
}, {
  endpoint: 'getTenancy'
}, {
  endpoint: 'getTypeOfDwellingHousehold'
}, {
  endpoint: 'getTypeOfDwellingPop'
}]

Promise.all(datasets.slice(17, 19).map(ds => {
  const urls = flatten(
    ['2010', '2015'].map(year => planningAreas[year].map(pa => {
      const query = {
        token: TOKEN,
        planningArea: pa.properties.Planning_Area_Name,
        year: year
      }
      return `https://developers.onemap.sg/privateapi/popapi/${ds.endpoint}?${getQueryString(query)}`
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
    fs.writeFileSync('data/' + ds.endpoint + '.json', JSON.stringify(validData, null, '\t'))
  }).catch(err => {
    if (err) throw err
  })
})).catch(console.error)

function getQueryString (query) {
  return Object.keys(query).map(key => key + '=' + query[key]).join('&')
}
