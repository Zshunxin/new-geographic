<script setup>
import { ref } from 'vue'
import DataChart from './component/DataChart.vue';
const input1 = ref("")
const input2 = ref("")
const input3 = ref("")

</script>
<template>
    <div class="header">
        <a-input-search placeholder="搜索实体名" class="input-1" v-model="input1"></a-input-search>
        <a-input placeholder="实体1" class="input-1" v-model="input2"></a-input>
        <a-input placeholder="实体2" class="input-1" v-model="input2"></a-input>
        <a-button type="primary">查找最短实体路径</a-button>
    </div>
    <DataChart></DataChart>
</template>
<style scoped>
.header {
    position: absolute;
    margin: 10px;
    z-index: 2;
}

.input-1 {
    width: 200px;
    margin: 10px;
}
</style>