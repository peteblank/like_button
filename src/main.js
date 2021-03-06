import App from './App.vue'
import { gripVueJsApp } from '@stakeordie/griptape-vue.js'

import '@/assets/styles/index.scss'

const conf = {
  restUrl: 'https://api.holodeck.stakeordie.com'
}


// Grip your app
gripVueJsApp(conf, App, (app, pinia) => {})
