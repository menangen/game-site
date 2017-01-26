"use strict";
import Vue from 'vue';
import helloComponent from 'components/hello.vue';

export default function () {

    const app = new Vue({
        el: '#app',
        render: (createElement) => createElement(helloComponent)
    });
}