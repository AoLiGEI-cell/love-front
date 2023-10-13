<template>
  <div class="main">
    <div class="circle" @click="showlogin = true">
    </div>
    <transition name="showlogin">
      <div class="loginframe" v-if="showlogin">
        <h1>LOVE CODE</h1>
        <div class="user-select">
          <p class="usertype" >{{selected}}</p>
          <select required v-model="selected">
            <option value="? ? ? ? ?" selected>恁是谁</option>
            <option value="lion">小狮子</option>
            <option value="shark">小鲨鱼</option>
          </select>
        </div>
        <input v-model="password" placeholder="来吧，用爱情密码填满我吧~">
        <div class="login-buttons">
          <button @click="login()">登录</button>
          <button @click="showForgetPsd = true,showlogin = false">忘记密码</button>
        </div>
      </div>
    </transition>
    <transition name="showforget">
      <div class="forgetpsdframe" v-if="showForgetPsd">
        <h1>LOVE CODE</h1>
        <input v-model="id" placeholder="爱情ID">
        <input class="confirm" v-model="newpassword" placeholder="新爱情密码">
        <div class="login-buttons">
          <button @click="forgetPasswd()">确定</button>
          <button @click="showForgetPsd = false,showlogin = true">取消</button>
        </div>
      </div>
    </transition>
    <div class="picture1">
      <img :src="imgUrl1" alt="图片丢失了捏" title="test1" @click="picture1Change()"/>
    </div>
    <div class="picture2">
      <img :src="imgUrl2" alt="图片丢失了捏" title="test2" @click="picture2Change()"/>
    </div>
  </div>
  
</template>

<style lang="scss" >
html,
body {
  margin: 0 0;
  padding: 0 0;
  background-color: pink;
}

/* 登录框开始 */
.loginframe,
.forgetpsdframe{
  width: 350px;
  height: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgb(255, 101, 126);
  border: 2px solid black;
  border-radius: 30px;
  box-shadow: 8px 8px gainsboro;
  overflow: hidden;
}

.loginframe h1,
.forgetpsdframe h1{
  position: relative;
  font-family: Comic Sans MS;
}

.loginframe .user-select,
.forgetpsdframe .user-select{
  width: 240px;
  height: 35px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.loginframe .user-select .usertype,
.forgetpsdframe .user-select .usertype{
  width: 140px;
  height: 35px;
  margin-top: 0px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px gainsboro;
  line-height: 35px;
}

.loginframe .user-select select,
.forgetpsdframe .user-select select{
  width: 90px;
  height: 35px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px gainsboro;
}

.loginframe input,
.forgetpsdframe input{
  width: 240px;
  height: 35px;
  position: relative;
  top: 6%;
  padding-left: 5px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px gainsboro;
  font-size: 15px;
}

.forgetpsdframe input{
  top: 0;
}

.forgetpsdframe .confirm{
  top: 6%;
}

.loginframe .login-buttons,
.forgetpsdframe .login-buttons{
  width: 240px;
  height: 35px;
  position: relative;
  top: 11%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.forgetpsdframe .login-buttons{
  top: 11%;
}

.loginframe .login-buttons button,
.forgetpsdframe .login-buttons button{
  width: 95px;
  height: 35px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px gainsboro;
  text-align: center;
  font-size: 15px;
  font-family: Comic Sans MS;
}

.loginframe .login-buttons button:hover,
.forgetpsdframe .login-buttons button:hover{
  background-color: rgb(255, 136, 156);
}

.loginframe .login-buttons button:active,
.forgetpsdframe .login-buttons button:active{
  background-color: rgb(255, 136, 156);
  box-shadow: 2px 2px rgb(131, 131, 131);
  transform: translateX(2px) translateY(2px);
}

.showlogin-enter-active,
.showlogin-leave-active,
.showforget-enter-active,
.showforget-leave-active{
  transition: all .5s ease-out;
}

.showlogin-enter,
.showlogin-leave-to,
.showforget-enter,
.showforget-leave-to{
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: rgb(255, 101, 126);
}

.showlogin-enter-to{
  z-index: 999;
}
/* 登录框结束 */

/* 圆圈开始 */
.circle {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgb(255, 101, 126);
}

.circle:hover{
  animation: elasticity 1s linear;
}

@keyframes elasticity {
    0% {
      transform: matrix3d(0.92, 0, 0, 0, 0, 0.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    3.4% {
      transform: matrix3d(0.938, 0, 0, 0, 0, 0.933, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    4.7% {
      transform: matrix3d(0.945, 0, 0, 0, 0, 0.94, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    6.81% {
      transform: matrix3d(0.95, 0, 0, 0, 0, 0.956, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    9.41% {
      transform: matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    10.21% {
      transform: matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    13.61% {
      transform: matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    14.11% {
      transform: matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    17.52% {
      transform: matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    18.72% {
      transform: matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    21.32% {
      transform: matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    24.32% {
      transform: matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    25.23% {
      transform: matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    29.03% {
      transform: matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    29.93% {
      transform: matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    35.54% {
      transform: matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    36.74% {
      transform: matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    41.04% {
      transform: matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    44.44% {
      transform: matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    52.15% {
      transform: matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    59.86% {
      transform: matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    63.26% {
      transform: matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    75.28% {
      transform: matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    85.49% {
      transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    90.69% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }
/* 圆圈结束 */

/* 大头照开始 */
.picture1 {
  width: 300px;
  height: 350px;
  position: absolute;
  display: flex;
  top: 10%;
  left: 6%;
  background-color: aliceblue;
}

.picture2 {
  width: 300px;
  height: 350px;
  position: absolute;
  display: flex;
  bottom: 10%;
  right: 6%;
  background-color: aliceblue;
}
/* 大头照结束 */
</style>

<script>
import { login, forgetpswd } from "@/api/ourlove";

export default {
  data(){
    return{
      selected:'? ? ? ? ?',
      imgNameone: '1',
      imgNametwo: '2',
      showlogin:false,
      showForgetPsd:false,
      usertype:'',
      password:'',
      id:'',
      newpassword:'',
      
    };
  },
  created(){
    /* 计时器开始 */
    // setInterval(() => {
    //   let randomNum = Math.random() * 2;
    //   let number = Math.floor(randomNum) + 1;
    //   this.name = '' + number;
    // }, 600);
    /* 计时器结束 */
  },
  computed: {

    imgUrl1 (){
      return require('@/assets/' + this.imgNameone + '.png');
    },

    imgUrl2 (){
      return require('@/assets/' + this.imgNametwo + '.png');
    }

  },
  methods:{
    login(){
      let params = {
        usertype: this.selected,
        password: this.password,
      };
      if(this.selected == '? ? ? ? ?'){
        window.alert('还没选是狮子还是鲨鱼呢')
      }else{
        login(params).then((res) => {
          console.log(res);
          localStorage.setItem("usertype",this.selected);
          if(res[0].usertype == 'lion'){
            window.alert('小狮子')
            this.$router.push("/home")
          }else if(res[0].usertype == 'shark'){
            window.alert('小鲨鱼')
            this.$router.push("/home")
          }else{
            window.alert('密码错误')
          };
        })  
      }  
    },

    forgetPasswd(){
      let params = {
        id: this.id,
        newpassword: this.newpassword,
      };
      if(!this.id && !this.newpassword){
        if(!this.id){
          window.alert('爱情id还没输')
        }else if(!this.newpassword){
          window.alert('新爱情密码还没输')
        }
      }else if(this.id && this.newpassword){
        forgetpswd(params).then((res) => {
          console.log(res);
          if(res == 'success'){
            window.alert('修改成功！')
            this.showForgetPsd = false;
            this.showlogin = true;
          }else{
            window.alert('修改失败，刷新再试试？实在不行就找小鲨鱼帮你改(^-^)')
          }
          
        })
      }  
    },

    // toHome() {
    //   this.$router.push("/home")
    // },

    picture1Change(){
      this.imgNameone = 'after1'
    },

    picture2Change(){
      this.imgNametwo = 'after2'
    },

    // usertype(){
    //   if(this.selected == "? ? ? ? ?"){
    //     this.usertype = 'null';
    //   }else {
    //     this.usertype = this.selected;
    //   }
    // }
  }

};
</script>
