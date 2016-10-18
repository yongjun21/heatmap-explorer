import {Census2015, Census2010} from './heatmaps'
import fs from 'fs'

const heatmap2015 = new Census2015()
const serialized2015 = heatmap2015.serialize(true)
fs.writeFileSync('data/Census2015.json', serialized2015)

const heatmap2010 = new Census2010()
const serialized2010 = heatmap2010.serialize(true)
fs.writeFileSync('data/Census2010.json', serialized2010)
