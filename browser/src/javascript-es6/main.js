"use strict";

import controller from 'controllers/controller';

document.addEventListener('DOMContentLoaded', () => {
    const $applicationMeta = document.querySelectorAll("meta[name=application-name]")[0];

    if (typeof $applicationMeta !== 'undefined') {

        const moduleName = $applicationMeta.content;
        console.info(`Loaded ${ moduleName } module`);

        switch (moduleName) {

            case "index":
                controller();
                break;
        }

    }
    else {
        console.warn("Bad application module");
    }
});