// core
require('./style.scss');

let body = require('./index.pug')
document.write(body)

// TODO: implement snap scroll
//       jquery solution - adds 100kb. too large
//
// let $ = require('jquery')
// import 'jquery-scrollify'
// $(() => $.scrollify({section: 'article'}))
