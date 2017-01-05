"use strict";

import controller from './controllers/index';

const $applicationMeta = document.querySelectorAll("meta[name=application-name]")[0];

 if (typeof $applicationMeta !== 'undefined') {

     const moduleName = $applicationMeta.content;
     console.log(`Loaded ${ moduleName } module`);

     switch (moduleName) {

        case "index":
            console.log("index controller");
            controller();
            break;
     }

 }
 else {
     console.log("Bad application module");
 }