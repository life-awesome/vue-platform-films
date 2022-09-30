import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'

const vueApp = createApp(App)

components.forEach(component => {
	vueApp.component(component.name, component)
})

vueApp
	.use(router)
	.mount('#app')
