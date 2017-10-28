// core
require('./style.scss')

let body = require('./index.pug')
document.write(body)

// TODO: snap scrolling
//       jquery solution
//         - adds 100kb. too large
//         - not snappy enough
// let $ = require('jquery')
// import 'jquery-scrollify'
// $(() => $.scrollify({section: 'article'}))
