import fs from 'fs'
import SgHeatmap from 'sg-heatmap'

import themes from './themes'
import {generateAccessor} from './helpers'

const test = [{
  label: 'age-over-65',
  theme: 'Resident Population By Age & Planning Area',
  year: '2016',
  filters: ['25', 'Over 85']
}]

const cache = {
  load (key) {
    if (key in this) return this[key]
    const data = require(`../public/data/${key}.json`)
    const heatmap = new SgHeatmap(data)
    this[key] = heatmap
    return heatmap
  }
}

const exported = exportFeatures(test)
fs.writeFileSync('data/tmp.json', JSON.stringify(exported, null, 2))

export default function exportFeatures (features) {
  const result = {}

  features.forEach(feature => {
    const theme = themes.filter(theme => theme.label === feature.theme)[0]
    if (!theme) return
    const year = feature.year
    if (!theme.mapping[year]) return
    const source = theme.sources[theme.mapping[year].source]
    const control = theme.controls[theme.mapping[year].control]
    const filters = []

    control.items.forEach((item, i) => {
      if (feature.filters instanceof Array) {
        if (feature.filters.indexOf(item.label) > -1) filters.push(i)
      } else {
        if (feature.filters === item.label) filters.push(i)
      }
    })

    const heatmap = cache.load(source)

    const accessor = generateAccessor(control, year)
    const {values, unchanged} = heatmap.getStat(accessor(filters))

    Object.keys(values).forEach(key => {
      result[key] = result[key] || {id: key}
      if (values[key] == null || isNaN(values[key])) unchanged.push(key)
      result[key][feature.label] = values[key]
    })

    unchanged.forEach(key => {
      result[key] = result[key] || {id: key}
      result[key][feature.label] = null
    })
  })

  return Object.values(result)
}
