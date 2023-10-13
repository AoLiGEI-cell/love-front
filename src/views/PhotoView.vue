<template>
  <div class="main-photo">
    <div class="addPhoto" @click="showAddPhoto = true">＋</div>
    <div class="addphoto-window-backgd" v-if="showAddPhoto" @click="beforeDestroy(),showAddPhoto = false"></div>
    <transition name="showAddPhotoWnd">
      <div class="addphoto-window" v-if="showAddPhoto">
        <div class="photos">
          <div class="photo-detail" v-if="addURL">
            <img :src="addURL" alt="test" />
            <textarea placeholder="写下关于这个甜蜜瞬间的描述吧~"></textarea>
          </div>
          <div class="chosePhoto" @click="toGetImg" v-if="!addURL">＋</div>
        </div>
        <div class="adphoto-window-buttons">
          <button>上传</button>
          <button @click="beforeDestroy(),showAddPhoto = false">取消</button>
        </div>
      </div>
    </transition>
    <div class="album" v-for="(photo,index) in album" :key="index">
      <img :src="photo.photoURL" alt />
      <p class="remark">{{photo.remark}}</p>
    </div>
  </div>
</template>

<style lang="scss">
.main-photo {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
}

// .main-photo .addphoto-window .photos .test{
//     width: 600px;
//     height: 300px;
//     background-color: gainsboro;
//     margin: auto;
//     position: relative;
//     top: 10px;
// }

.main-photo::-webkit-scrollbar,
.main-photo .addphoto-window .photos::-webkit-scrollbar,
.main-photo .addphoto-window .photos .photo-detail textarea::-webkit-scrollbar {
  width: 6px;
  background-color: gainsboro;
}

.main-photo::-webkit-scrollbar-thumb,
.main-photo .addphoto-window .photos::-webkit-scrollbar-thumb,
.main-photo
  .addphoto-window
  .photos
  .photo-detail
  textarea::-webkit-scrollbar-thumb {
  background-color: rgb(252, 90, 117);
}

.main-photo .album {
  border: 1px solid black;
  width: 600px;
  height: 300px;
  margin: auto;
  margin-top: 10px;
}

.main-photo .album img {
  width: 580px;
  height: 250px;
  border: 1px solid black;
  position: relative;
  cursor: pointer;
}

.main-photo .album p {
  width: 580px;
  height: 30px;
  line-height: 30px;
  border: 1px solid black;
  margin: auto;
}

.main-photo .addPhoto {
  width: 70px;
  height: 70px;
  position: sticky;
  float: right;
  top: 100px;
  right: 20px;
  border-radius: 15px;
  border: 2px solid black;
  background-color: rgb(252, 90, 117);
  box-shadow: 4px 4px gainsboro;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: white;
  font-size: 60px;
  line-height: 70px;
}
.main-photo .addPhoto:hover {
  background-color: rgb(255, 136, 156);
}

.main-photo .addphoto-window-backgd {
  width: 100%;
  height: 100%;
  position: absolute;
  float: left;
  top: 0px;
  background-color: gainsboro;
  opacity: 0.5;
  z-index: 1000;
}

.main-photo .addphoto-window {
  width: 800px;
  height: 420px;
  position: absolute;
  float: left;
  left: 50px;
  top: 150px;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 6px 6px gainsboro;
  background-color: pink;
  overflow: hidden;
  z-index: 1001;
}

.showAddPhotoWnd-enter-active {
  animation: show-addphoto-window 0.2s ease-out;
}

.showAddPhotoWnd-leave-active {
  animation: show-addphoto-window 0.2s ease-out reverse;
}

@keyframes show-addphoto-window {
  0% {
    width: 0px;
    height: 0px;
    top: 120px;
    left: 850px;
  }
  100% {
    width: 800px;
    height: 420px;
  }
}

.main-photo .addphoto-window .photos {
  width: 95%;
  height: 70%;
  position: relative;
  top: 5%;
  margin: auto;
  overflow-y: auto;
}
.main-photo .addphoto-window .photos .photo-detail {
  width: 100%;
  height: 100%;
}

.main-photo .addphoto-window .photos .photo-detail img {
  max-width: 100%;
  max-height: 100%;
}

.main-photo .addphoto-window .photos .photo-detail textarea {
  min-height: 80px;
  max-height: 100px;
  min-width: 69%;
  max-width: 69%;
  margin: auto;
  position: relative;
  top: 10px;
  border: 2px solid black;
  border-radius: 10px;
  padding-top: 5px;
  padding-left: 5px;
  font-size: 15px;
  font-family: YouYuan;
}

.main-photo .addphoto-window .photos .chosePhoto {
  width: 80px;
  height: 80px;
  position: relative;
  left: 20px;
  top: 20px;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: gainsboro;
  font-size: 50px;
  line-height: 78px;
  opacity: 0.6;
  cursor: pointer;
}

.main-photo .addphoto-window .adphoto-window-buttons {
  width: 70%;
  height: 20%;
  position: relative;
  top: 5%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main-photo .addphoto-window .adphoto-window-buttons button {
  height: 40px;
  width: 110px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px gainsboro;
  background-color: rgb(252, 90, 117);
  color: white;
  font-size: 14px;
}

.main-photo .addphoto-window .adphoto-window-buttons button:hover {
  background-color: rgb(255, 136, 156);
}

.main-photo .addphoto-window .adphoto-window-buttons button:active {
  background-color: rgb(255, 136, 156);
  box-shadow: 2px 2px rgb(131, 131, 131);
  transform: translateX(2px) translateY(2px);
}
</style>

<script>
let inputElement = null;
export default {
  data() {
    return {
      showAddPhoto: false,
      addURL: "",
      photo: {
        photoURL: "",
        remark: "",
      },
      album: [
        {
          photoURL: "../assets/1.png",
          remark: "1",
        },
        {
          photoURL: "../assets/1.png",
          remark: "2",
        },
        {
          photoURL: "../assets/1.png",
          remark: "3",
        },
        {
          photoURL: "../assets/1.png",
          remark: "4",
        },
        {
          photoURL: "../assets/1.png",
          remark: "5",
        },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {
    /* 添加照片墙方法开始 */
    toGetImg() {
      if (inputElement === null) {
        // 生成文件上传的控件
        inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.style.display = "none";

        if (window.addEventListener) {
          inputElement.addEventListener("change", this.uploadFile, false);
        } else {
          inputElement.attachEvent("onchange", this.uploadFile);
        }
        document.body.appendChild(inputElement);
      }
      inputElement.click();
    },
    uploadFile(el) {
      if (el && el.target && el.target.files && el.target.files.length > 0) {
        console.log(el);
        const files = el.target.files[0];
        const isLt2M = files.size / 1024 / 1024 < 2;
        const size = files.size / 1024 / 1024;
        console.log(size);
        // 判断上传文件的大小
        if (!isLt2M) {
          window.alert("上传图片大小不能超过 2MB!");
        } else if (files.type.indexOf("image") === -1) {
          //如果不是图片格式
          // this.$dialog.toast({ mes: '请选择图片文件' });
          window.alert("请选择图片文件");
        } else {
          const that = this;
          const reader = new FileReader(); // 创建读取文件对象
          reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
          reader.onload = function () {
            // 文件读取完成后
            // 读取完成后，将结果赋值给img的src
            that.addURL = this.result;
            console.log(this.result);
            // 数据传到后台
            //const formData = new FormData()
            //formData.append('file', files); // 可以传到后台的数据
          };
        }
      }
    },
    beforeDestroy() {
      if (inputElement) {
        if (window.addEventListener) {
          inputElement.removeEventListener(
            "change",
            this.onGetLocalFile,
            false
          );
        } else {
          inputElement.detachEvent("onchange", this.onGetLocalFile);
        }
        document.body.removeChild(inputElement);
        inputElement = null;
        console.log("========inputelement destroy");
        this.addURL = '';
      }
    },
    /* 添加照片墙方法结束 */
  },
};
</script>