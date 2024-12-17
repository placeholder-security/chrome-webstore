
module.exports = (detail) => ({
  id: detail[0][0],
  name: detail[0][1],
  title: detail[0][6],
  slug: detail[0][61],
  url: `https://chromewebstore.google.com/detail/${detail[0][61]}/${detail[0][0]}`,
  version: detail[6],
  size: detail[25],
  published: detail[7],
  description: detail[1],
  type: detail[10],
  category: {
    name: detail[0][10],
    slug: detail[0][9],
  },
  author: {
    name: detail[0][2],
    domain: detail[0][35],
    url: detail[0][81],
  },
  developer: {
    policy: detail[41] || null,
    verified: !!detail[0][34] || null,
    trader: !!detail[0][78] || null,
  },
  website: detail[3],
  support: detail[5],
  users: detail[0][23],
  rating: {
    average: detail[0][12],
    count: detail[0][22],
  },
  featured: !!detail[0][89] || null,
  images: {
    '26x26': detail[0][3],
    '128x128': detail[0][25],
    '141x90': detail[0][65],
    '220x140': detail[0][4],
    '440x280': detail[0][76],
    '460x340': detail[0][5],
    '700x280': detail[0][17],
  },
  video: String(detail[11]?.[0]?.[19]).includes('youtube.com')
    ? `https://www.youtube.com/watch?v=${detail[11][0][19].replace(/.*embed\/(.*)\?.*/, '$1')}`
    : null,
  screenshots: (String(detail[11]?.[0]?.[19]).includes('youtube.com') ? detail[11].slice(1) : detail[11])
    ?.map((arr) => arr[17]).filter(Boolean),
  languages: detail[8],
  features: [
    detail[0][78] && 'Offers in-app purchases',
    detail[0][53] && 'Runs offline',
    detail[0][69] && 'Available for Android',
    detail[0][56] && 'By Google',
  ].filter(Boolean),
  android: detail[0][69] || null,
  collects: (detail[39] || []).map((index) => ({
    1: 'Personally identifiable information',
    2: 'Health information',
    3: 'Financial and payment information',
    4: 'Authentication information',
    5: 'Personal communications',
    6: 'Location',
    7: 'Web history',
    8: 'User activity',
    9: 'Website content',
  }[index])),
  manifest: detail[9][0],
})
