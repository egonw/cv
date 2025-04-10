// Load Citation.js
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

articles = [
"10.1186/s13321-021-00521-3",
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
