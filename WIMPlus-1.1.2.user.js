// ==UserScript==
// @name            WIMPlus
// @homepageURL     http://hcweb.dk/
// @author          Kirnehx
// @supportURL      http://twitter.com/Kirnehx
// @version         0.1.2
// @description     Resizes video player and tweaks some small things on http://wimp.com/
// @match           http://wimp.com/*
// @include         http://*.wimp.com/*
// ==/UserScript==


var d = document;

var css = '.container { width: 1500px !important; } .video-container { width: 1060px !important; }#wrapper { width: 1060px !important; }.video-list { width: 1148px !important; }.video-wrap1 { width: 1060px !important; }#player { height: 700px !important; }#menu-bar { width: 1498px !important; }.submenu-category1, .submenu-category2, .submenu-category3, .submenu-category4, .submenu-category5 { left: 0px !important; }.submenu-app { left: -500px !important; }';
var head = d.head;
var style = d.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(d.createTextNode(css));
}

head.appendChild(style);

d.getElementById('mediaplayer').height = 705;
d.getElementById('mediaplayer').width = 1060;

if(d.getElementById('url') !== null)
{
    var InfoUrl = d.getElementById('url').value;
    var reper = d.getElementById('url');
    var parinte = reper.parentNode;
    var link = d.createElement('a');
    link.href = InfoUrl;
    link.target = '_blank';
    link.textContent = InfoUrl;
    if(reper) { parinte.insertBefore(link, reper);}
    reper.style.display = 'none';
}
