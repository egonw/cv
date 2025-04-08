// Load Citation.js
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

articles = [
"10.1038/s41597-024-03324-x",
"10.1186/s13321-024-00833-0",
"10.3897/rio.10.e124884",
"10.37044/osf.io/qvftj",
"10.1039/d3dd00069a",
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
