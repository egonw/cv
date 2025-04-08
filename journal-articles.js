// Load Citation.js
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

articles = [
"10.1186/s13321-022-00614-7",
"10.1021/acs.jcim.2c00268",
"10.7554/elife.70780",
"10.1371/journal.pone.0263057",
"10.1016/j.impact.2022.100402",
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
