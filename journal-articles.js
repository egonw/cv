// Load Citation.js
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

articles = [
"10.1093/bioinformatics/btr409",
"10.1186/1758-2946-3-s1-p5",
"10.1002/9781118026038.ch24",
"10.1186/1756-0500-4-487",
"10.1186/1758-2946-3-19",
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
