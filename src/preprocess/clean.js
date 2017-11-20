import * as Heatmaps from './heatmaps'
import fs from 'fs'

Object.keys(Heatmaps).forEach(key => {
  const heatmap = new Heatmaps[key]()
  const serialized = heatmap.serialize(true)
  fs.writeFileSync(`public/data/${key}.json`, serialized)
})
