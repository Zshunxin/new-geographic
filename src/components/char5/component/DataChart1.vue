<script setup>
import G6 from '@antv/g6';
import insertCss from 'insert-css';
import { onMounted } from 'vue';
import data1 from '../data/data1.json'
function initChart() {
    insertCss(`
  .g6-component-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
    `);

    const tooltip = new G6.Tooltip({
        offsetX: 10,
        offsetY: 10,
        fixToNode: [1, 0.5],
        // the types of items that allow the tooltip show up
        // 允许出现 tooltip 的 item 类型
        itemTypes: ['node', 'edge'],
        // custom the tooltip's content
        // 自定义 tooltip 内容
        getContent: (e) => {
            const outDiv = document.createElement('div');
            outDiv.style.width = 'fit-content';
            outDiv.style.height = 'fit-content';
            const model = e.item.getModel();
            if (e.item.getType() === 'node') {
                outDiv.innerHTML = `${model.name}`;
            } else {
                const source = e.item.getSource();
                const target = e.item.getTarget();
                outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${target.getModel().name}`;
            }
            return outDiv;
        },
    });

    const container = document.getElementById('container4');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;
    const graph = new G6.Graph({
        container: 'container4',
        width,
        height,
        plugins: [tooltip],
        layout: {
            type: 'force',
            edgeStrength: 0.9,
        },
        modes: {
            default: ['drag-canvas'],
        },
        defaultNode: {
            size: [20, 20],
            style: {
                lineWidth: 5,
                fill: '#DEE9FF',
                stroke: '#5B8FF9',
            },
        },
        defaultEdge: {
            size: 2,
            style: {
                stroke: '#e2e2e2',
                lineAppendWidth: 2,
            },
        },
        nodeStateStyles: {
            highlight: {
                opacity: 1,
            },
            dark: {
                opacity: 0.2,
            },
        },
        edgeStateStyles: {
            highlight: {
                stroke: '#999',
            },
        },
    });

    function clearAllStats() {
        graph.setAutoPaint(false);
        graph.getNodes().forEach(function (node) {
            graph.clearItemStates(node);
        });
        graph.getEdges().forEach(function (edge) {
            graph.clearItemStates(edge);
        });
        graph.paint();
        graph.setAutoPaint(true);
    }

    graph.on('node:mouseenter', function (e) {
        const item = e.item;
        graph.setAutoPaint(false);
        graph.getNodes().forEach(function (node) {
            graph.clearItemStates(node);
            graph.setItemState(node, 'dark', true);
        });
        graph.setItemState(item, 'dark', false);
        graph.setItemState(item, 'highlight', true);
        graph.getEdges().forEach(function (edge) {
            if (edge.getSource() === item) {
                graph.setItemState(edge.getTarget(), 'dark', false);
                graph.setItemState(edge.getTarget(), 'highlight', true);
                graph.setItemState(edge, 'highlight', true);
                edge.toFront();
            } else if (edge.getTarget() === item) {
                graph.setItemState(edge.getSource(), 'dark', false);
                graph.setItemState(edge.getSource(), 'highlight', true);
                graph.setItemState(edge, 'highlight', true);
                edge.toFront();
            } else {
                graph.setItemState(edge, 'highlight', false);
            }
        });
        graph.paint();
        graph.setAutoPaint(true);
    });
    graph.on('node:mouseleave', clearAllStats);
    graph.on('canvas:click', clearAllStats);


    const data = data1;

    graph.data({
        nodes: data.nodes,
        edges: data.edges.map(function (edge, i) {
            edge.id = 'edge' + i;
            return Object.assign({}, edge);
        }),
    });

    graph.render();


    if (typeof window !== 'undefined')
        window.onresize = () => {
            if (!graph || graph.get('destroyed')) return;
            if (!container || !container.scrollWidth || !container.scrollHeight) return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
        };

    // if (typeof window !== 'undefined')
    //     window.onresize = () => {
    //         if (!graph || graph.get('destroyed')) return;
    //         if (!container || !container.scrollWidth || !container.scrollHeight) return;
    //         graph.changeSize(container.scrollWidth, container.scrollHeight);
    //     };
}

onMounted(() => {
    initChart()
})

</script>

<template>
    <a-card
        style="position: absolute;left: 500px;top:20px;width: 800px;height: 700px;background-color: rgba(255, 255, 255, 0);">
        <div id="container4" style="height: 700px;width: 95%;"></div>
    </a-card>
</template>

<script >

</script>