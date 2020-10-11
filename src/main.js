import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import {
    Form,
    Button,
    Search,
    Field,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem
} from 'vant'

createApp(App)
.use(router)
.use(Form)
.use(Button)
.use(Search)
.use(Field)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.mount('#app')