<template>
  <div class="mainframe">
    <div class="nav">
      <div class="nav-content">
        <a @click="toUser()">个人主页</a>
      </div>
      <div class="nav-content">
        <a>看{{another}}</a>
      </div>
      <div class="nav-content">
        <a @click="toPhoto()">照片の墙</a>
      </div>
      <div class="nav-content">
        <a @click="toMessage()">留言信箱</a>
      </div>
      <div class="nav-content">
        <a @click="toFifth()">home</a>
      </div>
      <div class="nav-content">
        <a @click="toSixth()">666</a>
      </div>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" >
html,
body{
  margin: 0 0;
  padding: 0 0;
}

.mainframe{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: pink;
}

.mainframe .page-content{
  width: 920px;
  height: 100%;
  left: 23%;
  top: 0%;
  position: absolute;
  border-left: 4px solid gray;
  border-right: 4px solid gray;
  overflow: auto;
  background-color: white;
}

/* 导航栏开始 */

.mainframe .nav{
  width: 90px;
  position: sticky;
  float: left;
  top: 40%;
  left: 12%;
  margin-bottom: 5px;
  text-align: center;
  padding: 5px 0px 5px 0px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: rgb(255, 101, 126);
  box-shadow: 4px 4px gainsboro;
  z-index: 999;
}

.mainframe .nav .nav-content{
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 2px solid gainsboro;
  transition: all .2s ease-in-out;
  color: white;
  cursor: pointer;
}

.mainframe .nav .nav-content:hover{
  background-color: rgb(255, 152, 169);
}
/* 导航栏结束 */

</style>

<script>
export default {
  data(){
    return{
      another:'',
    }
  },

  created(){
    
  },

  methods:{
    toUser(){
      this.$router.push("/UserView")
    },
    toPhoto(){
      this.$router.push("/PhotoView")
    },
    toMessage(){
      this.$router.push("/MessageView")
    },
    toFifth(){
      this.$router.push("/home")
    },
    toSixth(){
      this.$router.push("/6View")
    },
  },
};
</script>