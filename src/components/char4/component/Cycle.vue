<script setup>
import { ref, reactive } from 'vue'
const tag = defineProps(["tagList", "colorList"])
const emit = defineEmits(["changeTag"])


const tagSet = ref("")

function selectTag() {
    emit('changeTag', tagSet.value)
}

const tagList = tag["tagList"]
const colorList = tag["colorList"]

console.log(tagList, colorList);
const logo = ref('https://cqu.edu.cn/statics/v1.1/images/logo.png')
const activeIndex = ref(0);

const items = reactive([]);
let deg = 90
let rotate = 360 / tagList.length
for (let index = 0; index < tagList.length; index++) {
    const deg_str = "rotate(" + deg + "deg) translate(0, -75px) rotate(-" + deg + "deg)"
    if (deg == 90) {
        items.push({
            "name": tagList[index],
            "color": {
                "border": "1px solid " + "rgb(230,100,100)",
                "transform": "scale(1.2)",
                "opacity": 1,
                "width": "60px",
                "height": "60px"
            },
            "deg": deg,
            "style": {
                "background-color": "rgb(230,100,100)",
                "transform": deg_str,
                "width": "60px",
                "height": "60px"
            }
        })
        tagSet.value = items[index]["name"]

    }
    else {
        items.push({
            "name": tagList[index],
            "color": {
                "border": "1px solid " + colorList[index],
                "transform": "scale(1.2)",
            },
            "deg": deg,
            "style": {
                "background-color": colorList[index],
                "transform": deg_str
                // "transform": "rotate( " + deg + " deg) translate(0, -75px) rotate(" + deg + "deg)",
            }
        })
    }
    if (deg + rotate < 360) {
        deg = deg + rotate
    }
    else {
        deg = (deg + rotate) % 360
    }
}

function rotateCircle(deg) {
    if (deg != 90) {
        let deg_1 = (360 - (deg % 360) + 90) % 360
        for (let index = 0; index < items.length; index++) {
            console.log(items[index]["deg"], deg_1);
            deg = items[index]["deg"] + deg_1
            let deg_str = "rotate(" + deg + "deg) translate(0, -75px) rotate(-" + deg + "deg)"
            items[index]["style"]["transform"] = deg_str
            items[index]["style"]["transition"] = "transform 1s ease-in-out";
            items[index]["deg"] = deg
            if (deg % 360 == 90) {
                items[index]["color"] = {
                    // "border": "1px solid " + colorList[index],
                    "border": "1px solid " + "rgb(230,100,100)",
                    "transform": "scale(1.2)",
                    "opacity": 1,
                    "width": "60px",
                    // "color": "#123456",
                    "height": "60px"
                }
                items[index]["style"] = {
                    // "background-color": colorList[index],
                    "background-color": "rgb(235,105,100)",
                    "transform": deg_str,
                    "transition": "all 1s ease",
                    // "color": "#123456",
                    "width": "60px",
                    "height": "60px"
                }
                tagSet.value = items[index]["name"]

                // item[index]["style"]["width"] = "50px"
                // item[index]["style"]["height"] = "50px"

                // {
                //     "background-color": colorList[index],
                //     "transform": deg_str,
                //     "width": "50px",
                //     "height": "50px"
                // }
            }
            else {
                items[index]["color"] = {
                    "border": "1px solid " + colorList[index],
                    "transform": "scale(1.2)",
                    "transition": "all 1s ease",
                    "width": "45px",
                    "height": "45px"
                }
                items[index]["style"] = {
                    "background-color": colorList[index],
                    "transform": deg_str,
                    "transition": "all 1s ease",
                    "width": "45px",
                    "height": "45px"
                }
                // item[index]["style"]["width"] = "45px"
                // item[index]["style"]["height"] = "45px"
                // item[index]["style"] = {
                //     "background-color": colorList[index],
                //     "transform": deg_str,
                //     "width": "45px",
                //     "height": "45px"
                // }
            }

        }
    }

    console.log(items);
}

console.log(items);
</script>
<template>
    <div class="cycle-content">
        <div class="container">
            <div v-for="i in items" class="button" :style="i.style" @click="selectTag()">
                <div style="position: absolute;text-align: center;">{{ i.name }}</div>
                <div class="circle-border" :style="i.color" @click="rotateCircle(i.deg)"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 225px;
    height: 225px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}


.button {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    background-color: #9a9a9a;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    cursor: pointer;

    /* top: 0; */
    /* left: 50%; */
    /* transform-origin: 25% 25%; */
}

.button:hover {
    cursor: pointer;

}

.circle-border {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    opacity: 0;
    transition: all 0.1s ease;
    transform: scale(0.8);
}

.circle-border:hover {
    transform: scale(1.2);
    opacity: 1;
}
</style>