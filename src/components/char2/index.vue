<script setup>
import { ref } from 'vue'
import DataChart1 from './component/DataChart1.vue';
import DataChart2 from './component/DataChart2.vue';
import DataChart3 from './component/DataChart2.vue';

const tabList = ref([
    {
        "key": 1,
        "name": "时间关系",
        "chart": 'DataChart1'
    },
    {
        "key": 2,
        "name": "空间关系"
    },
    {
        "key": 3,
        "name": "拓扑关系"
    },
    {
        "key": 4,
        "name": "属性关系"
    },
    {
        "key": 5,
        "name": "成员关系"
    },
    {
        "key": 6,
        "name": "变化关系"
    },
    {
        "key": 7,
        "name": "同义关系"
    },
    {
        "key": 8,
        "name": "方向关系"
    },
    {
        "key": 9,
        "name": "度量关系"
    }
])
</script>
<template>
    <div class="header">
        <a-tabs lazy-load>
            <a-tab-pane :key="1">
                <template #title>
                    时间关系
                </template>
                <DataChart1></DataChart1>
            </a-tab-pane>
            <a-tab-pane :key="2">
                <template #title>
                    空间关系
                </template>
                <DataChart2></DataChart2>
            </a-tab-pane>
            <a-tab-pane :key="3">
                <template #title>
                    拓扑关系
                </template>
                <DataChart3></DataChart3>
            </a-tab-pane>
            <a-tab-pane :key="4">
                <template #title>
                    属性关系
                </template>
            </a-tab-pane>
            <a-tab-pane :key="5">
                <template #title>
                    成员关系
                </template>
            </a-tab-pane>
            <a-tab-pane :key="6">
                <template #title>
                    变化关系
                </template>
            </a-tab-pane>
            <a-tab-pane :key="7">
                <template #title>
                    同义关系
                </template>
            </a-tab-pane>
            <a-tab-pane :key="8">
                <template #title>
                    方向关系
                </template>
            </a-tab-pane>
            <a-tab-pane :key="9">
                <template #title>
                    度量关系
                </template>
            </a-tab-pane>
        </a-tabs>

    </div>
</template>
<style>
.header {
    margin: 20px;
}
</style>