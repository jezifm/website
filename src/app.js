// core
require('./style.scss');

import $ from 'jquery';



let section = $('<section></section>').appendTo('body')

let article = $(`
<article>
    <div>
        <h2>Jezrael Arciaga</h2>
        <div>Data Scientist | Data Engineer | Software Engineer</p>
        <div id="resume"><a class="border-white" href="Jezrael-Arciaga-CV.pdf">View Resume</a></p>
    </div>
</article>
`).appendTo(section);
