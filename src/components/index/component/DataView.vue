<script setup>
import { ref, reactive } from 'vue'
import chartView1 from './chartView1.vue';
import { useRouter } from 'vue-router';
const route = useRouter()

const props = defineProps(["title"])

const data1 = ref({
    name: "重庆大学",
    table: [
        {
            "label": "中文名",
            "value": "重庆大学"
        },
        {
            "label": "外文名",
            "value": "Chongqing University"
        },
        {
            "label": "简称",
            "value": "重大（CQU）"
        },
        {
            "label": "创办时间",
            "value": "1929年10月12日"
        },
        {
            "label": "办学性质",
            "value": "公办大学"
        },
        {
            "label": "学校类别",
            "value": "综合类"
        },
        {
            "label": "主管部门",
            "value": "中华人民共和国教育部"
        },
        {
            "label": "现任领导",
            "value": "党委书记：舒立春、校长：王树新"
        },
        {
            "label": "专职院士数",
            "value": "中国工程院院士8人"
        },
        {
            "label": "本科专业",
            "value": "99个"
        },
        {
            "label": "硕士点",
            "value": "学术学位授权一级学科51个\n专业学位授权类别25个"
        },
        {
            "label": "博士点",
            "value": "学术学位授权一级学科38个\n学术学位授权二级学科1个\n专业学位授权类别8个"
        },
        { label: '博士后', value: '科研流动站29个' },
        { label: '国家重点学科', value: '一级学科3个\n二级学科19个（含培育2个）' },
        { label: '院系设置', value: '7个学部、35个学院' },
        { label: '校训', value: '耐劳苦、尚俭朴、勤学业、爱国家' },
        { label: '校歌', value: '《重庆大学校歌》' },
        { label: '校庆日', value: '10月12日' },
        { label: '地址', value: 'A校区：重庆市沙坪坝区沙正街174号\nB校区：重庆市沙坪坝区沙北街83号\nC校区：重庆市沙坪坝区渝碚路131号\n虎溪校区：重庆市沙坪坝区大学城南路55号' },
        { label: '院校代码', value: '10611' },
        { label: '主要奖项', value: '国家、省部级（科技）奖331项（“十二五”以来，截至2020年6月）\n国家级教学成果奖44项（截至2020年6月）\n全国创新创业典型经验高校（2019年）\n全国毕业生就业典型经验高校（2014年）' },
        { label: '占地面积', value: '5300 亩' }
    ],
    group: ["高校", "本科院校"]
})

function goHome() {
    route.push({ name: 'home' })
}

</script>
<template>
    <div class="header">
        <a-breadcrumb>
            <a-breadcrumb-item>
                <a-link @click="goHome">Home</a-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ props.title }}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
    <a-row class="content" :gutter="25">
        <a-col :xl="16">
            <a-card class="card card-left">
                <template #title>
                    {{ props.title }}
                </template>
                <div>
                    重庆大学（ChongqingUniversity，CQU），简称“重大”，是中华人民共和国教育部直属，由教育部、重庆市、国家国防科技工业局共建的全国重点大学，位列国家“双一流”、“211工程”、“985工程”，入选“珠峰计划”、“强基计划
                    [177]
                    ”、“高等学校创新能力提升计划”、“高等学校学科创新引智计划”、“卓越工程师教育培养计划”、“卓越法律人才教育培养计划”、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、教育部来华留学示范基地，为卓越大学联盟、中波大学联盟、一带一路高校联盟、“长江—伏尔加河”高校联盟、CDIO工程教育联盟、中国高等戏剧教育联盟成员单位。
                    [1-2] [163] [171] [173] [177]
                    学校创办于1929年，1942年成为一所综合性大学，1952年调整为多科性大学，1960年被确定为全国重点大学，1998年成为“211工程”重点建设高校；2000年，重庆大学合并重庆建筑大学、重庆建筑高等专科学校，2001年列入“985工程”重点建设高校，2017年入选“双一流”建设高校（A类）。
                    [52]
                    截至2023年2月，学校有A校区、B校区、C校区、虎溪校区和两江校区，占地面积5300余亩；设有7个学部、35个学院及7所附属医院，开设99个本科专业；拥有一级学科博士学位授权点38个、博士专业学位授权点8个，一级学科硕士学位授权点51个，专业硕士学位授权点25个；有教职工5300余人，其中专任教师3200余人；在校学生50000余人，其中研究生24000余人，本科生26000余人。
                </div>
                <div class="table-left">
                    <a-descriptions :data="data1.table" title="" align="" />
                </div>
            </a-card>
        </a-col>
        <a-col :xl="8">
            <a-card class="card card-right-1">
                <chartView1></chartView1>
            </a-card>
            <a-card class="card card-right-2">
                <template #title>
                    实体类型
                </template>
                <a-breadcrumb>
                    <a-breadcrumb-item v-for="item in data1.group">{{ item }}</a-breadcrumb-item>
                </a-breadcrumb>
            </a-card>
            <!-- <a-card class="card card-right-3"></a-card> -->
        </a-col>
    </a-row>
</template>
<style scoped>
.header {
    margin: 50px;
    background-color: rgb(252, 252, 252);
}

.content {
    /* background-color: azure; */
    margin-left: 50px;
    margin-right: 50px;

}

.card {
    background-color: rgb(252, 252, 252);
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;

}

.card-left {
    height: 950px;
    width: 100%;
}

.card-right-1 {
    height: 300px;
    width: 100%;
}

.card-right-2 {
    height: 150px;
    width: 100%;
    margin-left: 50px;
    margin-right: 50px;
}

.card-right-3 {
    height: 150px;
    width: 100%;
    margin-left: 50px;
    margin-right: 50px;
}

.table-left {
    margin-top: 10px;
}
</style>