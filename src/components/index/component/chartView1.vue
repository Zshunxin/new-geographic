<script setup>
import { ref, reactive, onMounted } from 'vue'

import * as echarts from 'echarts';
import 'echarts-wordcloud';

onMounted(() => {
    initChart();
})

function initChart(params) {
    let chart = echarts.init(document.getElementById('chartWordcloud1'));
    // let option = {

    //     series: [
    //         {
    //             type: 'wordCloud',


    //             shape: 'circle',

    //             keepAspect: false,


    //             maskImage: maskImage,

    //             // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
    //             // Default to be put in the center and has 75% x 80% size.

    //             left: 'center',
    //             top: 'center',
    //             width: '70%',
    //             height: '80%',
    //             right: null,
    //             bottom: null,

    //             // Text size range which the value in data will be mapped to.
    //             // Default to have minimum 12px and maximum 60px size.

    //             sizeRange: [12, 60],

    //             // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

    //             rotationRange: [-90, 90],
    //             rotationStep: 45,

    //             // size of the grid in pixels for marking the availability of the canvas
    //             // the larger the grid size, the bigger the gap between words.

    //             gridSize: 8,

    //             // set to true to allow word to be drawn partly outside of the canvas.
    //             // Allow word bigger than the size of the canvas to be drawn
    //             // This option is supported since echarts-wordcloud@2.1.0
    //             drawOutOfBound: false,

    //             // if the font size is too large for the text to be displayed,
    //             // whether to shrink the text. If it is set to false, the text will
    //             // not be rendered. If it is set to true, the text will be shrinked.
    //             // This option is supported since echarts-wordcloud@2.1.0
    //             shrinkToFit: false,

    //             // If perform layout animation.
    //             // NOTE disable it will lead to UI blocking when there is lots of words.
    //             layoutAnimation: true,

    //             // Global text style
    //             textStyle: {
    //                 fontFamily: 'sans-serif',
    //                 fontWeight: 'bold',
    //                 // Color can be a callback function or a color string
    //                 color: function () {
    //                     // Random color
    //                     return 'rgb(' + [
    //                         Math.round(Math.random() * 160),
    //                         Math.round(Math.random() * 160),
    //                         Math.round(Math.random() * 160)
    //                     ].join(',') + ')';
    //                 }
    //             },
    //             emphasis: {
    //                 focus: 'self',

    //                 textStyle: {
    //                     textShadowBlur: 10,
    //                     textShadowColor: '#333'
    //                 }
    //             },

    //             // Data is an array. Each array item must have name and value property.
    //             data: [{
    //                 name: 'Farrah Abraham',
    //                 value: 366,
    //                 // Style of single text
    //                 textStyle: {
    //                 }
    //             }]
    //         }
    //     ]
    // };


    let option = {  //指定图表的配置项和数据
        // backgroundColor: 'rgba(128, 128, 128, 0.1)',  //rgba设置透明度0.1
        title: {  //配置标题组件
            x: 'center', y: 15,
            textStyle: {
                color: 'green', fontSize: 22,
            }
        },
        tooltip: { show: true },  //配置提示框组件
        grid: {
            left: 0,
            right: 0
        },
        series: [{  //数据系列及其配置
            name: '重庆大学词云',  //设置名称
            type: 'wordCloud',  //设置图表类型为字云图
            sizeRange: [50, 60],  //设置数据大小范围
            size: ['60%', '80%'],  //设置显示的字云图的大小
            textRotation: [0, 45,],  //设置文字倾斜角度
            textPadding: 3,  //设置文字之间的间距
            autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
            textStyle: {
                fontFamily: 'sans-serif',
                // normal: {
                //     color: function () {
                //         return 'rgb(' + [
                //             Math.round(Math.random() * 255),
                //             Math.round(Math.random() * 255),
                //             Math.round(Math.random() * 255)
                //         ].join(',') + ')';
                //     }
                // },
                emphasis: {
                    shadowBlur: 26,
                    color: '#123',
                    shadowColor: '#ccc',
                    fontSize: 20
                }
            },
            data: [  //设置具体的数据
                { name: "重庆", value: 50 },
                { name: "985", value: 30 },
                { name: "211", value: 30 },

            ]  //data结束
        }]  //series结束
    };

    chart.setOption(option);
}

</script>
<template>
    <div id="chartWordcloud1" style="height:300px;width: 100%;margin: 0px;padding: 0px;">

    </div>
</template>
<style></style>