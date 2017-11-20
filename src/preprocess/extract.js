import fs from 'fs'
import fetch from 'node-fetch'
import {ONEMAP_TOKEN, ONEMAP_ENDPOINTS} from './constants'

fetch(ONEMAP_TOKEN).then(res => res.json()).then(json => json.access_token)
  .then(token => Promise.all(ONEMAP_ENDPOINTS.map(async ep => {
    const url = `https://developers.onemap.sg/publicapi/popapi/${ep}?token=${token}`
    const fetchResult = await fetch(url).then(res => res.json())
    if (fetchResult.error) {
      throw new Error('Error fetching resource from ' + url + '. ' + fetchResult.error)
    }
    const validData = fetchResult.filter(d => d.Result !== 'No Data Available!')
    fs.writeFileSync('data/raw/' + ep + '.json', JSON.stringify(validData, null, '\t'))
  })))
  .catch(console.error)
