import Vue from 'vue'
import UserPop from './UserPop.vue'
import UserPopImage from './UserPopImage.vue'

const previewComponent =  {
    install: function (Vue, options) {
        Vue.component('user-pop', UserPop)
        Vue.component('user-pop-image', UserPopImage)
    }
}

export default previewComponent;
