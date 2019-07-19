<!--模板-->
<template>
  <div id="app" >
    <div class="container ">
      <app-Header></app-Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="histroy"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="contect"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "./components/Header";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "app-Header": Header
  },
  methods: {},
  created() {
    //fecth
    // fetch("/api/test/testToken.php", {
    //   method: "post",
    //   headers:{
    //     token:"f4c902c9ae5a2a9d8f84868ad064e706"
    //   },
    //   body: JSON.stringify({username:"han",password:"123"})
    // }).then(result => {
    //   console.log(result.body)
    //   console.log(result.json())

    // }).then(data=>{
    //   console.log(data)
    // });

    // this.$axios.get('http://api.map.baidu.com/place/v2/suggestion?query=天安门&region=北京&city_limit=true&output=json&ak=BNeViv2TI3o3ElAYiPKEXvNHUzpLUOvs')
    // .then(res=>{
    //   console.log(res)
    // })

    this.$axios({
      method: "get",
      url: "http://api.map.baidu.com/place/v2/suggestion?",
      data: JSON.stringify({
        //这里是发送给后台的数据
        query: "天安门",
        region: "北京",
        city_limit: 'true',
        output:'json',
        ak:'BNeViv2TI3o3ElAYiPKEXvNHUzpLUOvs'
      })
    })
      .then(response => {
        //这里使用了ES6的语法
        console.log(response); //请求成功返回的数据
      })
      .catch(error => {
        console.log(error); //请求失败返回的数据
      });
  }
};
</script>

<style scoped>
h1 {
  color: green;
}

</style>
