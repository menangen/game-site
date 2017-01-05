"use strict";
import Vue from 'vue';
import { handler } from "handlers/index";

export default function () {

    let data = { a: 1 };

    const vm = new Vue({
        data: data
    });

    handler(1, 2);
    console.log("App working now")
}