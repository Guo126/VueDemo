<template>
  <div class="footer">
    <footer>
        <h1>{{footerMsg}}</h1>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props:{
    footerMsg:{
      type:String
    }
  },
  data () {
    return {
      msg: 'DIAN MO '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background: #222;
  padding:6px;
}
h1, h2 {
  color:lightgreen;
  text-align: center;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
