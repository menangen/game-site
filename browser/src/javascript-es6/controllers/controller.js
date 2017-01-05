"use strict";
import Vue from 'vue';
import handler from 'handlers/handler';

export default function () {

    let data = { messageVue: 1 };

    const vm = new Vue({
        el: '#app',
        data: data
    });

    handler();
}