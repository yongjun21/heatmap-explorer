import SgHeatmap2014 from 'sg-heatmap/dist/predefined/URA_planning_area_2014'
import SgHeatmap2008 from 'sg-heatmap/dist/predefined/URA_planning_area_2008'

import {ENDPOINTS} from './constants'

export class Census2015 extends SgHeatmap2014 {
  constructor () {
    super()
    this.registerUpdater(insertValueAtKey)
    matchPlanningAreaName(this)
    ENDPOINTS.forEach(ep => {
      const data = require('../data/' + ep + '.json')
      data.filter(d => d.year === 2015).forEach(d => {
        const key = d.planning_area.toUpperCase()
        delete d.planning_area
        this.update(key, {key: ep, value: d})
      })
    })
  }
}

export class Census2010 extends SgHeatmap2008 {
  constructor () {
    super()
    this.registerUpdater(insertValueAtKey)
    matchPlanningAreaName(this)
    ENDPOINTS.forEach(ep => {
      const data = require('../data/' + ep + '.json')
      data.filter(d => d.year === 2010).forEach(d => {
        const key = d.planning_area.toUpperCase()
        delete d.planning_area
        this.update(key, {key: ep, value: d})
      })
    })
  }
}

function insertValueAtKey ({key, value}, state) {
  if (key in state) state[key].push(value)
  else state[key] = [value]
  return state
}

function matchPlanningAreaName (heatmap) {
  function inside (key) {
    return key === this.properties.Planning_Area_Name
  }
  heatmap.bin = function (key) {
    return heatmap.children.filter(c => inside.call(c, key))
  }
}
