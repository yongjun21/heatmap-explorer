export const ONEMAP_TOKEN = 'https://developers.onemap.sg/publicapi/publicsessionid'

export const ONEMAP_ENDPOINTS = [
  'getAllEconomicStatus',
  'getAllEducationAttending',
  'getAllEthnicGroup',
  'getAllHouseholdMonthlyIncomeWork',
  'getAllHouseholdSize',
  'getAllHouseholdStructure',
  'getAllIncomeFromWork',
  'getAllIndustry',
  'getAllLanguageLiterate',
  'getAllMaritalStatus',
  'getAllModeOfTransportSchool',
  'getAllModeOfTransportWork',
  'getAllOccupation',
  'getAllPopulationAgeGroup',
  'getAllReligion',
  'getAllSpokenAtHome',
  'getAllTenancy',
  'getAllTypeOfDwellingHousehold',
  'getAllTypeOfDwellingPop'
]

export const GEOSPACE_DATASETS = {
  'DwellingType': /singapore-residents-by-subzone-and-type-of-dwelling-june-(\d{4})/,
  'Resident.Total': /singapore-residents-by-subzone-age-group-and-sex-june-(\d{4})-gender/,
  'Resident.Male': /singapore-residents-by-subzone-age-group-and-sex-june-(\d{4})-male/,
  'Electricity': /average-monthly-household-electricity-consumption-by-ura-planning-area-and-dwelling-type-(\d{4})/
}

export const YEAR2MAP = {
  mp98: ['2000'],
  mp08: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
  mp14: ['2011', '2012', '2013', '2014', '2015', '2016'],
  electricity: ['2009', '2010', '2011', '2012', '2013']
}

export const DWELLING_TYPES_BLANK = {
  'TOTAL': 0,
  'HDB': 0,
  'ONE_TO_TWO': 0,
  'THREE_RM': 0,
  'FOUR_RM': 0,
  'FIVE_RM_EX': 0,
  'CONDOS_OTH': 0,
  'LANDED_PRO': 0,
  'OTHERS': 0
}

export const RESIDENT_BLANK = {
  'TOTAL': 0,
  'BET0TO4': 0,
  'BET5TO9': 0,
  'BET10TO14': 0,
  'BET15TO19': 0,
  'BET20TO24': 0,
  'BET25TO29': 0,
  'BET30TO34': 0,
  'BET35TO39': 0,
  'BET40TO44': 0,
  'BET45TO49': 0,
  'BET50TO54': 0,
  'BET55TO59': 0,
  'BET60TO64': 0,
  'BET65TO69': 0,
  'BET70TO74': 0,
  'BET75TO79': 0,
  'BET80TO84': 0,
  'OVER85': 0
}

export const ELECTRICITY_BLANK = {
  'TOTAL': 0,
  'ONE_TO_TWO': 0,
  'THREE_RM': 0,
  'FOUR_RM': 0,
  'FIVE_RM_EX': 0
}
