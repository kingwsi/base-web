import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { router } from './router'
import { store } from './store'
import {
    Form,
    Button,
    Search,
    Field,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Toast,
} from 'vant'
import './mock'

const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(Form)
app.use(Button)
app.use(Search)
app.use(Field)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Toast)
app.use(store)
.mount('#app')