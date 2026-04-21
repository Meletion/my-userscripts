// ==UserScript==
// @name         YT country code remover
// @namespace    https://meletion.github.io/bio
// @version      1
// @description  Remove the country code icon from youtube`s logo
// @author       Meletion
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('country-code').remove()
})();
