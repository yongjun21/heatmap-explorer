import PlanningAreaMP14 from 'sg-heatmap/dist/predefined/URA_planning_area_mp14'
import PlanningAreaMP08 from 'sg-heatmap/dist/predefined/URA_planning_area_mp08'
import PlanningAreaMP98 from 'sg-heatmap/dist/predefined/URA_planning_area_mp98'
import SubzoneMP14 from 'sg-heatmap/dist/predefined/URA_subzone_mp14'
import SubzoneMP08 from 'sg-heatmap/dist/predefined/URA_subzone_mp08'
import SubzoneMP98 from 'sg-heatmap/dist/predefined/URA_subzone_mp98'

import DwellingTypeData from '../data/raw/DwellingType.json'
import ResidentData from '../data/raw/Resident.json'

import {ONEMAP_ENDPOINTS, WITHGENDER, YEAR2MAP,
  DWELLING_TYPES_BLANK, RESIDENT_BLANK} from './constants'

import groupBy from 'lodash/groupBy'
import forEach from 'lodash/forEach'
import omit from 'lodash/omit'

export class Census2015 extends PlanningAreaMP14 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtKey)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      let data = require('../data/raw/' + ep + '.json')
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

export class Census2010 extends PlanningAreaMP08 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtKey)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      let data = require('../data/raw/' + ep + '.json')
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

export class PopulationSubzoneMP14 extends SubzoneMP14 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp14'].forEach(processPopulationData('SUBZONE_N').bind(this))
  }
}

export class PopulationSubzoneMP08 extends SubzoneMP08 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp08'].forEach(processPopulationData('SUBZONE_N').bind(this))
  }
}

export class PopulationSubzoneMP98 extends SubzoneMP98 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp98'].forEach(processPopulationData('SUBZONE_N').bind(this))
  }
}

export class PopulationPlanningAreaMP14 extends PlanningAreaMP14 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp14'].forEach(processPopulationData('PLN_AREA_N').bind(this))
  }
}

export class PopulationPlanningAreaMP08 extends PlanningAreaMP08 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp08'].forEach(processPopulationData('PLN_AREA_N').bind(this))
  }
}

export class PopulationPlanningAreaMP98 extends PlanningAreaMP98 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp98'].forEach(processPopulationData('PLN_AREA_N').bind(this))
  }
}

function processPopulationData (targetKey) {
  return function (year) {
    const keyH = [year, 'DwellingType'].join('.')
    const key = [year, 'Resident'].join('.')
    const keyM = [year, 'Resident', 'Male'].join('.')
    const keyF = [year, 'Resident', 'Female'].join('.')

    DwellingTypeData[keyH].forEach(record => {
      this.update(record[targetKey], {
        key: keyH,
        value: record,
        def: DWELLING_TYPES_BLANK
      })
    })

    ResidentData[key].forEach(record => {
      this.update(record[targetKey], {
        key: key,
        value: record,
        def: RESIDENT_BLANK
      })
    })

    ResidentData[keyM].forEach(record => {
      this.update(record[targetKey], {
        key: keyM,
        value: record,
        def: RESIDENT_BLANK
      })
    })

    this.children.forEach(c => {
      if (!(key in c.state) || !(keyM in c.state)) return
      c.state[keyF] = Object.keys(RESIDENT_BLANK).reduce((obj, k) => {
        obj[k] = c.state[key][k] - c.state[keyM][k]
        return obj
      }, {})
    })
  }
}

function upsertValueAtKey ({key, value}, state) {
  state[key] = value
  return state
}

function customUpdater ({key, value, def}, state) {
  state[key] = state[key] || Object.assign({}, def)
  for (let k in state[key]) {
    state[key][k] += value[k]
  }
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

function matchSubzoneName (heatmap) {
  function inside (key) {
    return key === this.properties.Subzone_Name
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
