<script setup>
import { Radio } from '@arco-design/web-vue';
import ViewChart1 from './component/DataChart1.vue';
import ViewChart2 from './component/DataChart2.vue';

import { ref, reactive } from 'vue'

const title = defineProps(["title"])
console.log(title);
const groupList = reactive([
    {
        id: 1,
        name: "模型1",
        text: "人工关系模型"
    },
    {
        id: 2,
        name: "模型2",
        text: "实物关系模型"
    },
    {
        id: 3,
        name: "模型3",
        text: "地理关系模型"
    },
    {
        id: 4,
        name: "模型4",
        text: "时间关系模型"
    },
    {
        id: 5,
        name: "模型5",
        text: "状态关系模型"
    },
    {
        id: 6,
        name: "模型6",
        text: "变化关系模型"
    },
])

const chartView = ref(1)
const getModel = (value) => {
    console.log(value.id);
    // if (value.id == 1) {
    chartView.value = value.id
    // }
}

const startValue = ref(title.title)
const endValue = ref("")

const getData = ref("")
const showData1 = ref(false)
const showLoad = ref(true)
const getDataView = () => {
    showLoad.value = true
    showData1.value = true
    setTimeout(() => {
        showLoad.value = false
    }, 100)
}

const Datalist = ref([
    {
        id: 1,
        title: "实物介绍",
        text: "重庆大学是教育部直属的全国重点大学，是国家“211工程”和“985工程”重点建设的高水平研究型综合性大学，是国家“世界一流大学建设高校（A类）”。"
    },
    {
        id: 2,
        title: "地理坐标",
        text: '重庆大学城位于重庆市沙坪坝区西部虎溪街道、香炉山街道、丰文街道和陈家桥街道，占地约20平方公里。将以其生态环境优美、文化氛围浓郁、科技产业发达、综合配套完善、开放式现代化的风格，成为西部地区的高级人才培训中心、科学研究与创新中心、国际科技教育交流中心。'
    },
])
</script>
<template>
    <div style="position: absolute;z-index: 10;">
        <div :style="{ marginTop: '20px' }">
            <a-radio-group @change="getModel" :default-value="groupList[0]"
                style="display: flex;width: 520px;flex-wrap: wrap;gap:10px" direction="vertical">
                <template v-for="item in groupList" :key="item">
                    <a-radio :value="item" @change="getModel(item)">
                        <template #radio="{ checked }">
                            <a-space align="start" class="custom-radio-card"
                                :class="{ 'custom-radio-card-checked': checked }">
                                <div className="custom-radio-card-mask">
                                    <div className="custom-radio-card-mask-dot" />
                                </div>
                                <div>
                                    <div className="custom-radio-card-title">
                                        {{ item.name }}
                                    </div>
                                    <a-typography-text type="secondary">
                                        {{ item.text }}
                                    </a-typography-text>
                                </div>
                            </a-space>
                        </template>
                    </a-radio>
                </template>
            </a-radio-group>
        </div>

        <div v-if="chartView == 1">
            <a-card style="margin:10px 5px;width: 481px">
                <a-col style="margin-left: 10px;margin-right: 10px;">
                    <div v-if="startValue != ''"
                        style="height:16px;width:16px;display: inline-flex; border: 1.8px solid rgb(var(--primary-6));border-radius: 50%;left:15px;color: rgb(var(--primary-6));margin-right: 20px;">
                    </div>
                    <icon-loading v-else
                        style="font-size: 18; stroke-width: 5;left:15px;color: rgb(var(--primary-6));margin-right: 20px;" />

                    &nbsp;
                    <a-input :style="{ width: '320px' }" v-model="startValue" placeholder="起点条目名称" allow-clear>
                    </a-input>
                </a-col>
                <a-col>
                    <icon-more-vertical
                        style="font-size: 30; stroke-width: 2;top: 0px;left:18px;color: rgb(var(--primary-6));margin-right: 20px;" />
                </a-col>
                <a-col style="margin-bottom: 10px;margin-left: 10px;margin-right: 10px;">
                    <div v-if="endValue != ''"
                        style="height:16px;width:16px;display: inline-flex; border: 1.8px solid rgb(var(--primary-6));border-radius: 50%;left:15px;color: rgb(var(--primary-6));margin-right: 20px;">
                    </div>
                    <icon-loading v-else
                        style="font-size: 18; stroke-width: 5;left:15px;color: rgb(var(--primary-6));margin-right: 20px;" />
                    &nbsp;
                    <a-input :style="{ width: '320px' }" v-model="endValue" default-value="" placeholder="终点条目名称"
                        allow-clear />
                </a-col>

                <a-col style="margin-left: 20px;margin-right: 10px;margin-top: 10px;top:5px">
                    <a-radio-group v-model="getData" @change="getDataView">
                        <a-radio value="1">综合结果</a-radio>
                        <a-radio value="Shanghai">仅途径过程</a-radio>
                        <a-radio value="Guangzhou">具体内容</a-radio>
                    </a-radio-group>
                </a-col>
            </a-card>
            <a-card v-if="showData1" :loading="showLoad" style="margin:10px 5px;width: 481px;min-height: 360px;">
                <a-card v-for="item in Datalist" :style="{ width: '435px' }" :title="item.title" :bordered="false">
                    <template #extra>
                        <a-link>更多</a-link>
                    </template>
                    {{ item.text }}
                    <!-- <br />
            Card content -->
                </a-card>
            </a-card>
        </div>
        <div v-if="chartView == 2">
            <a-card style="margin:10px 5px;width: 481px;min-height: 100px;">
                <a-input-search style="width: 320px, margin-left:10px" placeholder="搜索实物关系" />
            </a-card>
        </div>
        <div v-if="chartView == 3">
            <a-card style="margin:10px 5px;width: 481px;min-height: 100px;">
                <a-input-search style="width: 320px, margin-left:10px" placeholder="搜索地理坐标" />
            </a-card>
        </div>
    </div>
    <div style="background-color: #eee;height: 100vh;width: 100vw;">
        <ViewChart1 v-if="chartView == 1"></ViewChart1>
        <ViewChart2 v-if="chartView == 2"></ViewChart2>
        <ViewChart1 v-if="chartView == 3"></ViewChart1>
        <ViewChart2 v-if="chartView == 4"></ViewChart2>
        <ViewChart1 v-if="chartView == 5"></ViewChart1>
        <ViewChart2 v-if="chartView == 6"></ViewChart2>

    </div>
</template>
<style>
.custom-radio-card {
    padding: 8px 16px;
    border: 1px solid var(--color-border-2);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    width: 150px;
    box-sizing: border-box;
}

.custom-radio-card-mask {
    height: 14px;
    width: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
}

.custom-radio-card-mask-dot {
    width: 8px;
    height: 8px;
    border-radius: 100%;
}

.custom-radio-card-title {
    color: var(--color-text-1);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0px;
}

.custom-radio-card:hover,
.custom-radio-card-checked,
.custom-radio-card:hover .custom-radio-card-mask,
.custom-radio-card-checked .custom-radio-card-mask {
    border-color: rgb(var(--primary-6));
}

.custom-radio-card-checked {
    background-color: var(--color-primary-light-1);
}

.custom-radio-card:hover .custom-radio-card-title,
.custom-radio-card-checked .custom-radio-card-title {
    color: rgb(var(--primary-6));
}

.custom-radio-card-checked .custom-radio-card-mask-dot {
    background-color: rgb(var(--primary-6));
}
</style>