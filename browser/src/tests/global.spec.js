import Vue from 'vue'
import vueTemplate from 'components/hello.vue'

describe('Users factory', function() {

    it('has a dummy Vue.js test', function() {


        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => createElement(vueTemplate)
        });

        expect(vm.$el.querySelector('h1').textContent).toBe('Welcome to Your Vue.js App')

    });
});