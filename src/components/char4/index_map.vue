<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()

import data1 from './data/高校.json'
import data2 from './data/工厂.json'
import data3 from './data/地铁站.json'
import data4 from './data/火车站.json'
import data5 from './data/加油站.json'
import data6 from './data/停车场.json'
import data7 from './data/银行.json'
import data8 from './data/邮局.json'
import data9 from './data/小学.json'
import Cycle from './component/Cycle.vue'
import CardData from './component/CardData.vue'
onMounted(() => {
    initMap([DataList[0]]);
})
const modelData = ref(false)
function showData() {
    modelData.value = true
}
const Title_1 = ref("")

const DataList = [
    {
        "name": "高校",
        "data": data1,
        "icon": '/school.png'
    },
    {
        "name": "工厂",
        "data": data2,
        "icon": '/factory.png'
    },
    {
        "name": "轻轨站",
        "data": data3,
        "icon": '/subway-1.png'
    },
    {
        "name": "火车站",
        "data": data4,
        "icon": '/train.png'
    },
    {
        "name": "加油站",
        "data": data5,
        "icon": '/petrol_station.png'
    },
    {
        "name": "停车场",
        "data": data6,
        "icon": '/park-1.png'
    },
    {
        "name": "银行",
        "data": data7,
        "icon": '/bank-1.png'
    },
    {
        "name": "邮局",
        "data": data8,
        "icon": '/post.png'
    },
    {
        "name": "小学",
        "data": data9,
        "icon": '/primarySchool.png'
    },
]

function initMap(DataList) {
    // 百度地图API功能
    const map = new BMapGL.Map('map') // 容器的 ID
    const point = new BMapGL.Point(106.4, 29.6)
    map.centerAndZoom(point, 13) // 设置中心点和基础缩放级别
    map.enableScrollWheelZoom(true) // 滚轮缩放
    // map.setMapType(BMAP_EARTH_MAP) // 设置成3D球体,其他类型：https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a5b0
    var bd = new BMapGL.Boundary();
    bd.get('沙坪坝区', function (rs) {
        var hole = new BMapGL.Polygon(rs.boundaries, {
            strokeColor: 'rgb(100,100,100)',
            fillColor: 'rgb(100,100,255)',
            fillOpacity: 0.1
        });
        map.addOverlay(hole);
    });
    for (const item of DataList) {
        let data = item.data
        let icon = item.icon
        for (let index = 0; index < data.length; index++) {
            const place = data[index];
            let point_one = new BMapGL.Point(place["经度"], place["纬度"])
            let myIcon = new BMapGL.Icon(icon, new BMapGL.Size(32, 36));
            let marker = new BMapGL.Marker(point_one, {
                icon: myIcon
            });  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            let opts = {
                width: 230,     // 信息窗口宽度
                height: 200,     // 信息窗口高度
                title: place["名称"], // 信息窗口标题
                message: place["标签"]
            }
            const content = `<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>${place["标签"]}</p>
            <img style='float:right;margin:0 4px 22px' id='windowContent' src='${place["图片地址1"]}' width='200' height='100'/>
            <a type="button" id="markerBtn" value="${place["名称"]}" data-sid="${place["名称"]}" style='border:1px solid rgba(100,100,100,0.1);padding:2px;width:60px;text-align:center;background-color: rgb(251, 251, 251)'>图谱</a>
            `
            // let infoWindow = new BMapGL.InfoWindow(index + place["标签"], opts);  // 创建信息窗口对象 
            let infoWindow = new BMapGL.InfoWindow(content, opts);  // 创建信息窗口对象 

            marker.addEventListener("click", function () {
                // showData()
                Title_1.value = place["名称"]
                map.openInfoWindow(infoWindow, point_one); //开启信息窗口
                if (!infoWindow.isOpen()) {
                    infoWindow.addEventListener("open", function () {
                        document.getElementById("markerBtn").onclick = function (e) {
                            Title_1.value = e.target.dataset.sid
                            map.closeInfoWindow(infoWindow, point_one);
                            showData()
                        }
                    })
                }
                else {
                    document.getElementById("markerBtn").onclick = function (e) {
                        Title_1.value = e.target.dataset.sid
                        map.closeInfoWindow(infoWindow, point_one);
                        showData()
                        // alert(e.target.dataset.sid)
                    }
                }

            })
        }
    }

}

const tagList = ["关系", "状态", "空间", "变化", "时间", "属性"]
const colorList = ["#E0A2A2", "#A7BEE0", "#DBBD88", "#A79DCC", "#AAC9B6", "#EAAE91", "#DCB39A"]

const tagDataList = reactive([
    {
        "name": "关系",
        "data": [{
            "tag": "关系",
            "data": "喜羊羊",
            "img": '/back-1.jpeg'
        },
        {
            "tag": "关系",
            "data": "灰太狼",
            "img": '/back-2.jpeg'
        },
        {
            "tag": "关系",
            "data": "沸羊羊",
            "img": '/back-3.jpeg'
        },]
    },
    {
        "name": "状态",
        "data": [{
            "tag": "状态",
            "data": "懒羊羊",
            "img": '/back-5.jpeg'
        }]
    },
    {
        "name": "属性",
        "data": [{
            "tag": "属性",
            "data": "懒羊羊的力量",
            "img": '/back-6.jpeg'
        }]
    },
    {
        "name": "变化",
        "data": [{
            "tag": "变化",
            "data": "创造青青草原",
            "img": '/back-4.jpeg'
        },
        ]
    },
    {
        "name": "空间",
        "data": [{
            "tag": "空间",
            "data": "青青草原",
            "img": '/back-4.jpeg'
        },
        ]
    },
    {
        "name": "时间",
        "data": [{
            "tag": "时间",
            "data": "公元2000年",
            "img": '/back-4.jpeg'
        }, {
            "tag": "时间",
            "data": "公元2023年",
            "img": '/back-4.jpeg'
        },
        ]
    }
])

const selectTag = ref(tagDataList[0].name)

const tagData = () => {
    let data = []
    let newTag = tagDataList.find((tag) => {
        if (tag.name == selectTag.value) {
            data = tag.data
            return tag.data
        }
    })
    return data
}

const setTag = (tag) => {
    selectTag.value = tag
}

const goDataView = () => {
    console.log("1");
    route.push({ name: 'space-data1', params: { title: Title_1.value } })
}

const goHomeView = () => {
    route.push({ name: 'home' })
}

const groupList = ref(["高校", "轻轨站", "火车站", "银行", "邮局", "小学"])
const selectGroup = ref(['高校'])

function groupGet(val) {
    console.log(val);
    let new_group = []
    for (let index = 0; index < DataList.length; index++) {
        // console.log();
        if (val.includes(DataList[index].name) == true) {
            new_group.push(DataList[index])
        }
    }
    console.log(new_group);
    initMap(new_group)
}
</script>
<template>
    <div id="map">

    </div>
    <a-modal simple width="900px" height="600px" v-model:visible="modelData" @ok="handleOk" hide-cancel="true"
        @cancel="handleCancel">
        <template #title>
            <div>
                {{ Title_1 }}
            </div>
            <!-- <icon-close-circle style="height: 50px;width: 50px;color: #123456;" /> -->
        </template>
        <template #footer>
            &nbsp;
        </template>
        <div style="display: flex;">
            <Cycle :tagList="tagList" :colorList="colorList" @changeTag="setTag"></Cycle>
            <img style="margin-left: 20px;" src=" https://static.allhistory.com/online/view/Map/img/relation-arrow.974b.svg"
                alt="">
            <div style="display: flex;justify-content: center;align-items: center;">
                <CardData v-for="tag in tagData()" :key="tag.data" :tag="tag.tag" :data="tag.data" :img="tag.img">
                </CardData>
            </div>
            <a-button style="margin-left: 10px;" type="text" @click="goDataView">查看详情</a-button>
        </div>
    </a-modal>

    <div style="position: absolute;top:20px;right: 20px;z-index: 9;">
        <div>
            <a-button style="margin-left:10px;background-color:white;" @click="goHomeView">HOME</a-button>
        </div>
        <a-input-search style="margin-top: 10px;width: 260px;margin-left:10px;background-color:white;"
            placeholder="搜索地理名称" />

        <div>
            <a-select @change="groupGet" v-model="selectGroup" :default-value="['高校']"
                style="margin-top: 10px;width: 260px;margin-left:10px;background-color:white;" :size="size"
                placeholder="地物实体类型" multiple>
                <a-option v-for="item in groupList">{{ item }}</a-option>
            </a-select>
        </div>
    </div>
</template>
<style scoped>
#map {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}


.model-1 {
    height: 500px;
    z-index: 2;
    width: 500px;
    top: 150px;
    left: 200px;
    position: absolute;
    border-radius: 5px;
    border: 1px solid rgba(100, 100, 100, 0.1);
    background-color: rgb(255, 255, 255);
    transform: rotateX('angle') 1s;
}

/* // 隐藏右下角的“百度地图”logo */
:deep(.anchorBL) {
    display: none;
}
</style>