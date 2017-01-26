import Vue from 'vue'

import helloComponent from 'components/hello.vue'

describe('Vue components', function() {

    it('has a dummy Vue.js test', () => {

        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => createElement(helloComponent)
        });

        expect(vm.$el.textContent).toBe('Welcome to Your Vue.js App')
    });
});