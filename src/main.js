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
  Loading,
  Grid,
  GridItem,
  CellGroup,
  Cell,
  Tag,
  Icon,
  Image
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
app.use(Grid)
app.use(GridItem),
app.use(Cell),
app.use(CellGroup)
app.use(Tag)
app.use(Icon)
app.use(Image)
  .mount('#app')