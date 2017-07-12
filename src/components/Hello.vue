<template>
  <div class="hello">
    <p>{{msg}}</p>
    <input v-model = msg @keyup="clicked"></input>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
<span>Selected: {{ selected }}</span>

  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '',
    }
  },
  methods:{
    clicked: function (event) {
      console.log('hello '+this.msg+'  '+this.selected+' ')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  list-style-type: none;
}

a {
  color: #42b983;
}
</style>
