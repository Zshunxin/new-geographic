<script setup>
// import data1 from './data/高校.js'
// import data01 from '/data/高校.json'
// import data2 from './data/工厂.json'
// import data3 from './data/地铁站.json'
// import data4 from './data/火车站.json'
// import data5 from './data/加油站.json'
// import data6 from './data/停车场.json'
// import data7 from './data/银行.json'
// import data8 from './data/邮局.json'
// import data9 from './data/小学.json'
import { useRouter } from 'vue-router';
const route = useRouter()

const goView = (page) => {
    route.push({ name: page })
}
</script>
<script>
</script>
<template>
    <header>
        <nav>
            <div class="logo">
                <img src="../assets/KGRAPH.png" alt="知识图谱系统">
                <!-- <span>KNOWlEDGE GRAPH</span> -->
            </div>
            <ul>
                <li><button @click="goView('start')" href="#">Home</button></li>
                <li><button @click="goView('home')" href="#">Demo</button></li>
                <li><button @click="goView('interface')" href="#">interface</button></li>
                <li><button href="#">Document</button></li>
                <li><button href="#">DataSet</button></li>

                <!-- <input type="checkbox" id="dark-mode-toggle"> -->
                <!-- <label style="align-content: center;text-align: center;padding: 18px;"
                                            for="dark-mode-toggle">切换暗夜模式</label> -->
            </ul>
        </nav>
    </header>
    <main>
        <section class="intro">
            <div class="intro-left">
                <h1>Knowledge graph system based on deep learning</h1>
                <p>我们的知识图谱系统基于深度学习技术，可以帮助您快速提取和分析重庆市实体信息的关系、状态、空间、变化、时间和属性等方面的数据。</p>
                <button class="start-btn" @click="goView('home')">开始使用</button>
            </div>
            <div class="intro-right">
                <div class="abstract-graph">
                    <!-- 这里放置知识图谱的抽象图 -->
                </div>
            </div>
        </section>
        <section class="features">
            <h2>我们的特点</h2>
            <ul>
                <li>基于深度学习技术，提取和分析实体信息的关系、状态、空间、变化、时间和属性等方面的数据</li>
                <li>支持多种数据源，包括结构化数据、半结构化数据和非结构化数据</li>
                <li>提供可视化工具，帮助用户更好地理解和分析数据</li>
                <li>支持自定义规则和算法，满足不同用户的需求</li>
            </ul>
        </section>
        <section class="demo">
            <h2>演示视频</h2>
            <video src="" controls></video>
        </section>
        <section class="download">
            <h2>下载链接</h2>
            <p>请点击以下链接下载我们的知识图谱系统：</p>
            <a href="#">下载链接</a>
        </section>
        <section class="document">
            <h2>文档和说明</h2>
            <p>请点击以下链接查看我们的知识图谱系统的文档和说明：</p>
            <a href="#">文档和说明</a>
        </section>
        <footer>
            <div class="contact">
                <h2>联系我们</h2>
                <p>电话：1234567890</p>
                <p>邮箱：info@kg.com</p>
                <p>地址：重庆市渝北区xxx路xxx号</p>
            </div>
            <div class="copy">
                <p>版权所有 © 2023 知识图谱系统</p>
            </div>
        </footer>
    </main>
</template>
<style scoped>
/* 全局样式 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

/* 头部样式 */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 100px;
}

.logo img {
    height: 40px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li:first-child {
    margin-left: 0;
}

nav ul li button {
    all: unset;
    display: block;
    padding: 20px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav ul li button:hover {
    color: rgb(14, 66, 210);
}

/* 主页介绍部分样式 */
.intro {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f5f5f5;
}

.intro-left {
    flex: 1;
    padding: 100px;
}

.intro-left h1 {
    font-size: 48px;
    font-weight: bold;
    color: rgb(14, 66, 210);
    margin-bottom: 40px;
}

.intro-left p {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 40px;
}

.start-btn {
    padding: 15px 50px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: rgb(14, 66, 210);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.start-btn:hover {
    background-color: #fff;
    color: rgb(14, 66, 210);
}

.intro-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.abstract-graph {
    width: 400px;
    height: 400px;
    background-color: #fff;
    background: url('图谱.png') repeat center center;
    background-size: cover;
    /* 这里可以添加抽象图的样式 */
    /* opacity: 0; */
    transition: color 0.5s ease;
    animation: fadeIn 2s ease-in-out forwards;
}

/* 页面滚动到第二页时，头部导航栏固定在顶部 */
.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

/* 第二页背景色 */
.features {
    height: 100vh;
    background-color: #f8f8f8;
}

/* 其他部分样式 */
.demo,
.download,
.document {
    height: 100vh;
    background-color: #fff;
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
    .intro {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .intro-left {
        padding: 20px;
    }

    .intro-right {
        display: none;
    }

    .abstract-graph {
        display: none;
    }
}

/* 特点部分样式 */
.features {
    padding: 80px 0;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.features h2 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: rgb(14, 66, 210);
    margin-bottom: 40px;
}

.features ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.features li {
    width: 100%;
    /* padding-left: 150px; */
    /* align-items: center; */
    justify-content: center;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.features li:before {
    content: "✔";
    color: rgb(14, 66, 210);
    margin-right: 10px;
}

.features li:last-child {
    margin-bottom: 0;
}

/* 演示视频部分样式 */
.demo {
    padding: 80px 0;
    text-align: center;
}

.demo h2 {
    font-size: 36px;
    font-weight: bold;
    color: rgb(14, 66, 210);
    margin-bottom: 40px;
}

.demo video {
    width: 80%;
    max-width: 800px;
    height: auto;
}

/* 下载链接和文档说明部分样式 */
.download,
.document {
    padding: 80px 0;
    text-align: center;
}

.download h2,
.document h2 {
    font-size: 36px;
    font-weight: bold;
    color: rgb(14, 66, 210);
    margin-bottom: 40px;
}

.download p,
.document p {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 40px;
}

.download a,
.document a {
    display: inline-block;
    padding: 20px 40px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: rgb(14, 66, 210);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.download a:hover,
.document a:hover {
    background-color: #fff;
    color: rgb(14, 66, 210);
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
    .features li {
        width: 100%;
    }
}

footer {
    background-color: #f0f0f0;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.contact p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.copy p {
    font-size: 14px;
    color: #999;
}
</style>