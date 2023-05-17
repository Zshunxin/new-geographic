<script setup>
import { ref } from 'vue'
const props = defineProps(["tag", "data", "img"])
const tagName = props.tag
const dataName = props.data
const img = props.img

</script>
<template>
    <div class="box-data">
        <div class="box-header">
            <div class="box-header-icon" data-dir="->"></div>
            <span>{{ tagName }}</span>
        </div>
        <div class="outer"></div>
        <div class="inner"></div>
        <img :src="img" class="img-1">
        <div style="margin-top: 10px;">{{ dataName }}</div>
        <div class="box-text">
            {{ tagName }}
        </div>
    </div>
</template>
<style>
.box-data {
    height: 168px;
    width: 128px;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 1px 5px 10px 0.1px rgba(196, 196, 196, 0.696);
    border-radius: 5px;
    /* transform: translateY(-10px); */
    transition: all 0.15s ease-in-out;
    -webkit-animation-name: fade;
    -webkit-animation-direction: 1s;
    animation-name: fade;
    animation-duration: 1s;
}

@-webkit-keyframes fade {
    from {
        opacity: .1;
    }

    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: .4;
    }

    to {
        opacity: 1
    }
}

.box-header {
    height: 21px;
    /* position: ; */
    top: 0px;
    left: -25px;
    margin: 10px;
    display: flex;
    opacity: 1;
    justify-content: center;
    align-items: center;
    gap: 1px;
    /* justify-content: start; */
    justify-self: self-start;
}


.box-header-icon {
    height: 10px;
    width: 22px;
    background-color: #EAAE91;
    border-radius: 5px;
}

.box-text {
    position: fixed;
    width: 118px;
    bottom: 0px;
    color: #fff;
    /* border-radius: 5px 0px; */
    background-image: url(https://static.allhistory.com/online/view/Map/img/right-dir-arrow.38d4.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-clip: border-box;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
}


.img-1 {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    text-align: center;
    background-color: #EAAE91;
}

.box-data:hover {
    /* height: 165px;
    width: 138px; */
    padding: 15px;
    /* padding: 18px 16px; */
    box-shadow: 0 2px 10px 0 rgba(255, 59, 59, .25);
    border: 1px solid rgb(230, 100, 100);
    position: relative;
    transform: scale(1.1);
    cursor: pointer;
    /* transform: translateY(-10px); */
    opacity: 1;

    /* .box-text {} */

    /* box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); */
}

.box-data:hover .box-text {
    opacity: 1;
}

.box-data:hover .box-header {
    opacity: 0;
    display: none;
}

/* .box-data:hover .outer {
    -webkit-text-size-adjust: none;
    color: #333;
    font-family: -apple-system, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, arial, sans-serif;
    list-style: none;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: top;
    animation-name: bubble;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: .15s;
    top: 65px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 82px;
    height: 82px;
} */

/* .box-data:hover .inner {
    -webkit-text-size-adjust: none;
    color: #333;
    font-family: -apple-system, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, arial, sans-serif;
    list-style: none;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: top;
} */
</style>