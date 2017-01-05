import SgHeatmap2014 from 'sg-heatmap/dist/predefined/URA_planning_area_2014'
import SgHeatmap2008 from 'sg-heatmap/dist/predefined/URA_planning_area_2008'

import groupBy from 'lodash/groupBy'
import forEach from 'lodash/forEach'
import omit from 'lodash/omit'

import {ONEMAP_ENDPOINTS, WITHGENDER} from './constants'

export class Census2015 extends SgHeatmap2014 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtKey)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      let data = require('../data/processed/' + ep + '.json')
      if (WITHGENDER.indexOf(ep) > -1) data = mergeGender(data)
      data.filter(d => d.year === 2015).forEach(d => {
        this.update(d.planning_area.toUpperCase(), {
          key: ep,
          value: omit(d, ['year', 'planning_area'])
        })
      })
    })
  }
}

export class Census2010 extends SgHeatmap2008 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtKey)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      let data = require('../data/processed/' + ep + '.json')
      if (WITHGENDER.indexOf(ep) > -1) data = mergeGender(data)
      data.filter(d => d.year === 2010).forEach(d => {
        this.update(d.planning_area.toUpperCase(), {
          key: ep,
          value: omit(d, ['year', 'planning_area'])
        })
      })
    })
  }
}

function upsertValueAtKey ({key, value}, state) {
  state[key] = value
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

function mergeGender (data) {
  const mergedData = []
  forEach(groupBy(data, 'year'), (group, year) => {
    forEach(groupBy(group, 'planning_area'), (group, planning_area) => { // eslint-disable-line
      mergedData.push(
        group.reduce((j, d) => {
          return Object.assign(j, {[d.gender]: omit(d, ['year', 'planning_area', 'gender'])})
        }, {year: +year, planning_area})
      )
    })
  })
  return mergedData
}
