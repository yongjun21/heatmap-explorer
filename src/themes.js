export default [{
  label: 'Resident Population By Gender & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Total', keys: ['Resident.Total.TOTAL']},
      {label: 'Female', keys: ['Resident.Female.TOTAL']},
      {label: 'Male', keys: ['Resident.Male.TOTAL']}
    ],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Resident Population By Gender & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Total', keys: ['Resident.Total.TOTAL']},
      {label: 'Female', keys: ['Resident.Female.TOTAL']},
      {label: 'Male', keys: ['Resident.Male.TOTAL']}
    ],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Resident Population By Age & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Total.BET0TO4']},
      {label: '5', keys: ['Resident.Total.BET5TO9']},
      {label: '10', keys: ['Resident.Total.BET10TO14']},
      {label: '15', keys: ['Resident.Total.BET15TO19']},
      {label: '20', keys: ['Resident.Total.BET20TO24']},
      {label: '25', keys: ['Resident.Total.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Total.BET30TO34']},
      {label: '35', keys: ['Resident.Total.BET35TO39']},
      {label: '40', keys: ['Resident.Total.BET40TO44']},
      {label: '45', keys: ['Resident.Total.BET45TO49']},
      {label: '50', keys: ['Resident.Total.BET50TO54']},
      {label: '55', keys: ['Resident.Total.BET55TO59']},
      {label: '60', keys: ['Resident.Total.BET60TO64']},
      {label: '65', keys: ['Resident.Total.BET65TO69']},
      {label: '70', keys: ['Resident.Total.BET70TO74']},
      {label: '75', keys: ['Resident.Total.BET75TO79']},
      {label: '80', keys: ['Resident.Total.BET80TO84']},
      {label: '85', keys: ['Resident.Total.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Resident Population By Age & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Total.BET0TO4']},
      {label: '5', keys: ['Resident.Total.BET5TO9']},
      {label: '10', keys: ['Resident.Total.BET10TO14']},
      {label: '15', keys: ['Resident.Total.BET15TO19']},
      {label: '20', keys: ['Resident.Total.BET20TO24']},
      {label: '25', keys: ['Resident.Total.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Total.BET30TO34']},
      {label: '35', keys: ['Resident.Total.BET35TO39']},
      {label: '40', keys: ['Resident.Total.BET40TO44']},
      {label: '45', keys: ['Resident.Total.BET45TO49']},
      {label: '50', keys: ['Resident.Total.BET50TO54']},
      {label: '55', keys: ['Resident.Total.BET55TO59']},
      {label: '60', keys: ['Resident.Total.BET60TO64']},
      {label: '65', keys: ['Resident.Total.BET65TO69']},
      {label: '70', keys: ['Resident.Total.BET70TO74']},
      {label: '75', keys: ['Resident.Total.BET75TO79']},
      {label: '80', keys: ['Resident.Total.BET80TO84']},
      {label: '85', keys: ['Resident.Total.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Resident Population By Age & Planning Area (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Female.BET0TO4']},
      {label: '5', keys: ['Resident.Female.BET5TO9']},
      {label: '10', keys: ['Resident.Female.BET10TO14']},
      {label: '15', keys: ['Resident.Female.BET15TO19']},
      {label: '20', keys: ['Resident.Female.BET20TO24']},
      {label: '25', keys: ['Resident.Female.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Female.BET30TO34']},
      {label: '35', keys: ['Resident.Female.BET35TO39']},
      {label: '40', keys: ['Resident.Female.BET40TO44']},
      {label: '45', keys: ['Resident.Female.BET45TO49']},
      {label: '50', keys: ['Resident.Female.BET50TO54']},
      {label: '55', keys: ['Resident.Female.BET55TO59']},
      {label: '60', keys: ['Resident.Female.BET60TO64']},
      {label: '65', keys: ['Resident.Female.BET65TO69']},
      {label: '70', keys: ['Resident.Female.BET70TO74']},
      {label: '75', keys: ['Resident.Female.BET75TO79']},
      {label: '80', keys: ['Resident.Female.BET80TO84']},
      {label: '85', keys: ['Resident.Female.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Resident Population By Age & Subzone (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Female.BET0TO4']},
      {label: '5', keys: ['Resident.Female.BET5TO9']},
      {label: '10', keys: ['Resident.Female.BET10TO14']},
      {label: '15', keys: ['Resident.Female.BET15TO19']},
      {label: '20', keys: ['Resident.Female.BET20TO24']},
      {label: '25', keys: ['Resident.Female.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Female.BET30TO34']},
      {label: '35', keys: ['Resident.Female.BET35TO39']},
      {label: '40', keys: ['Resident.Female.BET40TO44']},
      {label: '45', keys: ['Resident.Female.BET45TO49']},
      {label: '50', keys: ['Resident.Female.BET50TO54']},
      {label: '55', keys: ['Resident.Female.BET55TO59']},
      {label: '60', keys: ['Resident.Female.BET60TO64']},
      {label: '65', keys: ['Resident.Female.BET65TO69']},
      {label: '70', keys: ['Resident.Female.BET70TO74']},
      {label: '75', keys: ['Resident.Female.BET75TO79']},
      {label: '80', keys: ['Resident.Female.BET80TO84']},
      {label: '85', keys: ['Resident.Female.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Resident Population By Age & Planning Area (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Male.BET0TO4']},
      {label: '5', keys: ['Resident.Male.BET5TO9']},
      {label: '10', keys: ['Resident.Male.BET10TO14']},
      {label: '15', keys: ['Resident.Male.BET15TO19']},
      {label: '20', keys: ['Resident.Male.BET20TO24']},
      {label: '25', keys: ['Resident.Male.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Male.BET30TO34']},
      {label: '35', keys: ['Resident.Male.BET35TO39']},
      {label: '40', keys: ['Resident.Male.BET40TO44']},
      {label: '45', keys: ['Resident.Male.BET45TO49']},
      {label: '50', keys: ['Resident.Male.BET50TO54']},
      {label: '55', keys: ['Resident.Male.BET55TO59']},
      {label: '60', keys: ['Resident.Male.BET60TO64']},
      {label: '65', keys: ['Resident.Male.BET65TO69']},
      {label: '70', keys: ['Resident.Male.BET70TO74']},
      {label: '75', keys: ['Resident.Male.BET75TO79']},
      {label: '80', keys: ['Resident.Male.BET80TO84']},
      {label: '85', keys: ['Resident.Male.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Resident Population By Age & Subzone (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below 5', keys: ['Resident.Male.BET0TO4']},
      {label: '5', keys: ['Resident.Male.BET5TO9']},
      {label: '10', keys: ['Resident.Male.BET10TO14']},
      {label: '15', keys: ['Resident.Male.BET15TO19']},
      {label: '20', keys: ['Resident.Male.BET20TO24']},
      {label: '25', keys: ['Resident.Male.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Male.BET30TO34']},
      {label: '35', keys: ['Resident.Male.BET35TO39']},
      {label: '40', keys: ['Resident.Male.BET40TO44']},
      {label: '45', keys: ['Resident.Male.BET45TO49']},
      {label: '50', keys: ['Resident.Male.BET50TO54']},
      {label: '55', keys: ['Resident.Male.BET55TO59']},
      {label: '60', keys: ['Resident.Male.BET60TO64']},
      {label: '65', keys: ['Resident.Male.BET65TO69']},
      {label: '70', keys: ['Resident.Male.BET70TO74']},
      {label: '75', keys: ['Resident.Male.BET75TO79']},
      {label: '80', keys: ['Resident.Male.BET80TO84']},
      {label: '85', keys: ['Resident.Male.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Resident Population By Dwelling Type & Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']},
      {label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH']},
      {label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO']},
      {label: 'Others', keys: ['DwellingType.OTHERS']}
    ],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Resident Population By Dwelling Type & Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']},
      {label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH']},
      {label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO']},
      {label: 'Others', keys: ['DwellingType.OTHERS']}
    ],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Gender Distribution of Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Male to Female', keys: ['Resident.Male.TOTAL']}
    ],
    normalize: ['Resident.Female.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  format: '0.00'
}, {
  label: 'Gender Distribution of Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Male to Female', keys: ['Resident.Male.TOTAL']}
    ],
    normalize: ['Resident.Female.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  format: '0.00'
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
      {label: 'Below 5', keys: ['Resident.Total.BET0TO4']},
      {label: '5', keys: ['Resident.Total.BET5TO9']},
      {label: '10', keys: ['Resident.Total.BET10TO14']},
      {label: '15', keys: ['Resident.Total.BET15TO19']},
      {label: '20', keys: ['Resident.Total.BET20TO24']},
      {label: '25', keys: ['Resident.Total.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Total.BET30TO34']},
      {label: '35', keys: ['Resident.Total.BET35TO39']},
      {label: '40', keys: ['Resident.Total.BET40TO44']},
      {label: '45', keys: ['Resident.Total.BET45TO49']},
      {label: '50', keys: ['Resident.Total.BET50TO54']},
      {label: '55', keys: ['Resident.Total.BET55TO59']},
      {label: '60', keys: ['Resident.Total.BET60TO64']},
      {label: '65', keys: ['Resident.Total.BET65TO69']},
      {label: '70', keys: ['Resident.Total.BET70TO74']},
      {label: '75', keys: ['Resident.Total.BET75TO79']},
      {label: '80', keys: ['Resident.Total.BET80TO84']},
      {label: '85', keys: ['Resident.Total.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Total.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
      {label: 'Below 5', keys: ['Resident.Total.BET0TO4']},
      {label: '5', keys: ['Resident.Total.BET5TO9']},
      {label: '10', keys: ['Resident.Total.BET10TO14']},
      {label: '15', keys: ['Resident.Total.BET15TO19']},
      {label: '20', keys: ['Resident.Total.BET20TO24']},
      {label: '25', keys: ['Resident.Total.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Total.BET30TO34']},
      {label: '35', keys: ['Resident.Total.BET35TO39']},
      {label: '40', keys: ['Resident.Total.BET40TO44']},
      {label: '45', keys: ['Resident.Total.BET45TO49']},
      {label: '50', keys: ['Resident.Total.BET50TO54']},
      {label: '55', keys: ['Resident.Total.BET55TO59']},
      {label: '60', keys: ['Resident.Total.BET60TO64']},
      {label: '65', keys: ['Resident.Total.BET65TO69']},
      {label: '70', keys: ['Resident.Total.BET70TO74']},
      {label: '75', keys: ['Resident.Total.BET75TO79']},
      {label: '80', keys: ['Resident.Total.BET80TO84']},
      {label: '85', keys: ['Resident.Total.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Total.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 500]
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
      {label: 'Below 5', keys: ['Resident.Female.BET0TO4']},
      {label: '5', keys: ['Resident.Female.BET5TO9']},
      {label: '10', keys: ['Resident.Female.BET10TO14']},
      {label: '15', keys: ['Resident.Female.BET15TO19']},
      {label: '20', keys: ['Resident.Female.BET20TO24']},
      {label: '25', keys: ['Resident.Female.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Female.BET30TO34']},
      {label: '35', keys: ['Resident.Female.BET35TO39']},
      {label: '40', keys: ['Resident.Female.BET40TO44']},
      {label: '45', keys: ['Resident.Female.BET45TO49']},
      {label: '50', keys: ['Resident.Female.BET50TO54']},
      {label: '55', keys: ['Resident.Female.BET55TO59']},
      {label: '60', keys: ['Resident.Female.BET60TO64']},
      {label: '65', keys: ['Resident.Female.BET65TO69']},
      {label: '70', keys: ['Resident.Female.BET70TO74']},
      {label: '75', keys: ['Resident.Female.BET75TO79']},
      {label: '80', keys: ['Resident.Female.BET80TO84']},
      {label: '85', keys: ['Resident.Female.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Female.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
      {label: 'Below 5', keys: ['Resident.Female.BET0TO4']},
      {label: '5', keys: ['Resident.Female.BET5TO9']},
      {label: '10', keys: ['Resident.Female.BET10TO14']},
      {label: '15', keys: ['Resident.Female.BET15TO19']},
      {label: '20', keys: ['Resident.Female.BET20TO24']},
      {label: '25', keys: ['Resident.Female.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Female.BET30TO34']},
      {label: '35', keys: ['Resident.Female.BET35TO39']},
      {label: '40', keys: ['Resident.Female.BET40TO44']},
      {label: '45', keys: ['Resident.Female.BET45TO49']},
      {label: '50', keys: ['Resident.Female.BET50TO54']},
      {label: '55', keys: ['Resident.Female.BET55TO59']},
      {label: '60', keys: ['Resident.Female.BET60TO64']},
      {label: '65', keys: ['Resident.Female.BET65TO69']},
      {label: '70', keys: ['Resident.Female.BET70TO74']},
      {label: '75', keys: ['Resident.Female.BET75TO79']},
      {label: '80', keys: ['Resident.Female.BET80TO84']},
      {label: '85', keys: ['Resident.Female.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Female.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 500]
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
      {label: 'Below 5', keys: ['Resident.Male.BET0TO4']},
      {label: '5', keys: ['Resident.Male.BET5TO9']},
      {label: '10', keys: ['Resident.Male.BET10TO14']},
      {label: '15', keys: ['Resident.Male.BET15TO19']},
      {label: '20', keys: ['Resident.Male.BET20TO24']},
      {label: '25', keys: ['Resident.Male.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Male.BET30TO34']},
      {label: '35', keys: ['Resident.Male.BET35TO39']},
      {label: '40', keys: ['Resident.Male.BET40TO44']},
      {label: '45', keys: ['Resident.Male.BET45TO49']},
      {label: '50', keys: ['Resident.Male.BET50TO54']},
      {label: '55', keys: ['Resident.Male.BET55TO59']},
      {label: '60', keys: ['Resident.Male.BET60TO64']},
      {label: '65', keys: ['Resident.Male.BET65TO69']},
      {label: '70', keys: ['Resident.Male.BET70TO74']},
      {label: '75', keys: ['Resident.Male.BET75TO79']},
      {label: '80', keys: ['Resident.Male.BET80TO84']},
      {label: '85', keys: ['Resident.Male.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Male.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
      {label: 'Below 5', keys: ['Resident.Male.BET0TO4']},
      {label: '5', keys: ['Resident.Male.BET5TO9']},
      {label: '10', keys: ['Resident.Male.BET10TO14']},
      {label: '15', keys: ['Resident.Male.BET15TO19']},
      {label: '20', keys: ['Resident.Male.BET20TO24']},
      {label: '25', keys: ['Resident.Male.BET25TO29'], checked: true},
      {label: '30', keys: ['Resident.Male.BET30TO34']},
      {label: '35', keys: ['Resident.Male.BET35TO39']},
      {label: '40', keys: ['Resident.Male.BET40TO44']},
      {label: '45', keys: ['Resident.Male.BET45TO49']},
      {label: '50', keys: ['Resident.Male.BET50TO54']},
      {label: '55', keys: ['Resident.Male.BET55TO59']},
      {label: '60', keys: ['Resident.Male.BET60TO64']},
      {label: '65', keys: ['Resident.Male.BET65TO69']},
      {label: '70', keys: ['Resident.Male.BET70TO74']},
      {label: '75', keys: ['Resident.Male.BET75TO79']},
      {label: '80', keys: ['Resident.Male.BET80TO84']},
      {label: '85', keys: ['Resident.Male.OVER85']},
      {label: 'Over 85', keys: [], checked: true}
    ],
    normalize: ['Resident.Male.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Distribution of Dwelling Type By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']},
      {label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH']},
      {label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO']},
      {label: 'Others', keys: ['DwellingType.OTHERS']}
    ],
    normalize: ['DwellingType.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Distribution of Dwelling Type By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']},
      {label: 'Condos and Other Apartments', keys: ['DwellingType.CONDOS_OTH']},
      {label: 'Landed Properties', keys: ['DwellingType.LANDED_PRO']},
      {label: 'Others', keys: ['DwellingType.OTHERS']}
    ],
    normalize: ['DwellingType.TOTAL'],
    threshold: ['Resident.Total.TOTAL', 500]
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
  label: 'Distribution of HDB Dwelling Type By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationPlanningAreaMP98',
    'PopulationPlanningAreaMP08',
    'PopulationPlanningAreaMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']}
    ],
    normalize: ['DwellingType.HDB'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Distribution of HDB Dwelling Type By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: [
    'PopulationSubzoneMP98',
    'PopulationSubzoneMP08',
    'PopulationSubzoneMP14'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['DwellingType.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['DwellingType.THREE_RM']},
      {label: '4 room HDB', keys: ['DwellingType.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['DwellingType.FIVE_RM_EX']}
    ],
    normalize: ['DwellingType.HDB'],
    threshold: ['Resident.Total.TOTAL', 1000]
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
  label: 'Household Electricity Consumption By Dwelling Type & Planning Area',
  years: [2009, 2010, 2011, 2012, 2013],
  sources: [
    'ElectricityConsumption'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'All HDB', keys: ['Electricity.TOTAL']},
      {label: '1 to 2 room HDB', keys: ['Electricity.ONE_TO_TWO']},
      {label: '3 room HDB', keys: ['Electricity.THREE_RM']},
      {label: '4 room HDB', keys: ['Electricity.FOUR_RM']},
      {label: '5 room HDB & Executive Flats', keys: ['Electricity.FIVE_RM_EX']}
    ]
  }],
  mapping: {
    2009: {source: 0, control: 0},
    2010: {source: 0, control: 0},
    2011: {source: 0, control: 0},
    2012: {source: 0, control: 0},
    2013: {source: 0, control: 0}
  },
  format: '0.0'
}, {
  label: 'Economic Status By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Employed', keys: ['getAllEconomicStatus.Female.employed', 'getAllEconomicStatus.Male.employed']},
      {label: 'Unemployed', keys: ['getAllEconomicStatus.Female.unemployed', 'getAllEconomicStatus.Male.unemployed']},
      {label: 'Inactive', keys: ['getAllEconomicStatus.Female.inactive', 'getAllEconomicStatus.Male.inactive']}
    ],
    normalize: [
      'getAllEconomicStatus.Female.employed', 'getAllEconomicStatus.Male.employed',
      'getAllEconomicStatus.Female.unemployed', 'getAllEconomicStatus.Male.unemployed',
      'getAllEconomicStatus.Female.inactive', 'getAllEconomicStatus.Male.inactive'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Economic Status By Planning Area (Female)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Employed', keys: ['getAllEconomicStatus.Female.employed']},
      {label: 'Unemployed', keys: ['getAllEconomicStatus.Female.unemployed']},
      {label: 'Inactive', keys: ['getAllEconomicStatus.Female.inactive']}
    ],
    normalize: [
      'getAllEconomicStatus.Female.employed',
      'getAllEconomicStatus.Female.unemployed',
      'getAllEconomicStatus.Female.inactive'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Economic Status By Planning Area (Male)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Employed', keys: ['getAllEconomicStatus.Male.employed']},
      {label: 'Unemployed', keys: ['getAllEconomicStatus.Male.unemployed']},
      {label: 'Inactive', keys: ['getAllEconomicStatus.Male.inactive']}
    ],
    normalize: [
      'getAllEconomicStatus.Male.employed',
      'getAllEconomicStatus.Male.unemployed',
      'getAllEconomicStatus.Male.inactive'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Unemployment Rate By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Rate', keys: ['getAllEconomicStatus.Female.unemployed', 'getAllEconomicStatus.Male.unemployed']}
    ],
    normalize: [
      'getAllEconomicStatus.Female.employed', 'getAllEconomicStatus.Male.employed',
      'getAllEconomicStatus.Female.unemployed', 'getAllEconomicStatus.Male.unemployed'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Unemployment Rate By Planning Area (Female)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Rate', keys: ['getAllEconomicStatus.Female.unemployed']}
    ],
    normalize: [
      'getAllEconomicStatus.Female.employed',
      'getAllEconomicStatus.Female.unemployed'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Unemployment Rate By Planning Area (Male)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Rate', keys: ['getAllEconomicStatus.Male.unemployed']}
    ],
    normalize: [
      'getAllEconomicStatus.Male.employed',
      'getAllEconomicStatus.Male.unemployed'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Ethnic Group By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Chinese', keys: ['getAllEthnicGroup.Female.chinese', 'getAllEthnicGroup.Male.chinese']},
      {label: 'Malays', keys: ['getAllEthnicGroup.Female.malays', 'getAllEthnicGroup.Male.malays']},
      {label: 'Indians', keys: ['getAllEthnicGroup.Female.indian', 'getAllEthnicGroup.Male.indian']},
      {label: 'Others', keys: ['getAllEthnicGroup.Female.others', 'getAllEthnicGroup.Male.others']}
    ],
    normalize: ['getAllEthnicGroup.Female.total', 'getAllEthnicGroup.Male.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Ethnic Group By Planning Area (Female)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Chinese', keys: ['getAllEthnicGroup.Female.chinese']},
      {label: 'Malays', keys: ['getAllEthnicGroup.Female.malays']},
      {label: 'Indians', keys: ['getAllEthnicGroup.Female.indian']},
      {label: 'Others', keys: ['getAllEthnicGroup.Female.others']}
    ],
    normalize: ['getAllEthnicGroup.Female.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Ethnic Group By Planning Area (Male)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Chinese', keys: ['getAllEthnicGroup.Male.chinese']},
      {label: 'Malays', keys: ['getAllEthnicGroup.Male.malays']},
      {label: 'Indians', keys: ['getAllEthnicGroup.Male.indian']},
      {label: 'Others', keys: ['getAllEthnicGroup.Male.others']}
    ],
    normalize: ['getAllEthnicGroup.Male.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Marital Status By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'Single', keys: ['getAllMaritalStatus.Female.single', 'getAllMaritalStatus.Male.single']},
      {label: 'Married', keys: ['getAllMaritalStatus.Female.married', 'getAllMaritalStatus.Male.married']},
      {label: 'Widowed', keys: ['getAllMaritalStatus.Female.widowed', 'getAllMaritalStatus.Male.widowed']},
      {label: 'Divorced', keys: ['getAllMaritalStatus.Female.divorced', 'getAllMaritalStatus.Male.divorced']}
    ],
    normalize: [
      'getAllMaritalStatus.Female.single', 'getAllMaritalStatus.Male.single',
      'getAllMaritalStatus.Female.married', 'getAllMaritalStatus.Male.married',
      'getAllMaritalStatus.Female.widowed', 'getAllMaritalStatus.Male.widowed',
      'getAllMaritalStatus.Female.divorced', 'getAllMaritalStatus.Male.divorced'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Marital Status By Planning Area (Female)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Single', keys: ['getAllMaritalStatus.Female.single']},
      {label: 'Married', keys: ['getAllMaritalStatus.Female.married']},
      {label: 'Widowed', keys: ['getAllMaritalStatus.Female.widowed']},
      {label: 'Divorced', keys: ['getAllMaritalStatus.Female.divorced']}
    ],
    normalize: [
      'getAllMaritalStatus.Female.single',
      'getAllMaritalStatus.Female.married',
      'getAllMaritalStatus.Female.widowed',
      'getAllMaritalStatus.Female.divorced'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Marital Status By Planning Area (Male)',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Single', keys: ['getAllMaritalStatus.Male.single']},
      {label: 'Married', keys: ['getAllMaritalStatus.Male.married']},
      {label: 'Widowed', keys: ['getAllMaritalStatus.Male.widowed']},
      {label: 'Divorced', keys: ['getAllMaritalStatus.Male.divorced']}
    ],
    normalize: [
      'getAllMaritalStatus.Male.single',
      'getAllMaritalStatus.Male.married',
      'getAllMaritalStatus.Male.widowed',
      'getAllMaritalStatus.Male.divorced'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Education Attainment By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'Pre-primary', keys: ['getAllEducationAttending.pre_primary']},
      {label: 'Primary', keys: ['getAllEducationAttending.primary']},
      {label: 'Secondary', keys: ['getAllEducationAttending.secondary']},
      {label: 'Post-secondary', keys: ['getAllEducationAttending.post_secondary']},
      {label: 'Polytechnic', keys: ['getAllEducationAttending.polytechnic'], checked: true},
      {label: 'Professional diploma', keys: ['getAllEducationAttending.prof_qualification_diploma'], checked: true},
      {label: 'University', keys: ['getAllEducationAttending.university'], checked: true}
    ],
    normalize: [
      'getAllEducationAttending.pre_primary',
      'getAllEducationAttending.primary',
      'getAllEducationAttending.secondary',
      'getAllEducationAttending.post_secondary',
      'getAllEducationAttending.polytechnic',
      'getAllEducationAttending.prof_qualification_diploma',
      'getAllEducationAttending.university'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Religion By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'No religion', keys: ['getAllReligion.no_religion']},
      {label: 'Buddhism', keys: ['getAllReligion.buddhism']},
      {label: 'Taoism', keys: ['getAllReligion.taoism']},
      {label: 'Islam', keys: ['getAllReligion.islam']},
      {label: 'Hinduism', keys: ['getAllReligion.hinduism']},
      {label: 'Sikhism', keys: ['getAllReligion.sikhism']},
      {label: 'Catholics', keys: ['getAllReligion.catholic_christian']},
      {label: 'Christians', keys: ['getAllReligion.other_christians']},
      {label: 'Other religions', keys: ['getAllReligion.other_religions']}
    ],
    normalize: [
      'getAllReligion.no_religion',
      'getAllReligion.buddhism',
      'getAllReligion.taoism',
      'getAllReligion.islam',
      'getAllReligion.hinduism',
      'getAllReligion.sikhism',
      'getAllReligion.catholic_christian',
      'getAllReligion.other_christians',
      'getAllReligion.other_religions'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Language Spoken At Home By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'English', keys: ['getAllSpokenAtHome.english']},
      {label: 'Mandarin', keys: ['getAllSpokenAtHome.mandarin']},
      {label: 'Chinese Dialects', keys: ['getAllSpokenAtHome.chinese_dialects']},
      {label: 'Malay', keys: ['getAllSpokenAtHome.malay']},
      {label: 'Tamil', keys: ['getAllSpokenAtHome.tamil']},
      {label: 'Other Indian Languages', keys: ['getAllSpokenAtHome.other_indian_languages']},
      {label: 'Others', keys: ['getAllSpokenAtHome.others']}
    ],
    normalize: [
      'getAllSpokenAtHome.english',
      'getAllSpokenAtHome.mandarin',
      'getAllSpokenAtHome.chinese_dialects',
      'getAllSpokenAtHome.malay',
      'getAllSpokenAtHome.tamil',
      'getAllSpokenAtHome.other_indian_languages',
      'getAllSpokenAtHome.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Language Literacy By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [{
      label: 'Illiterate',
      keys: ['getAllLanguageLiterate.no_literate']
    }, {
      label: '1 language',
      keys: [
        'getAllLanguageLiterate.l1_chi',
        'getAllLanguageLiterate.l1_eng',
        'getAllLanguageLiterate.l1_mal',
        'getAllLanguageLiterate.l1_tam',
        'getAllLanguageLiterate.l1_non_off'
      ]
    }, {
      label: '2 languages',
      keys: [
        'getAllLanguageLiterate.l2_eng_chi',
        'getAllLanguageLiterate.l2_eng_mal',
        'getAllLanguageLiterate.l2_eng_tam',
        'getAllLanguageLiterate.l2_eng_non_off',
        'getAllLanguageLiterate.l2_other_two'
      ],
      checked: true
    }, {
      label: '3 languages',
      keys: [
        'getAllLanguageLiterate.l3_eng_chi_mal',
        'getAllLanguageLiterate.l3_eng_mal_tam',
        'getAllLanguageLiterate.l3_other_three'
      ],
      checked: true
    }],
    normalize: [
      'getAllLanguageLiterate.no_literate',
      'getAllLanguageLiterate.l1_chi',
      'getAllLanguageLiterate.l1_eng',
      'getAllLanguageLiterate.l1_mal',
      'getAllLanguageLiterate.l1_tam',
      'getAllLanguageLiterate.l1_non_off',
      'getAllLanguageLiterate.l2_eng_chi',
      'getAllLanguageLiterate.l2_eng_mal',
      'getAllLanguageLiterate.l2_eng_tam',
      'getAllLanguageLiterate.l2_eng_non_off',
      'getAllLanguageLiterate.l2_other_two',
      'getAllLanguageLiterate.l3_eng_chi_mal',
      'getAllLanguageLiterate.l3_eng_mal_tam',
      'getAllLanguageLiterate.l3_other_three'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'checkbox',
    items: [{
      label: 'Illiterate',
      keys: ['getAllLanguageLiterate.no_literate']
    }, {
      label: '1 language',
      keys: [
        'getAllLanguageLiterate.l1_chi',
        'getAllLanguageLiterate.l1_eng',
        'getAllLanguageLiterate.l1_mal',
        'getAllLanguageLiterate.l1_tam',
        'getAllLanguageLiterate.l1_non_off'
      ]
    }, {
      label: '2 languages',
      keys: [
        'getAllLanguageLiterate.l2_eng_chi',
        'getAllLanguageLiterate.l2_eng_mal',
        'getAllLanguageLiterate.l2_eng_tam',
        'getAllLanguageLiterate.l2_eng_non_off',
        'getAllLanguageLiterate.l2_other_two'
      ],
      checked: true
    }, {
      label: '3 or more languages',
      keys: ['getAllLanguageLiterate.l3_or_more'],
      checked: true
    }],
    normalize: [
      'getAllLanguageLiterate.no_literate',
      'getAllLanguageLiterate.l1_chi',
      'getAllLanguageLiterate.l1_eng',
      'getAllLanguageLiterate.l1_mal',
      'getAllLanguageLiterate.l1_tam',
      'getAllLanguageLiterate.l1_non_off',
      'getAllLanguageLiterate.l2_eng_chi',
      'getAllLanguageLiterate.l2_eng_mal',
      'getAllLanguageLiterate.l2_eng_tam',
      'getAllLanguageLiterate.l2_eng_non_off',
      'getAllLanguageLiterate.l2_other_two',
      'getAllLanguageLiterate.l3_or_more'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 1}
  },
  format: '0%'
}, {
  label: 'Literate Language By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [{
      label: 'Illiterate',
      keys: ['getAllLanguageLiterate.no_literate']
    }, {
      label: 'English',
      keys: [
        'getAllLanguageLiterate.l1_eng',
        'getAllLanguageLiterate.l2_eng_chi',
        'getAllLanguageLiterate.l2_eng_mal',
        'getAllLanguageLiterate.l2_eng_tam',
        'getAllLanguageLiterate.l2_eng_non_off',
        'getAllLanguageLiterate.l3_eng_chi_mal',
        'getAllLanguageLiterate.l3_eng_mal_tam'
      ],
      checked: true
    }, {
      label: 'Chinese',
      keys: [
        'getAllLanguageLiterate.l1_chi',
        'getAllLanguageLiterate.l2_eng_chi',
        'getAllLanguageLiterate.l3_eng_chi_mal'
      ]
    }, {
      label: 'Malay',
      keys: [
        'getAllLanguageLiterate.l1_mal',
        'getAllLanguageLiterate.l2_eng_mal',
        'getAllLanguageLiterate.l3_eng_chi_mal',
        'getAllLanguageLiterate.l3_eng_mal_tam'
      ]
    }, {
      label: 'Tamil',
      keys: [
        'getAllLanguageLiterate.l1_tam',
        'getAllLanguageLiterate.l2_eng_tam',
        'getAllLanguageLiterate.l3_eng_mal_tam'
      ]
    }],
    normalize: [
      'getAllLanguageLiterate.no_literate',
      'getAllLanguageLiterate.l1_chi',
      'getAllLanguageLiterate.l1_eng',
      'getAllLanguageLiterate.l1_mal',
      'getAllLanguageLiterate.l1_tam',
      'getAllLanguageLiterate.l1_non_off',
      'getAllLanguageLiterate.l2_eng_chi',
      'getAllLanguageLiterate.l2_eng_mal',
      'getAllLanguageLiterate.l2_eng_tam',
      'getAllLanguageLiterate.l2_eng_non_off',
      'getAllLanguageLiterate.l2_other_two',
      'getAllLanguageLiterate.l3_eng_chi_mal',
      'getAllLanguageLiterate.l3_eng_mal_tam',
      'getAllLanguageLiterate.l3_other_three'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'checkbox',
    items: [{
      label: 'Illiterate',
      keys: ['getAllLanguageLiterate.no_literate']
    }, {
      label: 'English',
      keys: [
        'getAllLanguageLiterate.l1_eng',
        'getAllLanguageLiterate.l2_eng_chi',
        'getAllLanguageLiterate.l2_eng_mal',
        'getAllLanguageLiterate.l2_eng_tam',
        'getAllLanguageLiterate.l2_eng_non_off'
      ],
      checked: true
    }, {
      label: 'Chinese',
      keys: [
        'getAllLanguageLiterate.l1_chi',
        'getAllLanguageLiterate.l2_eng_chi'
      ]
    }, {
      label: 'Malay',
      keys: [
        'getAllLanguageLiterate.l1_mal',
        'getAllLanguageLiterate.l2_eng_mal'
      ]
    }, {
      label: 'Tamil',
      keys: [
        'getAllLanguageLiterate.l1_tam',
        'getAllLanguageLiterate.l2_eng_tam'
      ]
    }],
    normalize: [
      'getAllLanguageLiterate.no_literate',
      'getAllLanguageLiterate.l1_chi',
      'getAllLanguageLiterate.l1_eng',
      'getAllLanguageLiterate.l1_mal',
      'getAllLanguageLiterate.l1_tam',
      'getAllLanguageLiterate.l1_non_off',
      'getAllLanguageLiterate.l2_eng_chi',
      'getAllLanguageLiterate.l2_eng_mal',
      'getAllLanguageLiterate.l2_eng_tam',
      'getAllLanguageLiterate.l2_eng_non_off',
      'getAllLanguageLiterate.l2_other_two',
      'getAllLanguageLiterate.l3_or_more'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 1}
  },
  format: '0%'
}, {
  label: 'Monthly Income from Work By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllIncomeFromWork.below_sgd_1000']},
      {label: 'SGD 1000', keys: ['getAllIncomeFromWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllIncomeFromWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllIncomeFromWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllIncomeFromWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllIncomeFromWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllIncomeFromWork.sgd_6000_over']},
      {label: 'Over SGD 6000', keys: []}
    ],
    normalize: ['getAllIncomeFromWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllIncomeFromWork.below_sgd_1000']},
      {label: 'SGD 1000', keys: ['getAllIncomeFromWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllIncomeFromWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllIncomeFromWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllIncomeFromWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllIncomeFromWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllIncomeFromWork.sgd_6000_to_6999']},
      {label: 'SGD 7000', keys: ['getAllIncomeFromWork.sgd_7000_to_7999']},
      {label: 'SGD 8000', keys: ['getAllIncomeFromWork.sgd_8000_over']},
      {label: 'Over SGD 8000', keys: []}
    ],
    normalize: ['getAllIncomeFromWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllIncomeFromWork.below_sgd_1000']},
      {label: 'SGD 1000', keys: ['getAllIncomeFromWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllIncomeFromWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllIncomeFromWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllIncomeFromWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllIncomeFromWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllIncomeFromWork.sgd_6000_to_6999']},
      {label: 'SGD 7000', keys: ['getAllIncomeFromWork.sgd_7000_to_7999']},
      {label: 'SGD 8000', keys: ['getAllIncomeFromWork.sgd_8000_to_8999']},
      {label: 'SGD 9000', keys: ['getAllIncomeFromWork.sgd_9000_to_9999']},
      {label: 'SGD 10000', keys: ['getAllIncomeFromWork.sgd_10000_to_10999']},
      {label: 'SGD 11000', keys: ['getAllIncomeFromWork.sgd_11000_to_11999']},
      {label: 'SGD 12000', keys: ['getAllIncomeFromWork.sgd_12000_over']},
      {label: 'Over SGD 12000', keys: []}
    ],
    normalize: ['getAllIncomeFromWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 1},
    2015: {source: 2, control: 2}
  },
  format: '0%'
}, {
  label: 'Household Monthly Income from Work By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.below_sgd_1000']},
      {label: 'SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_6000_to_6999']},
      {label: 'SGD 7000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_7000_to_7999']},
      {label: 'SGD 8000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_8000_over']},
      {label: 'Over SGD 8000', keys: []}
    ],
    normalize: ['getAllHouseholdMonthlyIncomeWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.below_sgd_1000', 'getAllHouseholdMonthlyIncomeWork.no_working_person']},
      {label: 'SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_6000_to_6999']},
      {label: 'SGD 7000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_7000_to_7999']},
      {label: 'SGD 8000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_8000_to_8999']},
      {label: 'SGD 9000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_9000_to_9999']},
      {label: 'SGD 10000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_10000_over']},
      {label: 'Over SGD 10000', keys: []}
    ],
    normalize: ['getAllHouseholdMonthlyIncomeWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'range',
    items: [
      {label: 'Below SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.below_sgd_1000', 'getAllHouseholdMonthlyIncomeWork.no_working_person']},
      {label: 'SGD 1000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_1000_to_1999']},
      {label: 'SGD 2000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_2000_to_2999']},
      {label: 'SGD 3000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_3000_to_3999']},
      {label: 'SGD 4000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_4000_to_4999']},
      {label: 'SGD 5000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_5000_to_5999']},
      {label: 'SGD 6000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_6000_to_6999']},
      {label: 'SGD 7000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_7000_to_7999']},
      {label: 'SGD 8000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_8000_to_8999']},
      {label: 'SGD 9000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_9000_to_9999']},
      {label: 'SGD 10000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_10000_to_10999']},
      {label: 'SGD 11000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_11000_to_11999']},
      {label: 'SGD 12000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_12000_to_12999']},
      {label: 'SGD 13000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_13000_to_13999']},
      {label: 'SGD 14000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_14000_to_14999']},
      {label: 'SGD 15000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_15000_to_17499']},
      {label: 'SGD 17500', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_17500_to_19999']},
      {label: 'SGD 20000', keys: ['getAllHouseholdMonthlyIncomeWork.sgd_20000_over']},
      {label: 'Over SGD 20000', keys: []}
    ],
    normalize: ['getAllHouseholdMonthlyIncomeWork.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 1},
    2015: {source: 2, control: 2}
  },
  format: '0%'
}, {
  label: 'Household Size By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 person', keys: ['getAllHouseholdSize.person1'], checked: true},
      {label: '2 persons', keys: ['getAllHouseholdSize.person2'], checked: true},
      {label: '3 persons', keys: ['getAllHouseholdSize.person3']},
      {label: '4 persons', keys: ['getAllHouseholdSize.person4']},
      {label: '5 persons', keys: ['getAllHouseholdSize.person5']},
      {label: '6 persons', keys: ['getAllHouseholdSize.person6']},
      {label: '7 persons', keys: ['getAllHouseholdSize.person7']},
      {label: '8 or more persons', keys: ['getAllHouseholdSize.person_more_8']}
    ],
    normalize: [
      'getAllHouseholdSize.person1',
      'getAllHouseholdSize.person2',
      'getAllHouseholdSize.person3',
      'getAllHouseholdSize.person4',
      'getAllHouseholdSize.person5',
      'getAllHouseholdSize.person6',
      'getAllHouseholdSize.person7',
      'getAllHouseholdSize.person_more_8'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'checkbox',
    items: [
      {label: '1 person', keys: ['getAllHouseholdSize.person1'], checked: true},
      {label: '2 persons', keys: ['getAllHouseholdSize.person2'], checked: true},
      {label: '3 persons', keys: ['getAllHouseholdSize.person3']},
      {label: '4 persons', keys: ['getAllHouseholdSize.person4']},
      {label: '5 persons', keys: ['getAllHouseholdSize.person5']},
      {label: '6 or more persons', keys: ['getAllHouseholdSize.person_more_6']}
    ],
    normalize: [
      'getAllHouseholdSize.person1',
      'getAllHouseholdSize.person2',
      'getAllHouseholdSize.person3',
      'getAllHouseholdSize.person4',
      'getAllHouseholdSize.person5',
      'getAllHouseholdSize.person_more_6'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 1},
    2015: {source: 2, control: 1}
  },
  format: '0%'
}, {
  label: 'Household Structure By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'No family nucleus', keys: ['getAllHouseholdStructure.no_family_nucleus']},
      {label: '1 nucleus 1 generation', keys: ['getAllHouseholdStructure.ofn_1_gen'], checked: true},
      {label: '1 nucleus 2 generations', keys: ['getAllHouseholdStructure.ofn_2_gen'], checked: true},
      {label: '1 nucleus 3 or more generations persons', keys: ['getAllHouseholdStructure.ofn_3_more_gen'], checked: true},
      {label: '2 nuclei 1 to 2 generations', keys: ['getAllHouseholdStructure.tfn_1to2_gen']},
      {label: '2 nuclei 3 or more generations', keys: ['getAllHouseholdStructure.tfn_3_more_gen']},
      {label: '3 or more family nuclei', keys: ['getAllHouseholdStructure.three_more_fam_nucleus']}
    ],
    normalize: [
      'getAllHouseholdStructure.no_family_nucleus',
      'getAllHouseholdStructure.ofn_1_gen',
      'getAllHouseholdStructure.ofn_2_gen',
      'getAllHouseholdStructure.ofn_3_more_gen',
      'getAllHouseholdStructure.tfn_1to2_gen',
      'getAllHouseholdStructure.tfn_3_more_gen',
      'getAllHouseholdStructure.three_more_fam_nucleus'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'checkbox',
    items: [
      {label: 'No family nucleus', keys: ['getAllHouseholdStructure.no_family_nucleus']},
      {label: '1 nucleus 1 generation', keys: ['getAllHouseholdStructure.ofn_1_gen'], checked: true},
      {label: '1 nucleus 2 generations', keys: ['getAllHouseholdStructure.ofn_2_gen'], checked: true},
      {label: '1 nucleus 3 or more generations', keys: ['getAllHouseholdStructure.ofn_3_more_gen'], checked: true},
      {label: '2 or more family nuclei', keys: ['getAllHouseholdStructure.two_more_fam_nucleus']}
    ],
    normalize: [
      'getAllHouseholdStructure.no_family_nucleus',
      'getAllHouseholdStructure.ofn_1_gen',
      'getAllHouseholdStructure.ofn_2_gen',
      'getAllHouseholdStructure.ofn_3_more_gen',
      'getAllHouseholdStructure.two_more_fam_nucleus'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 1}
  },
  format: '0%'
}, {
  label: 'Household Dwelling Type By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: '1 to 2 room HDB', keys: ['getAllTypeOfDwellingHousehold.hdb_1_and_2_room_flats']},
      {label: '3 room HDB', keys: ['getAllTypeOfDwellingHousehold.hdb_3_room_flats']},
      {label: '4 room HDB', keys: ['getAllTypeOfDwellingHousehold.hdb_4_room_flats']},
      {label: '5 room HDB & Executive Flats', keys: ['getAllTypeOfDwellingHousehold.hdb_5_room_and_executive_flats']},
      {label: 'Condos and Other Apartments', keys: ['getAllTypeOfDwellingHousehold.condominiums_and_other_apartments']},
      {label: 'Landed Properties', keys: ['getAllTypeOfDwellingHousehold.landed_properties']},
      {label: 'Others', keys: ['getAllTypeOfDwellingHousehold.others']}
    ],
    normalize: ['getAllTypeOfDwellingHousehold.total'],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Household Dwelling Tenancy By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'radio',
    items: [
      {label: 'Owner', keys: ['getAllTenancy.owner']},
      {label: 'Tenant', keys: ['getAllTenancy.tenant']}
    ],
    normalize: [
      'getAllTenancy.owner',
      'getAllTenancy.tenant',
      'getAllTenancy.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Occupation By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'Managers', keys: ['getAllOccupation.senior_officials_managers'], checked: true},
      {label: 'Professionals', keys: ['getAllOccupation.professionals'], checked: true},
      {label: 'Technicians', keys: ['getAllOccupation.associate_professionals_tech'], checked: true},
      {label: 'Clericals', keys: ['getAllOccupation.clerical']},
      {label: 'Service & Sales', keys: ['getAllOccupation.service_sales']},
      {label: 'Agricultural & Fishery', keys: ['getAllOccupation.agricultural_fishery']},
      {label: 'Production craftsmen', keys: ['getAllOccupation.production_craftsmen']},
      {label: 'Machine operators', keys: ['getAllOccupation.plant_machine_operators']},
      {label: 'Cleaners & Labourers', keys: ['getAllOccupation.cleaners_labourers']},
      {label: 'Workers not classified', keys: ['getAllOccupation.workers_not_classified']}
    ],
    normalize: [
      'getAllOccupation.senior_officials_managers',
      'getAllOccupation.professionals',
      'getAllOccupation.associate_professionals_tech',
      'getAllOccupation.clerical',
      'getAllOccupation.service_sales',
      'getAllOccupation.agricultural_fishery',
      'getAllOccupation.production_craftsmen',
      'getAllOccupation.plant_machine_operators',
      'getAllOccupation.cleaners_labourers',
      'getAllOccupation.workers_not_classified'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Industry of Work By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'Manufacturing', keys: ['getAllIndustry.manufacturing']},
      {label: 'Construction', keys: ['getAllIndustry.construction']},
      {label: 'Wholesale, Retail & Trading', keys: ['getAllIndustry.wholesale_retail_trade']},
      {label: 'Transportation & Communications', keys: ['getAllIndustry.transport_communications']},
      {label: 'Accomodation & Food Services', keys: ['getAllIndustry.hotels_restaurants']},
      {label: 'Business Services', keys: ['getAllIndustry.business_services']},
      {label: 'Other Services', keys: ['getAllIndustry.other_services_industries']}
    ],
    normalize: [
      'getAllIndustry.manufacturing',
      'getAllIndustry.construction',
      'getAllIndustry.wholesale_retail_trade',
      'getAllIndustry.transport_communications',
      'getAllIndustry.hotels_restaurants',
      'getAllIndustry.business_services',
      'getAllIndustry.other_services_industries',
      'getAllIndustry.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }, {
    type: 'checkbox',
    items: [
      {label: 'Manufacturing', keys: ['getAllIndustry.manufacturing']},
      {label: 'Construction', keys: ['getAllIndustry.construction']},
      {label: 'Wholesale, Retail & Trading', keys: ['getAllIndustry.wholesale_retail_trade']},
      {label: 'Transportation & Storage', keys: ['getAllIndustry.transportation_storage']},
      {label: 'Accomodation & Food Services', keys: ['getAllIndustry.accommodation_food_services']},
      {label: 'Information & Communications', keys: ['getAllIndustry.information_communications']},
      {label: 'Financial Services', keys: ['getAllIndustry.financial_insurance_services']},
      {label: 'Real Estate Services', keys: ['getAllIndustry.real_estate_services']},
      {label: 'Professional Services', keys: ['getAllIndustry.professional_services']},
      {label: 'Admin Support', keys: ['getAllIndustry.admin_support_services']},
      {label: 'Public Service & Education', keys: ['getAllIndustry.public_admin_education']},
      {label: 'Healthcare & Social Services', keys: ['getAllIndustry.health_social_services']},
      {label: 'Arts & Entertainment', keys: ['getAllIndustry.arts_entertainment_recreation']},
      {label: 'Other Services', keys: ['getAllIndustry.other_comm_social_personal']}
    ],
    normalize: [
      'getAllIndustry.manufacturing',
      'getAllIndustry.construction',
      'getAllIndustry.wholesale_retail_trade',
      'getAllIndustry.transportation_storage',
      'getAllIndustry.accommodation_food_services',
      'getAllIndustry.information_communications',
      'getAllIndustry.financial_insurance_services',
      'getAllIndustry.real_estate_services',
      'getAllIndustry.professional_services',
      'getAllIndustry.admin_support_services',
      'getAllIndustry.public_admin_education',
      'getAllIndustry.health_social_services',
      'getAllIndustry.arts_entertainment_recreation',
      'getAllIndustry.other_comm_social_personal',
      'getAllIndustry.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 1},
    2015: {source: 2, control: 1}
  },
  format: '0%'
}, {
  label: 'Transport to Work By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'No transport required', keys: ['getAllModeOfTransportWork.no_transport_required']},
      {label: 'Bus', keys: ['getAllModeOfTransportWork.bus']},
      {label: 'MRT', keys: ['getAllModeOfTransportWork.mrt']},
      {label: 'MRT & Bus', keys: ['getAllModeOfTransportWork.mrt_bus']},
      {
        label: 'Other combinations with MRT',
        keys: [
          'getAllModeOfTransportWork.mrt_car',
          'getAllModeOfTransportWork.mrt_other',
          'getAllModeOfTransportWork.other_combi_mrt_or_bus'
        ]
      },
      {label: 'Taxi', keys: ['getAllModeOfTransportWork.taxi']},
      {label: 'Car', keys: ['getAllModeOfTransportWork.car']},
      {label: 'Chartered bus', keys: ['getAllModeOfTransportWork.pvt_chartered_bus']},
      {label: 'Lorry pickup', keys: ['getAllModeOfTransportWork.lorry_pickup']},
      {label: 'Motorcycle', keys: ['getAllModeOfTransportWork.motorcycle_scooter']}
    ],
    normalize: [
      'getAllModeOfTransportWork.no_transport_required',
      'getAllModeOfTransportWork.bus',
      'getAllModeOfTransportWork.mrt',
      'getAllModeOfTransportWork.mrt_bus',
      'getAllModeOfTransportWork.mrt_car',
      'getAllModeOfTransportWork.mrt_other',
      'getAllModeOfTransportWork.other_combi_mrt_or_bus',
      'getAllModeOfTransportWork.taxi',
      'getAllModeOfTransportWork.car',
      'getAllModeOfTransportWork.pvt_chartered_bus',
      'getAllModeOfTransportWork.lorry_pickup',
      'getAllModeOfTransportWork.motorcycle_scooter',
      'getAllModeOfTransportWork.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}, {
  label: 'Transport to School By Planning Area',
  years: [2000, 2010, 2015],
  sources: [
    'Census2000',
    'Census2010',
    'Census2015'
  ],
  controls: [{
    type: 'checkbox',
    items: [
      {label: 'No transport required', keys: ['getAllModeOfTransportWork.no_transport_required']},
      {label: 'Bus', keys: ['getAllModeOfTransportWork.bus']},
      {label: 'MRT', keys: ['getAllModeOfTransportWork.mrt']},
      {label: 'MRT & Bus', keys: ['getAllModeOfTransportWork.mrt_bus']},
      {
        label: 'Other combinations with MRT',
        keys: [
          'getAllModeOfTransportWork.mrt_car',
          'getAllModeOfTransportWork.mrt_other',
          'getAllModeOfTransportWork.other_combi_mrt_or_bus'
        ]
      },
      {label: 'Taxi', keys: ['getAllModeOfTransportWork.taxi']},
      {label: 'Car', keys: ['getAllModeOfTransportWork.car']},
      {label: 'Chartered bus', keys: ['getAllModeOfTransportWork.pvt_chartered_bus']},
      {label: 'Lorry pickup', keys: ['getAllModeOfTransportWork.lorry_pickup']},
      {label: 'Motorcycle', keys: ['getAllModeOfTransportWork.motorcycle_scooter']}
    ],
    normalize: [
      'getAllModeOfTransportWork.no_transport_required',
      'getAllModeOfTransportWork.bus',
      'getAllModeOfTransportWork.mrt',
      'getAllModeOfTransportWork.mrt_bus',
      'getAllModeOfTransportWork.mrt_car',
      'getAllModeOfTransportWork.mrt_other',
      'getAllModeOfTransportWork.other_combi_mrt_or_bus',
      'getAllModeOfTransportWork.taxi',
      'getAllModeOfTransportWork.car',
      'getAllModeOfTransportWork.pvt_chartered_bus',
      'getAllModeOfTransportWork.lorry_pickup',
      'getAllModeOfTransportWork.motorcycle_scooter',
      'getAllModeOfTransportWork.others'
    ],
    threshold: ['getAllPopulationAgeGroup.Total.total', 1000]
  }],
  mapping: {
    2000: {source: 0, control: 0},
    2010: {source: 1, control: 0},
    2015: {source: 2, control: 0}
  },
  format: '0%'
}]
