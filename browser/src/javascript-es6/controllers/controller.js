"use strict";
import Vue from 'vue';
import vueTemplate from 'components/hello.vue';

import handler from 'handlers/handler';

export default function () {

    let data = { messageVue: 1 };

    const app = new Vue({
        el: '#app',
        render: (createElement) => createElement(vueTemplate),
        data: data
    });

    handler();

    window.app = app;
}