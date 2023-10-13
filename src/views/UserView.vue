<template>
    <div class="main-user">
        <div class="backgd">
            <img class="backgdimg" src="../assets/backgdpic-test.png" alt="背景丢了">
        </div>
        <div class="infor">
            <div class="profilepic">
                <img src="../assets/lion.png" alt="头像丢了">
            </div>
            <div class="infor-name">{{infor.username}}</div>
            <div class="infor-detail">
                <div class="detail-content"><span>生日：</span><span>{{infor.birthday}}</span></div>
                <div class="detail-content"><span>最喜欢的人：</span><span>{{infor.favperson}}</span></div>
                <div class="detail-content"><span>最喜欢的吃的：</span><span>{{infor.favfood}}</span></div>
                <div class="detail-content"><span>最喜欢做的事：</span><span>{{infor.favthing}}</span></div>
                <div class="detail-content"><span>爱不爱小鲨鱼：</span><span>{{infor.lovewords}}</span></div>
                <div class="detail-content"><span>要不要给小鲨鱼洗澡face time：</span><span>{{infor.facetime}}</span></div>
                <button class="revisebutton" @click="showrevise = !showrevise">我想修改信息</button>
            </div>
        </div>
        <div class="revise-window-backgd" v-if="showrevise" @click="beforeDestroy(),empty()"></div>
        <transition name="showRvsWnd">
            <div class="revise-window" v-if="showrevise">
                <h1>要修改信息</h1>
                <div class="revise-window-content">
                    <div class="detail-content"><span>昵称：</span><input :placeholder="infor.username" v-model="newinfor.username"></div>
                    <div class="detail-content"><span>生日：</span><input :placeholder="infor.birthday" v-model="newinfor.birthday"></div>
                    <div class="detail-content"><span>最喜欢的人类：</span><input :placeholder="infor.favperson" v-model="newinfor.favperson"></div>
                    <div class="detail-content"><span>最喜欢的吃的：</span><input :placeholder="infor.favfood" v-model="newinfor.favfood"></div>
                    <div class="detail-content"><span>最喜欢做的事：</span><input :placeholder="infor.favthing" v-model="newinfor.favthing"></div>
                    <div class="detail-content"><span>爱不爱小鲨鱼：</span><input :placeholder="infor.lovewords" v-model="newinfor.lovewords"></div>
                    <div class="detail-content"><span>要不要给小鲨鱼洗澡face time：</span><input :placeholder="infor.facetime" v-model="newinfor.facetime"></div>
                    <div class="detail-content-uploadprofpic">
                        <span>头像：</span>
                        <div class="uploadprofpic" @click="toGetImg" v-if="!changeprofpicURL">＋</div>
                        <img  class="profpic-preview" :src=changeprofpicURL alt="" v-if="changeprofpicURL">
                        <button class="uploadcancle" v-if="changeprofpicURL" @click="beforeDestroy">×</button>
                    </div>
                    <div class="revise-window-buttons">
                        <button class="revise-window-button" @click="updateinfor()">就这样！</button>
                        <button class="revise-window-button" @click="beforeDestroy(),empty()">还是算了</button>                    
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
.main-user{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: white;
}

// .main-user::-webkit-scrollbar{
//     width: 6px;
//     background-color: gainsboro;
// }

// .main-user::-webkit-scrollbar-thumb{
//     background-color: rgb(252, 90, 117);
// }

/* 个人背景 */
.main-user .backgd{
    width: 98%;
    height: 260px;
    padding: 0 0 0 0;
    border: 2px solid black;
    border-radius: 15px;
    top: 1%;
    position: relative;
    margin: auto;
    overflow: hidden;
}

// .changbk-enter-active{
//     animation: show-bkchange-window .5s ease-out;
// }

// .changbk-leave-active{
//     animation: show-bkchange-window .5s ease-out reverse;
// }

// @keyframes show-bkchange-window{
//     0%{
//         height: 260px;
//     }
//     100%{
//         height: 650px;
//     }
// }

.main-user .backgd .backgdimg{
    width: 100%;
    height: 400px;
    margin: 0 0 0 0;
    cursor: pointer;
}

/* 个人头像 */
.main-user .infor .profilepic{
    width: 120px;
    height: 120px;
    border: 2px solid black;
    border-radius: 60px;
    position: absolute;
    left: 6%;
    top:-10%;
    background-color: white;
    z-index: 1;
}

.main-user .infor .profilepic img{
    width: 120px;
    height: 120px;
    border-radius: 60px;
    margin: auto;
    padding-top: -1px;
    padding-right: -1px;
}

/* 个人信息 */
.main-user .infor{
    width: 98%;
    height: 450px;
    border: 2px solid black;
    border-radius: 15px;
    position: relative;
    top: 2%;
    margin: auto;
}

.main-user .infor .infor-name{
    height: 40px;
    width: 200px;
    position: relative;
    top: 5%;
    left: 200px;
    border-radius: 15px;
    background-color: rgb(194, 231, 140);
}

.main-user .infor .infor-detail{
    height: 300px;
    width: 92%;
    position: relative;
    top: 70px;
    left: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 6px 6px gainsboro;
    background-color: pink;
}

.main-user .infor .infor-detail .detail-content,
.main-user .revise-window .revise-window-content .detail-content,
.main-user .revise-window .revise-window-content .detail-content-uploadprofpic{
    max-width: 600px;
    height: 40px;
    position: relative;
    left: 1%;
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.main-user .revise-window .revise-window-content .detail-content input{
    height: 25px;
    line-height: 25px;
    padding-left: 5px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 4px 4px gainsboro;
    font-size: 15px;
}

.main-user .infor .infor-detail .detail-content span,
.main-user .revise-window .revise-window-content .detail-content span,
.main-user .revise-window .revise-window-content .detail-content-uploadprofpic span{
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: rgb(194, 231, 140);
    padding-right: 5px;
    padding-left: 5px;
}

.main-user .infor .infor-detail .revisebutton{
    height: 40px;
    width: 110px;
    position: absolute;
    right: 5%;
    top: 245px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 4px 4px gainsboro;
    background-color: rgb(252, 90, 117);
    color: white;
    font-size: 14px;
}

.main-user .infor .infor-detail .revisebutton:hover,
.main-user .revise-window .revise-window-content .revise-window-buttons .revise-window-button:hover{
    background-color: rgb(255, 136, 156);
}

.main-user .infor .infor-detail .revisebutton:active,
.main-user .revise-window .revise-window-content .revise-window-buttons .revise-window-button:active{
    background-color: rgb(255, 136, 156);
    box-shadow: 2px 2px rgb(131, 131, 131);
    transform: translateX(2px) translateY(2px);
}

/* 修改窗口弹出开始 */
.main-user .revise-window-backgd{
    width: 100%;
    height: 100%;
    position: absolute;
    float: left;
    top: 0px;
    background-color: gainsboro;
    opacity: 0.5;
    z-index: 1000;
}

.main-user .revise-window{
    width: 500px;
    height: 420px;
    position: absolute;
    float: left;
    left: 200px;
    top: 150px;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 6px 6px gainsboro;
    background-color: pink;
    overflow: hidden;
    z-index: 1001;
}

.showRvsWnd-enter-active{
    animation: show-revise-window .2s ease-out;
}

.showRvsWnd-leave-active{
    animation: show-revise-window .2s ease-out reverse;
}

@keyframes show-revise-window{
    0%{
        width: 0px;
        height: 0px;
        top: 640px;
        left: 750px;
    }
    100%{
        width: 500px;
        height: 420px;
    }
}

.main-user .revise-window .revise-window-content{
    width: 100%;
    height: 300px;
    padding-bottom: 5px;
    overflow-y: auto;
    overflow-x: hidden;
}

.main-user .revise-window .revise-window-content::-webkit-scrollbar{
    width: 6px;
    background-color: gainsboro;
}

.main-user .revise-window .revise-window-content::-webkit-scrollbar-thumb{
    background-color: rgb(252, 90, 117);
}

.main-user .revise-window .revise-window-content .revise-window-buttons{
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
}

.main-user .revise-window .revise-window-content .revise-window-buttons .revise-window-button{
    height: 40px;
    width: 110px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 4px 4px gainsboro;
    background-color: rgb(252, 90, 117);
    color: white;
    font-size: 14px;
}

.main-user .revise-window .revise-window-content .detail-content-uploadprofpic{
    height: 100px;
    display: flex;
    align-items: flex-start
}

.main-user .revise-window .revise-window-content .detail-content-uploadprofpic .uploadprofpic,
.main-user .revise-window .revise-window-content .detail-content-uploadprofpic .profpic-preview{
    width: 80px;
    height: 80px;
    position: relative;
    left: 5px;
    border-radius: 10px;
    border: 2px solid gray;
    background-color: gainsboro;
    opacity: .4;
    line-height: 79px;
    font-size: 50px;
    cursor: pointer;
}

.main-user .revise-window .revise-window-content .detail-content-uploadprofpic .profpic-preview{
    opacity: 1;
}

.main-user .revise-window .revise-window-content .detail-content-uploadprofpic .uploadcancle {
    width: 15px;
    height: 15px;
    position: relative;
    top: -1%;
    left: -1%;
    padding: 0 0 0 0;
    line-height: 13px;
    border-radius: 7.5px;
    border: none;
    background-color: rgb(202, 14, 14);
    color: white;
    font-size: 15px;
    cursor: pointer;
}
</style>

<script>
import { getuserinfor, updateuserinfor } from "@/api/ourlove";

let inputElement = null;
export default {
    data(){
        return{
            infor:{
                username:'',
                birthday:'',
                favperson:'',
                favfood:'',
                favthing:'',
                lovewords:'',
                facetime:'',
            },
            newinfor:{
                usertype:this.usertype,
                username:'',
                birthday:'',
                favperson:'',
                favfood:'',
                favthing:'',
                lovewords:'',
                facetime:'',
                _id:this._id,
            },
            usertype:'',
            _id:'',
            profpicURL:'../assets/lion.png',
            showrevise:false,
            isupload:false,
            changeprofpicURL:'',
        };
    },

    created() {
        this.usertype = localStorage.getItem("usertype");
        this.getinfor();
    },

    methods:{
        /* 添加头像方法开始 */
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
            // const isLt2M = files.size / 1024 / 1024 < 2;
            // const size = files.size / 1024 / 1024;
            // console.log(size);
            // // 判断上传文件的大小
            // if (!isLt2M) {
            // this.$message.error("上传头像图片大小不能超过 2MB!");
            // } else 
            if (files.type.indexOf("image") === -1) {
            //如果不是图片格式
            // this.$dialog.toast({ mes: '请选择图片文件' });
            this.$message.error("请选择图片文件");
            } else {
                const that = this;
                const reader = new FileReader(); // 创建读取文件对象
                reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
                reader.onload = function () {
                    // 文件读取完成后
                    // 读取完成后，将结果赋值给img的src
                    that.changeprofpicURL = this.result;
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
            this.changeprofpicURL = '';
        }
        },
        /* 添加头像方法结束 */
        getinfor(){
            let params = this.usertype;
            getuserinfor(params).then((res) => {
                console.log(res);
                this.infor.username = res.username;
                this.infor.birthday = res.birthday;
                this.infor.favperson = res.favperson;
                this.infor.favfood = res.favfood;
                this.infor.favthing = res.favthing;
                this.infor.lovewords = res.lovewords;
                this.infor.facetime = res.facetime;
                this._id = res._id;
                console.log(this._id);
            })
        },

        updateinfor(){
            let params = this.newinfor;
            console.log(this.newinfor);
            // if(!this.newinfor.username){params.username = this.infor.username; };
            // if(!this.newinfor.birthday){params.birthday = this.infor.birthday; };
            // if(!this.newinfor.favperson){params.favperson = this.infor.favperson; };
            // if(!this.newinfor.favfood){params.favfood = this.infor.favfood; };
            // if(!this.newinfor.favthing){params.favthing = this.infor.favthing; };
            // if(!this.newinfor.lovewords){params.lovewords = this.infor.lovewords; };
            // if(!this.newinfor.facetime){params.facetime = this.infor.facetime; };
            updateuserinfor(params).then((res) => {
                console.log(res);
                if(res == 'success'){
                    window.alert('修改成功！可喜可贺可喜可贺');
                    this.empty();
                    this.showrevise = false;
                }else{
                    window.alert('修改失败，再试一次吧~');
                }
            })
        },

        empty(){
            const that = this;
            that.newinfor.username ='';
            that.newinfor.birthday='';
            that.newinfor.favfood='';
            that.newinfor.favperson='';
            that.newinfor.favthing='';
            that.newinfor.lovewords='';
            that.newinfor.facetime='';
            that.showrevise = false;
        },
    }
}
</script>