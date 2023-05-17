<template>
    <div class="login-container">
        <form class="login-form" @submit.prevent="login">
            <h2 class="login-title">登录</h2>
            <div class="form-group">
                <!-- <label for="username">用户名</label> -->
                <input type="text" id="username" placeholder="用户名" v-model="username" required>
            </div>
            <div class="form-group">
                <!-- <label for="password">密码</label> -->
                <input type="password" id="password" placeholder="账号" v-model="password" required>
            </div>
            <button type="submit" class="login-btn">登录</button>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRouter()
const username = ref('');
const password = ref('');

function login() {
    if (username.value == "1" && password.value == "123456789") {
        route.push({ name: 'home' })
    }
}

</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/back.jpg') no-repeat center center;
    height: 100vh;
}

.login-form {
    width: 350px;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.658);
    backdrop-filter: blur(10px);
}

.login-title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    font-size: 16px;
}

button[type="submit"] {
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0069d9;
}
</style>