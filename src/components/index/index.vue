<script setup>

import { ref } from 'vue'
import GroupCard from './component/GroupCard.vue';
import { reactive } from 'vue';
const optionList = ref(["高校", "政府机关"])
const treeData = [
    {
        key: '高校',
        title: '高校',
        children: [
            {
                key: '专科',
                title: '专科',
                children: [
                    {
                        key: '民办专科',
                        title: '民办专科',
                    },
                    {
                        key: '工办专科',
                        title: '公办专科',
                    },
                ]
            },
            {
                key: '本科',
                title: '本科',
                children: [
                    {
                        key: '民办本科',
                        title: '民办本科',
                    },
                    {
                        key: '工办本科',
                        title: '公办本科',
                    },
                ]
            },

        ],
    },
];

const showResult = ref(false)

const loading = ref(true)

const searchWord = ref("")

const fallback = (value) => {
    return {
        value,
        label: `++${value}++`
    }
};


const logoStyle = ref({
    "margin-top": "100px",
    "text-align": "center",
    "height": "100px",
    "width": "180px",
    "margin-bottom": "20px",
    // "background-color": "#eee",
    // "margin": "10px"
})

const logoWidth = ref(24)

const search = ref({
    // "margin-top": "100px",
    // "background-color": "rgb(255, 255, 255)",
    // "border-radius": "50px",
    // "height": "100px",
    // "width": "300px"
    "width": "630px",
    "border": "rgb(14, 66, 210) solid 1px",
    "padding": "0px",
    "height": "60px",
    "border-radius": "50px",
    "box-sizing": "content-box",
    "background-color": "white",
    "margin-left": "10px",
    "margin-right": "10px",

})


const searchInputStyle = ref({
    "width": "100%",
    "height": "60px",
    "padding-left": "20px",
    "margin": "10px",
    // "padding-right": "50px",
    "background-color": "rgba(255, 255, 255, 0)",
    "border-radius": "0px 50px 50px 0px",
    "border": "none",
    "box-sizing": "content-box"
})

const searchSelectStyle = ref({
    "width": "100%",
    "border": "none",
    "height": "100%",
    "margin": "5px",
    "border-radius": "1px",
    "background-color": "rgba(255, 255, 255, 0)",
    "font-size": "36px",
    "text-align": "center",
    "border-radius": "5px 0px 0px 5px",
    "box-sizing": "content-box"
})

function searchData() {
    search.value["margin-top"] = "25px"
    search.value["width"] = "500px"
    search.value["height"] = "50px"
    // searchGroup.value["width"] = "500px"
    searchInputStyle.value["width"] = "100%"
    searchSelectStyle.value["width"] = "100%"
    logoStyle.value["height"] = "50px"
    logoStyle.value["width"] = "180px"
    logoStyle.value["margin-top"] = "25px"
    logoWidth.value = 5
    showResult.value = true
    loading.value = false
}

const searchData1 = ref([])
const searchLink = ref([{ "name": "重庆大学", "href": "https://www.cqu.edu.cn/" }, { "name": "西南大学", "href": "http://www.swu.edu.cn/" }])



function handleSearch(value) {
    if (value) {
        // searchData1.value = [...Array(5)].map((_, index) => `${value}-${index}`)
        searchData1.value = ["重庆大学", "西南大学", "重庆对外经贸学院", "重庆移通学院", "重庆师范大学"]
        console.log(searchData1)
    } else {
        searchData = []
    }
}

</script>

<template>
    <div class="content">
        <!-- <div class="search" :style="search"> -->
        <!-- <img src="../../assets/KGRAPH .png" alt="" style="height: 100px;"> -->

        <!-- </div> -->


        <a-row justify="center">
            <a-col :span="logoWidth" :style="logoStyle">
                <img src="../../assets/KGRAPH1.png" style="height: 100%;" alt="" srcset="">
            </a-col>
            <a-input-group :style="search">
                <a-col :xs="6" :xl="4">
                    <a-select :options=optionList :style="searchSelectStyle" placeholder="实体类别" />
                </a-col>
                <a-col :xs="12" :xl="20">
                    <!-- <a-input-search class="search-input"
                        style="width: 500px;height: 80px; background-color: rgba(255, 255, 255, 0);border-radius: 0px 5px 5px 0px;box-sizing:content-box;"
                        v-model="searchWord" placeholder="请输入实体名称" @press-enter="searchData" @search="searchData">
                    </a-input-search> -->
                    <a-auto-complete :data="searchData1" @search="handleSearch" :style="searchInputStyle"
                        v-model="searchWord" placeholder="请输入实体名称" @press-enter="searchData" focus>
                        <!-- <template #footer>
                            <div style="padding: 10px 10px; ">
                                <a-link :href="item.href" v-for="item in searchLink">{{ item.name }}</a-link>
                            </div>
                        </template> -->
                        <!-- <template #suffix>
                            <icon-search />
                        </template> -->
                    </a-auto-complete>
                    <!-- <icon-search @click="searchData" style="margin-left: -35px;" /> -->
                </a-col>
            </a-input-group>
        </a-row>

        <!-- <icon-search /> -->

        <!-- <form class="search-box" :style="search">
                                                        <input class="search-input" type="text" placeholder="Search Google">
                                                        <button type="submit">

                                                        </button>
                                                    </form> -->
        <!-- </div> -->
        <div v-if="showResult" class="search-result">
            <a-spin :loading="loading" tip="加载中">
                <GroupCard :word="searchWord"></GroupCard>
            </a-spin>
        </div>
    </div>
</template>

<style scoped>
.content {
    height: 100%;
    background: url('../../assets/KGRAPH .png') no-repeat center center;
    background: url('../../assets/back.jpg') no-repeat center center;
    background: url('../../assets/图谱.png') no-repeat center center;

    background-size: cover;
    background: rgb(255, 255, 255);
    /* backdrop-filter: blur(5px); */
    /* box-shadow: 0px 5px 15px rgb(39, 39, 39); */
}

/* .search {
    text-align: center;
} */


.container {
    margin: 0 auto;
    max-width: 500px;
    padding: 15px;
}

.logo {
    display: block;
    margin: 0 auto;
    max-width: 272px;
    font-size: 50px;

}

.search-box {
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    display: flex;
    margin: 0 auto;
    max-width: 584px;
    overflow: hidden;
    padding: 0 16px;
    width: 100%;
}

.search-select {
    height: 50px;
    width: 100px;
    border-radius: 5px;
    border: rgb(171, 171, 171) 1px solid;
}

/* .search-select:focus {
    border: rgb(14, 66, 210) 1px solid;
} */

.search-input {
    /* background-color: transparent; */
    border: none;
    flex: 1;
    font-size: 16px;

    outline: none;
    /* height: 50px; */
    width: 500px;
    border-radius: 5px;
    /* border: rgb(171, 171, 171) 1px solid; */
}

/* .search-input:focus {
    border: rgb(14, 66, 210) 1px solid;
} */


.search-button {
    background-color: #f2f2f2;
    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    cursor: pointer;
    height: 36px;
    margin: 16px;
    width: 48px;
}

.search-button:hover {
    background-color: #e8e8e8;
}

.search-button:focus {
    outline: none;
}

.footer {
    color: #70757a;
    font-size: 14px;
    margin: 32px auto 0;
    max-width: 800px;
    text-align: center;
}
</style>