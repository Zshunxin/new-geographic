<script setup>
import { useRouter } from 'vue-router';
const route = useRouter()

const goView = (page) => {
    route.push({ name: page })
}
</script>
<template>
    <div class="content">
        <header>
            <nav>
                <div class="logo">
                    <img src="../../assets/KGRAPH.png" alt="知识图谱系统">
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
        <div style=" display: flex;
                        flex-direction: row;">
            <div class="sidebar">
                <div class="logo">知识图谱API</div>
                <div class="search">
                    <input type="text" placeholder="请输入关键词">
                </div>
                <div class="nav">
                    <a href="#">实体查询</a>
                    <a href="#">关系查询</a>
                    <a href="#">属性查询</a>
                </div>

            </div>
            <div class="container">
                <h2>概述</h2>
                <p>知识图谱API是一组用于访问知识图谱数据的接口，可以实现对知识图谱中的实体、关系、属性等进行查询和操作。</p>
                <h2>使用方法</h2>
                <p>使用知识图谱API需要先获取API密钥，然后通过HTTP请求访问API接口。API接口返回的数据格式为JSON。</p>
                <p>以下是一个查询实体信息的示例：</p>
                <code>GET /api/entity?name=张三&apikey=yourapikey</code>
                <p>其中，<code>name</code>参数表示要查询的实体名称，<code>apikey</code>参数表示API密钥。</p>
                <h2>API接口列表</h2>
                <table>
                    <thead>
                        <tr>
                            <th>接口名称</th>
                            <th>请求方式</th>
                            <th>参数</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>/api/entity</td>
                            <td>GET</td>
                            <td>name, apikey</td>
                            <td>实体信息</td>
                        </tr>
                        <tr>
                            <td>/api/relation</td>
                            <td>GET</td>
                            <td>subject, predicate, object, apikey</td>
                            <td>关系信息</td>
                        </tr>
                        <tr>
                            <td>/api/property</td>
                            <td>GET</td>
                            <td>entity, property, apikey</td>
                            <td>属性信息</td>
                        </tr>
                        <tr>
                            <td>/api/search</td>
                            <td>GET</td>
                            <td>keywords, apikey</td>
                            <td>搜索结果</td>
                        </tr>
                        <tr>
                            <td>/api/similar</td>
                            <td>GET</td>
                            <td>entity, apikey</td>
                            <td>相似实体</td>
                        </tr>
                        <tr>
                            <td>/api/path</td>
                            <td>GET</td>
                            <td>start, end, apikey</td>
                            <td>路径信息</td>
                        </tr>
                        <tr>
                            <td>/api/ontology</td>
                            <td>GET</td>
                            <td>entity, apikey</td>
                            <td>本体信息</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>接口名称</th>
                            <th>请求方式</th>
                            <th>参数</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>/api/user</td>
                            <td>POST</td>
                            <td>username, password</td>
                            <td>用户信息</td>
                        </tr>
                        <tr>
                            <td>/api/login</td>
                            <td>POST</td>
                            <td>username, password</td>
                            <td>登录状态</td>
                        </tr>
                        <tr>
                            <td>/api/logout</td>
                            <td>POST</td>
                            <td>apikey</td>
                            <td>注销状态</td>
                        </tr>
                        <tr>
                            <td>/api/search</td>
                            <td>GET</td>
                            <td>keywords, apikey</td>
                            <td>搜索结果</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>
<style scoped>
/* 头部样式 */
header {
    /* position: fi; */
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
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



.content {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    color: #333;
}

h1 {
    color: rgb(14, 66, 210);
    text-align: center;
    margin-top: 50px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #b2b2b2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

h2 {
    color: rgb(14, 66, 210);
    margin-top: 30px;
    margin-bottom: 20px;
}

p {
    line-height: 1.5;
    margin-bottom: 20px;
}

code {
    background-color: #f5f5f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Consolas, monospace;
}



h1 {
    color: rgb(14, 66, 210);
    text-align: center;
    margin-top: 50px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

h2 {
    color: rgb(14, 66, 210);
    margin-top: 30px;
    margin-bottom: 20px;
}

p {
    line-height: 1.5;
    margin-bottom: 20px;
}

code {
    background-color: #f5f5f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Consolas, monospace;
}

h1 {
    color: rgb(14, 66, 210);
    text-align: center;
    margin-top: 50px;
}



.sidebar {
    text-align: center;
    /* position: fixed; */
    z-index: 90;
    left: 50px;
    /* top: 60px; */
    width: 210px;
    background-color: rgba(255, 255, 255, 0.711);
    color: #fff;
    /* padding: 20px; */
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    height: 800px;
    flex-direction: column;
    justify-content: space-between;
}

.container {
    max-width: 1200px;
    /* margin: 0 auto; */
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 10px 100px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

/* .logo {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 40px;
    color: rgb(14, 66, 210);
    text-align: center;
} */

.nav {
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    /* justify-content: center; */
    flex-grow: 1;
}

.nav a {
    color: #242424;
    text-decoration: none;
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: 18px;
    text-align: center;
    width: 180px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
}

.nav a:hover {
    color: rgb(14, 66, 210);
    background-color: rgba(237, 237, 237, 0.711);
}

.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 20px;
    width: 180px;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    border: rgb(14, 66, 210) 1px solid;
    background-color: rgba(246, 246, 246, 0.711);
}

.search :hover {
    border: rgb(14, 66, 210);
}

.search input[type="text"] {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 0;
    margin: 0;
    outline: none;
}


h2 {
    color: rgb(14, 66, 210);
    margin-top: 30px;
    margin-bottom: 20px;
}

p {
    line-height: 1.5;
    margin-bottom: 20px;
}

code {
    background-color: #f5f5f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Consolas, monospace;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    margin-bottom: 20px;
}

th,
td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
}

th {
    background-color: #f5f5f5;
}
</style>