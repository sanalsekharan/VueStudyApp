<template>
  <div id="app">
    <users ></users>
   <!-- <commends></commends>
    <hover msgs ="Hello"></hover>
    <commends></commends>
    <my-component></my-component> -->
  </div>

</template>
<script>
import Vue from 'vue'
/*import Hello from './components/Hello'
import Commends from './components/Commends'
import Hover from './components/Hover'*/

import users from './components/users'
export default {
  name: 'app',
  components: {
    /*Hello,
    Commends,
    Hover*/
    users
  }
}

Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
