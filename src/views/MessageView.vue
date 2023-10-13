<template>
    <div class="main-message">
        <button class="writepartcontr" v-if="!showWrite" @click="showWrite = !showWrite"></button>
        <div class="cover" v-if="showWrite" @click="showWrite = !showWrite"></div>
        <transition name="showWrite">
            <div class="writepart" v-if="showWrite">
                <div class="message-box">
                    <textarea placeholder="想给他说点儿啥呢~(>_<)"></textarea>
                    <div class="buttons">
                        <button>留言</button>
                        <button @click="showWrite = !showWrite">取消</button>
                    </div>
                </div>
            </div>
        </transition>
        <div class="messagepart">
            <div class="messageblock" v-for="(message,index) in messages" :key="index">
                <div class="timeandfrom">
                    <span>{{message.time}}</span>
                    <span>From {{message.from}} to {{message.to}}</span>
                </div>
                <div class="content"><span>{{message.content}}</span></div>
                <div class="operations">
                    <div class="like"><i class="iconfont icon-xihuan"></i></div>
                    <div class="reply"><i class="iconfont icon-xinxi3"></i></div>
                    <div class="delete" v-if="message.from == 'lion'"><i class="iconfont icon-shanchutianchong"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.main-message{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.main-message .messagepart::-webkit-scrollbar,
.main-message .writepart .message-box textarea::-webkit-scrollbar {
  width: 6px;
  background-color: gainsboro;
}

.main-message .messagepart::-webkit-scrollbar-thumb,
.main-message .writepart .message-box textarea::-webkit-scrollbar-thumb {
  background-color: rgb(252, 90, 117);
}

.main-message .cover{
    width: 920px;
    height: 100%;
    position: absolute;
    left: 0px;
    margin-right: 0px;
    background-color: gainsboro;
    opacity: 0.5;
    z-index: 1000;
    cursor: pointer;
}

.main-message .writepart{
    width: 780px;
    height: 99%;
    left: 0px;
    top: 0.5%;
    position: absolute;
    margin-right: 0px;
    border-left: none;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgb(198, 183, 223);
    z-index: 1001;
}

.showWrite-enter-active{
    animation: show-writepart 0.5s ease-out;
}

.showWrite-leave-active{
    animation: show-writepart 0.5s ease-out reverse;
}

@keyframes show-writepart{
    0%{
        left: -720px;
    }
    100%{
        left: 0px;
    }
}

.main-message .writepart .message-box{
    width: 600px;
    height: 350px;
    position: relative;
    top: 150px;
    margin: auto;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 6px 6px gainsboro;
    background-color: white;
}

.main-message .writepart .message-box textarea{
    min-height: 150px;
    max-height: 150px;
    min-width: 540px;
    max-width: 540px;
    margin: auto;
    position: relative;
    top: 50px;
    border: 2px solid black;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 5px;
    font-size: 18px;
    font-family: SimHei;
    box-shadow: 4px 4px 4px rgb(169, 169, 169);
}

.main-message .writepartcontr{
    width: 60px;
    height: 99%;
    position: absolute;
    left: 0px;
    top: 0.5%;
    border-left: none;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgb(233, 216, 237);
    cursor: pointer;
    transition: all .2s ease-in-out;
}

.main-message .writepartcontr:hover{
    background-color: rgb(198, 183, 223);
    width: 80px;
}

.main-message .writepart .message-box .buttons{
    width: 540px;
    height: 65px;
    margin: auto;
    position: relative;
    top: 80px;
    display: flex;
    justify-content: space-evenly;
}

.main-message .writepart .message-box .buttons button{
    width: 120px;
    height: 45px;
    border: 2px solid black;
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
    box-shadow: 4px 4px gainsboro;
    background-color: rgb(252, 90, 117);
    font-size: 16px;
    line-height: 36px;
    color: white;
    cursor: pointer;
}

.main-message .writepart .message-box .buttons button:hover{
    background-color: rgb(255, 136, 156);
}

.main-message .writepart .message-box .buttons button:active{
    background-color: rgb(255, 136, 156);
    box-shadow: 2px 2px rgb(131, 131, 131);
    transform: translateX(2px) translateY(2px);
}

.main-message .writepart .newMessage{
    width: 10px;
    height: 10px;
    position: relative;
    top: 1.5%;
    left: 72%;
    padding: 0 0 0 0;
    border-radius: 5px;
    border: none;
    background-color: rgb(194, 231, 140);
}

.main-message .messagepart{
    width: 810px;
    height: 100%;
    position: relative;
    left: 100px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-message .messagepart .messageblock{
    width: 700px;
    margin-top: 20px;
    padding-left: 5px;
    border-radius: 15px;
    border: 2px solid black;
    box-shadow: 4px 4px gainsboro;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.main-message .messagepart .messageblock .content{
    width: 600px;
    height: fit-content;
    position: relative;
    left: 0px;
    top: 10px;
    margin: 0 0 0 0;
}

.main-message .messagepart .messageblock .content span{
    position: relative;
    left: 0px;
    display: inline-block;
}

.main-message .messagepart .messageblock .timeandfrom{
    width: 300px;
    height: 20px;
    position: relative;
    margin: 0 0 0 0;
    top: 5px;
    display: flex;
    justify-content: space-around;
    color: rgb(125, 125, 125);
}

.main-message .messagepart .messageblock .operations{
    width: 110px;
    height: 25px;
    position: relative;
    bottom: 3px;
    left: 580px;
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.main-message .messagepart .messageblock .operations .like,
.main-message .messagepart .messageblock .operations .reply,
.main-message .messagepart .messageblock .operations .delete{
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-message .messagepart .messageblock .operations i{
    cursor: pointer;
}

</style>

<script>
export default {
    data(){
        return{
            haveNew:false,
            showWrite:false,
            message: {
                content:"",
                time:"",
                from:"",
                to:"",
            },
            messages: [
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"lion",
                    to:"shark",
                },
                {
                    content:"昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~昨晚睡的还好吗~",
                    time:"2022/11/20 10:23",
                    from:"lion",
                    to:"shark",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
                {
                    content:"吃饭没有呀~",
                    time:"2022/11/20 10:23",
                    from:"shark",
                    to:"lion",
                },
            ]
        }
    },
    
    created(){
        
    },

    methods:{
        
    },
}
</script>