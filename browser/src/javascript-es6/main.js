"use strict";

import controller from 'controllers/controller';

document.addEventListener('DOMContentLoaded', () => {
    const $applicationMeta = document.querySelector("meta[name=application-name]");

    if (typeof $applicationMeta !== 'undefined' && "content" in $applicationMeta) {

        const moduleName = $applicationMeta.content || "NONAME";
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