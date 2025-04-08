// Load Citation.js
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

articles = [
"10.1093/toxsci/kfx252",
"10.1016/j.impact.2017.11.002",
"10.12688/f1000research.12342.2",
"10.1007/s00204-017-2045-3",
"10.1186/s13326-017-0136-y",
]

// Parse input
Cite.async(articles).then(data => {
  // Format output
  const bibliography = data.format('bibliography', {
    format: 'markdown',
    template: 'apa-cv',
    lang: 'en-US'
  })
  console.log(bibliography)
})
