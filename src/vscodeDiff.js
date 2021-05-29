function vscodeDiff(rootElement) {
  const d = console.log.bind(console)

  const one = `[
    {type:'assignment', text:'v', i1:0, c1:undefined, c2:1},
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'{ object', text:'{', i1:0, c1:3},
    ooffewfwefwef
    {type:'} object', text:'}', i1:0, c1:4},
    ooffewfwefwef
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'end assignment'},
    ooffewfwefwef
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    first
    second
    third
  ]`,
    other = `[
    {type:'assignment', text:'v', i1:0, c1:undefined, c2:1},
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'{ object', text:'Map(', i1:0, c1:3},
    ooffewfwefwef
    {type:'} object', text:')', i1:0, c1:4},
    ooffewfwefwef
    {type:'2operator', text:'multi
    line
    3rd
    ', i1:0, c1:1, c2:3},
    {type:'end assignment'},
    ooffewfwefwef
    first
    second
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
  ]`
  /* const one = `[
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    first
    second
    third
  ]`,
    other = `[
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
  ]` */

  rootElement.style.backgroundColor = "#1e1e1e"
  // document.body.style.backgroundColor = "#1e1e1e"

  let span = null

  // console.log(Diff.diffLines(one, other))

  const diff = Diff.diffChars(one, other)

  //<pre id="pre1" style="position: relative;width: 49vw;display: inline-block"></pre>
  //<pre id="pre2" style="position: relative;width: 49vw;display: inline-block"></pre>
  // pre1 = document.getElementById('pre1')
  // pre2 = document.getElementById('pre2')

  const pre1 = document.createElement('pre')
  pre1.style.position = 'relative'
  // pre1.style.width = '49vw'
  pre1.style.width = '50%'
  pre1.style.display = 'inline-block'
  const pre2 = pre1.cloneNode()

  // fragment = document.createDocumentFragment()
  console.log(diff)


  // 0x4B1818, 814, 169

  // const fragment2 = document.createDocumentFragment()
  const topOffSetUnit = 17

  const theSpan = document.createElement('span')
  theSpan.style.fontFamily = 'Consolas,"Courier New",monospace'
  // theSpan.style.fontFeatureSettings = '"liga" 0, "calt" 0'
  theSpan.style.fontSize = "14px"
  theSpan.style.textSizeAdjust = "100%"
  // theSpan.style.fontWeight = 400
  // theSpan.style.color = "rgb(212, 212, 212)"
  theSpan.style.color = "#d4d4d4"
  theSpan.style.position = "relative"
  theSpan.style.display = "inline-block"
  // theSpan.style.verticalAlign = "bottom"
  theSpan.style.whiteSpace = "no-wrap"
  theSpan.style.height = "17px"
  // theSpan.style.height = `100px`
  // theSpan.style.height = `${topOffSetUnit}px`
  // theSpan.style.lineHeight = "21.2px"
  // theSpan.style.lineHeight = 19/14
  // theSpan.style.lineHeight = `${topOffSetUnit}px`
  theSpan.style.zIndex = 2
  // theSpan.style.position = "absolute"
  // 0x32564B, 1051, 314
  // 0x4B5632, 1044, 265

  const removedHighlight = document.createElement('div')
  removedHighlight.style.position = 'absolute'
  // removedHighlight.style.position = "relative"
  removedHighlight.style.backgroundColor = '#4B1818'
  // const topOffSetUnit = 18.18
  removedHighlight.style.height = `${topOffSetUnit}px `

  // removedHighlight.style.height = '18.18px'
  removedHighlight.style.width = '100%'
  removedHighlight.style.zIndex = 0
  // removedHighlight.style.fontFamily = 'Segoe WPC,Segoe UI,sans-serif'

  // removedHighlight.style.textSizeAdjust = "100%"
  // removedHighlight.style.lineHeight = `21.2px`
  // removedHighlight.style.lineHeight = `18.2px`
  // removedHighlight.style.lineHeight = 18.2/13
  // removedHighlight.style.fontSize = "13px"
  // 8.8 x 19
  // 8.81 x 18.18
  const diagonalFill = removedHighlight.cloneNode()
  diagonalFill.style.backgroundImage = `linear-gradient(
  -45deg,
  rgba(204, 204, 204, 0.2) 12.5%,
  #0000 12.5%, #0000 50%,
  rgba(204, 204, 204, 0.2) 50%, rgba(204, 204, 204, 0.2) 62.5%,
  #0000 62.5%, #0000 100%
)`
  diagonalFill.style.backgroundSize = `8px 8px`
  diagonalFill.style.backgroundColor = '#1e1e1e'
  diagonalFill.style.color = '#d4d4d4'
  diagonalFill.style.zIndex = 3
  diagonalFill.style.position = "relative"

  // background-image: linear-gradient( 
  // -45deg
  // , rgba(204, 204, 204, 0.2) 12.5%, #0000 12.5%, #0000 50%, rgba(204, 204, 204, 0.2) 50%, rgba(204, 204, 204, 0.2) 62.5%, #0000 62.5%, #0000 100% );
  // background-size: 8px 8px;

  let lineNumber = 0
  let alreadyHighlighted = false
  //red
  const fragment1 = document.createDocumentFragment()
  diff.forEach((part) => {
    const text = part.value
    if (part.added) {
      const howManyFound = occurrences(text, '\n')
      if (howManyFound) {
        lineNumber += howManyFound + 1
        const highlight = diagonalFill.cloneNode()
        highlight.style.height = `${howManyFound * topOffSetUnit}px`
        fragment1.appendChild(highlight)
      }

    } else {
      const span = theSpan.cloneNode()
      if (part.removed) {
        span.style.backgroundColor = '#6F1313'
        const highlight = removedHighlight.cloneNode()
        highlight.style.top = `${lineNumber * topOffSetUnit}px`
        const highlight2 = removedHighlight.cloneNode()
        highlight2.style.top = "0px"
        highlight2.style.left = "0px"
        highlight.appendChild(highlight2)
        fragment1.appendChild(highlight)
        let howManyFound = occurrences(text, '\n')
        if (text.slice(-1) === '\n') {
          howManyFound--
        }
        for (let i = 0; i < howManyFound; i++) {
          lineNumber++
          const highlight = removedHighlight.cloneNode()
          highlight.style.top = `${lineNumber * topOffSetUnit}px`
          const highlight2 = removedHighlight.cloneNode()
          highlight2.style.top = "0px"
          highlight2.style.left = "0px"
          highlight.appendChild(highlight2)
          fragment1.appendChild(highlight)
        }

      } else {
        // span.style.backgroundColor = '#373D29'
        const howManyFound = occurrences(text, '\n')
        if (howManyFound) {
          lineNumber += howManyFound
        }
      }

      span.appendChild(document.createTextNode(text))

      fragment1.appendChild(span)
    }
  })
  pre1.appendChild(fragment1)

  // throw 234
  const addedHighlight = removedHighlight.cloneNode()
  addedHighlight.style.backgroundColor = '#373D29'

  lineNumber = 0

  const fragment2 = document.createDocumentFragment()
  //green
  diff.forEach((part) => {
    const text = part.value
    if (part.removed) {
      const howManyFound = occurrences(text, '\n')
      if (howManyFound) {
        lineNumber += howManyFound
        const highlight = diagonalFill.cloneNode()
        d(highlight.style.backgroundImage)
        highlight.style.height = `${howManyFound * 19}px`
        // highlight.style.top = `${lineNumber * 19}px`
        fragment2.appendChild(highlight)
      }
    } else {

      span = theSpan.cloneNode()
      if (part.added) {
        // span.style.backgroundColor = '#4ec9b0'
        span.style.backgroundColor = '#618311'
        // span.style.backgroundColor = '#4B5632'
        // span.style.backgroundColor = '#32564B'
        // span.style.backgroundColor = 'green'

        const highlight = addedHighlight.cloneNode()
        highlight.style.top = `${lineNumber * 19}px`
        fragment2.appendChild(highlight)

        let howManyFound = occurrences(text, '\n')
        if (text.slice(-1) === '\n') {
          howManyFound--
        }
        for (let i = 0; i < howManyFound; i++) {
          lineNumber++
          const highlight = addedHighlight.cloneNode()
          d(lineNumber)
          highlight.style.top = `${lineNumber * 19}px`
          fragment2.appendChild(highlight)
        }

      } else {
        // span.style.backgroundColor = '#373D29'
        const howManyFound = occurrences(text, '\n')
        if (howManyFound) {
          lineNumber += howManyFound
        }
      }

      span.appendChild(document
        .createTextNode(text))



      fragment2.appendChild(span)
    }
  })
  pre2.appendChild(fragment2)

  fragmentAll = document.createDocumentFragment()
  fragmentAll.appendChild(pre1)
  fragmentAll.appendChild(pre2)
  rootElement.appendChild(fragmentAll)

  /* diff.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? 'green' :
      part.removed ? 'red' : 'grey'
    span = document.createElement('span')
    span.style.color = color
    span.appendChild(document
      .createTextNode(part.value))
    fragment1.appendChild(span)
  }) */

  function occurrences(string, subString) {
    const substrLen = subString.length
    string += ""
    subString += ""
    if (substrLen <= 0) return (string.length + 1)

    var n = 0,
      pos = 0,
      step = substrLen

    while (true) {
      pos = string.indexOf(subString, pos)
      if (pos >= 0) {
        ++n
        pos += step
      } else break
    }
    return n
  }

}