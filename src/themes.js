export default [{
  label: 'Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true},
      {label: 'Male', keys: ['Resident.Male.TOTAL']},
      {label: 'Female', keys: ['Resident.Female.TOTAL']}
    ],
    threshold: 1000
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0,0'
}, {
  label: 'Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true},
      {label: 'Male', keys: ['Resident.Male.TOTAL']},
      {label: 'Female', keys: ['Resident.Female.TOTAL']}
    ],
    threshold: 500
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0,0'
}, {
  label: 'Age Distribution of Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Total.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Total.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Total.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Total.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Total.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Total.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Total.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Total.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Total.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Total.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Total.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Total.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Total.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Total.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Total.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Total.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Total.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Total.OVER85']}
    ],
    normalize: 'Resident.Total.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Total.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Total.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Total.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Total.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Total.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Total.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Total.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Total.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Total.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Total.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Total.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Total.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Total.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Total.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Total.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Total.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Total.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Total.OVER85']}
    ],
    normalize: 'Resident.Total.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Male.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Male.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Male.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Male.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Male.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Male.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Male.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Male.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Male.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Male.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Male.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Male.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Male.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Male.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Male.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Male.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Male.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Male.OVER85']}
    ],
    normalize: 'Resident.Male.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Male.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Male.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Male.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Male.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Male.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Male.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Male.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Male.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Male.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Male.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Male.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Male.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Male.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Male.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Male.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Male.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Male.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Male.OVER85']}
    ],
    normalize: 'Resident.Male.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Female.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Female.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Female.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Female.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Female.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Female.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Female.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Female.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Female.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Female.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Female.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Female.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Female.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Female.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Female.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Female.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Female.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Female.OVER85']}
    ],
    normalize: 'Resident.Female.TOTAL',
    threshold: 1000
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Age Distribution of Resident Population By Subzone (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: '0 to 4', keys: ['Resident.Female.BET0TO4']},
      {label: '5 to 9', keys: ['Resident.Female.BET5TO9']},
      {label: '10 to 14', keys: ['Resident.Female.BET10TO14']},
      {label: '15 to 19', keys: ['Resident.Female.BET15TO19']},
      {label: '20 to 24', keys: ['Resident.Female.BET20TO24']},
      {label: '25 to 29', keys: ['Resident.Female.BET25TO29']},
      {label: '30 to 34', keys: ['Resident.Female.BET30TO34']},
      {label: '35 to 39', keys: ['Resident.Female.BET35TO39']},
      {label: '40 to 44', keys: ['Resident.Female.BET40TO44']},
      {label: '45 to 49', keys: ['Resident.Female.BET45TO49']},
      {label: '50 to 54', keys: ['Resident.Female.BET50TO54']},
      {label: '55 to 59', keys: ['Resident.Female.BET55TO59']},
      {label: '60 to 64', keys: ['Resident.Female.BET60TO64']},
      {label: '65 to 69', keys: ['Resident.Female.BET65TO69']},
      {label: '70 to 74', keys: ['Resident.Female.BET70TO74']},
      {label: '75 to 79', keys: ['Resident.Female.BET75TO79']},
      {label: '80 to 84', keys: ['Resident.Female.BET80TO84']},
      {label: 'Over 85', keys: ['Resident.Female.OVER85']}
    ],
    normalize: 'Resident.Female.TOTAL',
    threshold: 500
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2001: {source: 1, control: 0},
    2002: {source: 1, control: 0},
    2003: {source: 1, control: 0},
    2004: {source: 1, control: 0},
    2005: {source: 1, control: 0},
    2006: {source: 1, control: 0},
    2007: {source: 1, control: 0},
    2008: {source: 1, control: 0},
    2009: {source: 1, control: 0},
    2010: {source: 1, control: 0},
    2011: {source: 2, control: 0},
    2012: {source: 2, control: 0},
    2013: {source: 2, control: 0},
    2014: {source: 2, control: 0},
    2015: {source: 2, control: 0},
    2016: {source: 2, control: 0}
  },
  format: '0%'
}]
