import Vue from 'vue'

describe('Users factory', function() {

    it('has a dummy Vue.js test', function() {


        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => createElement(
                "span",
                "Test"
            )
        });

        expect(vm.$el.textContent).toBe("Test")

    });
});