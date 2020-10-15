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
    Loading
} from 'vant'
import './mock'

const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(store)
app.use(Form)
app.use(Button)
app.use(Search)
app.use(Field)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Loading)
app.use(Toast)
.mount('#app')