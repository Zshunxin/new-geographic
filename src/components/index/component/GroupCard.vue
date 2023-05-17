<script setup>
import { ref } from 'vue';
import data from '../data.json'
// defineProps(["name", "name_1", "text", "href", "tag"])
import { useRouter } from 'vue-router';

const word = defineProps(["word"])
console.log(data);
const cardList = ref(data)

const DataNum = 100

const route = useRouter()
const goDataView = (DataName) => {
    console.log(DataName);
    // route.push({ name: 'index' })
    route.push({ name: 'dataView', params: { title: DataName } })
}

</script>

<template>
    <div class="header">
        <a-typography-title :heading="5">
            查询到 {{ word.word }} 实体概念( {{ DataNum }})
        </a-typography-title>
    </div>
    <div class="cardGroup">
        <a-card v-for="card in cardList" class="card" hoverable>
            <template #title>
                <div @click="goDataView(card.title)">
                    {{ card.title }}
                    <div>
                        <a-tag :color="tag.color" style="margin-right: 10px;margin-bottom: 10px;" v-for="tag in card.tag">
                            {{ tag.name }}</a-tag>
                    </div>
                </div>
            </template>
            <template #extra>
                <a-link @click="goDataView(card.title)">More</a-link>
            </template>
            <div>
                {{ card.text }}
            </div>
        </a-card>
    </div>
    <!-- <div class="foot">
                                                                                                            <a-pagination :total="200" show-page-size />
                                                                                                        </div> -->
</template>

<style scoped>
.header {
    margin-left: 35px;
}

.cardGroup {
    justify-content: center;
}

.foot {
    margin-left: 35px;

    height: 50px;
}

.card {
    padding: 20px;
    margin: 30px;
    justify-content: center;
    /* background-color: rgb(255, 255, 255); */
    border: 1px solid rgb(236, 236, 236);
}

.card-demo {
    width: 360px;
    margin-left: 24px;
    transition-property: all;
}

.card-demo:hover {
    transform: translateY(-4px);
}
</style>