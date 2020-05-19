window.addEventListener('DOMContentLoaded' , function () {

    'use strict';
    let calculator = require('./parts/calculator'),
        form = require('./parts/form'),
        formContact = require('./parts/formContact'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');

    calculator();
    form();
    formContact();
    modal();
    slider();
    tabs();
    timer();    


});