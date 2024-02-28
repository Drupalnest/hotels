const regions = {
  "US": {
    "AL": {
      "name": "Alabama"
    },
    "AK": {
      "name": "Alaska"
    },
    "AS": {
      "name": "American Samoa"
    },
    "AZ": {
      "name": "Arizona"
    },
    "AR": {
      "name": "Arkansas"
    },
    "AA": {
      "name": "Armed Forces (AA)"
    },
    "AE": {
      "name": "Armed Forces (AE)"
    },
    "AP": {
      "name": "Armed Forces (AP)"
    },
    "CA": {
      "name": "California"
    },
    "CO": {
      "name": "Colorado"
    },
    "CT": {
      "name": "Connecticut"
    },
    "DE": {
      "name": "Delaware"
    },
    "DC": {
      "name": "District of Columbia"
    },
    "FL": {
      "name": "Florida"
    },
    "GA": {
      "name": "Georgia"
    },
    "GU": {
      "name": "Guam"
    },
    "HI": {
      "name": "Hawaii"
    },
    "ID": {
      "name": "Idaho"
    },
    "IL": {
      "name": "Illinois"
    },
    "IN": {
      "name": "Indiana"
    },
    "IA": {
      "name": "Iowa"
    },
    "KS": {
      "name": "Kansas"
    },
    "KY": {
      "name": "Kentucky"
    },
    "LA": {
      "name": "Louisiana"
    },
    "ME": {
      "name": "Maine"
    },
    "MH": {
      "name": "Marshall Islands"
    },
    "MD": {
      "name": "Maryland"
    },
    "MA": {
      "name": "Massachusetts"
    },
    "MI": {
      "name": "Michigan"
    },
    "FM": {
      "name": "Micronesia"
    },
    "MN": {
      "name": "Minnesota"
    },
    "MS": {
      "name": "Mississippi"
    },
    "MO": {
      "name": "Missouri"
    },
    "MT": {
      "name": "Montana"
    },
    "NE": {
      "name": "Nebraska"
    },
    "NV": {
      "name": "Nevada"
    },
    "NH": {
      "name": "New Hampshire"
    },
    "NJ": {
      "name": "New Jersey"
    },
    "NM": {
      "name": "New Mexico"
    },
    "NY": {
      "name": "New York"
    },
    "NC": {
      "name": "North Carolina"
    },
    "ND": {
      "name": "North Dakota"
    },
    "MP": {
      "name": "Northern Mariana Islands"
    },
    "OH": {
      "name": "Ohio"
    },
    "OK": {
      "name": "Oklahoma"
    },
    "OR": {
      "name": "Oregon"
    },
    "PW": {
      "name": "Palau"
    },
    "PA": {
      "name": "Pennsylvania"
    },
    "PR": {
      "name": "Puerto Rico"
    },
    "RI": {
      "name": "Rhode Island"
    },
    "SC": {
      "name": "South Carolina"
    },
    "SD": {
      "name": "South Dakota"
    },
    "TN": {
      "name": "Tennessee"
    },
    "TX": {
      "name": "Texas"
    },
    "UT": {
      "name": "Utah"
    },
    "VT": {
      "name": "Vermont"
    },
    "VI": {
      "name": "Virgin Islands"
    },
    "VA": {
      "name": "Virginia"
    },
    "WA": {
      "name": "Washington"
    },
    "WV": {
      "name": "West Virginia"
    },
    "WI": {
      "name": "Wisconsin"
    },
    "WY": {
      "name": "Wyoming"
    }
  },
  "CA": {
    "AB": {
      "local_name": "Alberta",
      "name": "Alberta"
    },
    "BC": {
      "local_name": "Colombie-Britannique",
      "name": "British Columbia"
    },
    "MB": {
      "local_name": "Manitoba",
      "name": "Manitoba"
    },
    "NB": {
      "local_name": "Nouveau-Brunswick",
      "name": "New Brunswick"
    },
    "NL": {
      "local_name": "Terre-Neuve-et-Labrador",
      "name": "Newfoundland and Labrador"
    },
    "NT": {
      "local_name": "Territoires du Nord-Ouest",
      "name": "Northwest Territories"
    },
    "NS": {
      "local_name": "Nouvelle-Écosse",
      "name": "Nova Scotia"
    },
    "NU": {
      "local_name": "Nunavut",
      "name": "Nunavut"
    },
    "ON": {
      "local_name": "Ontario",
      "name": "Ontario"
    },
    "PE": {
      "local_name": "Île-du-Prince-Édouard",
      "name": "Prince Edward Island"
    },
    "QC": {
      "local_name": "Québec",
      "name": "Quebec"
    },
    "SK": {
      "local_name": "Saskatchewan",
      "name": "Saskatchewan"
    },
    "YT": {
      "local_name": "Yukon",
      "name": "Yukon"
    }
  },
  "KR": {
    "Gangwon-do": {
      "local_name": "강원",
      "name": "Gangwon-do"
    },
    "Gyeonggi-do": {
      "local_name": "경기",
      "name": "Gyeonggi-do"
    },
    "Gyeongsangnam-do": {
      "local_name": "경남",
      "name": "Gyeongsangnam-do"
    },
    "Gyeongsangbuk-do": {
      "local_name": "경북",
      "name": "Gyeongsangbuk-do"
    },
    "Gwangju": {
      "local_name": "광주",
      "name": "Gwangju"
    },
    "Daegu": {
      "local_name": "대구",
      "name": "Daegu"
    },
    "Daejeon": {
      "local_name": "대전",
      "name": "Daejeon"
    },
    "Busan": {
      "local_name": "부산",
      "name": "Busan"
    },
    "Seoul": {
      "local_name": "서울",
      "name": "Seoul"
    },
    "Sejong": {
      "local_name": "세종",
      "name": "Sejong"
    },
    "Ulsan": {
      "local_name": "울산",
      "name": "Ulsan"
    },
    "Incheon": {
      "local_name": "인천",
      "name": "Incheon"
    },
    "Jeollanam-do": {
      "local_name": "전남",
      "name": "Jeollanam-do"
    },
    "Jeollabuk-do": {
      "local_name": "전북",
      "name": "Jeollabuk-do"
    },
    "Jeju-do": {
      "local_name": "제주",
      "name": "Jeju-do"
    },
    "Chungcheongnam-do": {
      "local_name": "충남",
      "name": "Chungcheongnam-do"
    },
    "Chungcheongbuk-do": {
      "local_name": "충북",
      "name": "Chungcheongbuk-do"
    }
  }
};

exports.getAddressStateName = (countryCode, stateCode) => {
  const stateName = regions.hasOwnProperty(countryCode) ? regions[countryCode][stateCode].name : null;
  return stateName;
}
exports.regions = regions;
