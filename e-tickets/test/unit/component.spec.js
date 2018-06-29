// import Vue
import Vue from 'vue/dist/vue'

// import the component for testing
import App from 'App'

describe ('app-component',() => {
    it('$mount()', () => {
        // TODOs
    })
})

const expctiedMsg = 'hello'

const HTMLContainer = Vue.extend({
    data () {
        return {
            text:expctiedMsg
        }
    },
    
})