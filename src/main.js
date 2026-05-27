import { createApp } from 'vue'
import App from './App.vue'
import Champions from './components/HelloWorld.vue'
import Items from './components/Items.vue'
import Augments from './components/Augments.vue'
import bootstrap from 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'

//createApp(App).mount('#app')

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/:msg', component: Champions, props: { msg:'Search Champions' } },
    { path: '/items/:msg', component: Items, props: { msg:'Search Items' } },
    { path: '/augments/:msg', component: Augments, props: { msg:'Search Items' } },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
