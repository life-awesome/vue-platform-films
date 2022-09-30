import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {registerFontAwesome} from "@/plugins/font-awesome";

const vueApp = createApp(App)

components.forEach(component => {
	vueApp.component(component.name, component)
})

vueApp.component('font-awesome-icon', FontAwesomeIcon)
registerFontAwesome()


vueApp
	.use(router)
	.mount('#app')
