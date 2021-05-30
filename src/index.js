document.body.style.margin = 0
const one = `{type:'functionName', text:'StrReplace', i1:62, c1:10, c2:20},
{type:'( function CALL', text:'(', i1:62, c1:20},`
  , other = `{text:'StrReplace('},`
/*   const one = `{type:'functionName', text:'StrReplace', i1:62, c1:10, c2:20},
{type:'( function CALL', text:'(', i1:62, c1:20},
{type:'start unit'},`
  , other = `{text:'StrReplace('},
{type:'start unit'},` */
/*   const one = `[
    {type:'assignment', text:'v', i1:0, c1:undefined, c2:1},
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'{ object', text:'{', i1:0, c1:3},
    ooffewfwefwef1
    {type:'} object', text:'}', i1:0, c1:4},
    ooffewfwefwef2
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'end assignment'},
    ooffewfwefwef3
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    first
    second
    third
  ]`,
    other = `[
    {type:'assignment', text:'v', i1:0, c1:undefined, c2:1},
    {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    {type:'{ object', text:'Map(', i1:0, c1:3},
    ooffewfwefwef1
    {type:'} object', text:')', i1:0, c1:4},
    ooffewfwefwef2
    {type:'2operator', text:'multi
    line
    3rd
    ', i1:0, c1:1, c2:3},
    {type:'end assignment'},
    ooffewfwefwef3
    first
    second
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
  ]` */
  /* const one = `[
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
    first
    second
    third
  ]`,
    other = `[
  {type:'2operator', text:':=', i1:0, c1:1, c2:3},
  ]` */

vscodeDiff(document.getElementById('vscodeDiff'), one, other)
