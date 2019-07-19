<template>
  <div class="row">
    <div id="home" class="col-sm-12 ">
      <div class="background">
        
        <h2>这里有最好吃的Pizza！</h2>
        <button @click="goMenu" class="btn btn-success">Let's Order</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  return: {
    data() {}
  },
  methods: {
    goMenu() {
      //跳转到上一次浏览的页面
      // this.$router.go(-1)
      //指定页面
      //this.$router.replace('/menu')
      this.$router.push("/menu");
    }
  }
};
</script>
<style>
#home{
  background: url('../../src/assets/pizza.jpg');
  height:60vh;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10%
}
.background{
  text-align: center;
  /* opacity: 0.9;透明度 */
  margin:0 auto;
  padding: 20px 0;
}
h1,h2{
  margin: 6%;
  color:white
}
</style>

