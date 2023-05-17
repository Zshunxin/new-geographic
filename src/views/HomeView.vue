<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

const route = useRouter()
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon';


const headerName = ref("")
const showLogo = ref(true)

const collapsed = ref(false);
const onCollapse = (val, type) => {

  collapsed.value = !collapsed.value;
  showLogo.value = !showLogo.value;
  // collapsed.value = val;
};
function onClickMenuItem(key) {
  headerName.value = key;
  if (key === "0_1") {
    headerName.value = "首页";
    route.push({ name: 'index' })
  }
  else if (key === "实体结构") {
    route.push({ name: 'chart1' })
  }
  else if (key === "空间文本") {
    route.push({ name: 'chart2' })
  }
  else if (key === "地理空间") {
    route.push({ name: 'space1' })
  }
  else {
    route.push({ name: key })
  }
  // Message.info({ content: `You select ${key}`, showIcon: true });
}

</script>
<template>
  <a-layout class="layout-demo">
    <a-layout-sider breakpoint="lg" :width="220" :collapsed="collapsed" @collapse="onCollapse">
      <div class="logo">
        <div style="font-size: 18px;text-align: center;margin-top: 20px;">
          <div v-if="showLogo">
            地理时空知识图谱
          </div>
        </div>
      </div>
      <a-menu mode="pop" :defaultOpenKeys="['1']" :defaultSelectedKeys="['0_3']" :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem">
        <a-menu-item key="0_1">
          <IconHome />
          首页
        </a-menu-item>

        <a-sub-menu key="1">
          <template #title>
            <span>
              <IconCalendar />数据
            </span>
          </template>
          <a-menu-item key="实体结构">实体结构</a-menu-item>
          <a-menu-item key="空间文本">空间文本</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #title>
            <span>
              <IconCalendar />算法
            </span>
          </template>
          <a-menu-item key="地理空间">地理空间</a-menu-item>
          <!-- <a-menu-item key="算法2">Menu 2</a-menu-item> -->
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px;">
        <a-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
        <span style="margin-left: 10px;">
          {{ headerName }}
        </span>
      </a-layout-header>
      <a-layout style="padding: 0 24px;">
        <a-breadcrumb :style="{ margin: '12px 0' }">
        </a-breadcrumb>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <!-- <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout-demo {
  height: 100vh;
  width: 100vw;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  /* background: rgba(255, 255, 255, 0.2); */
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  /* background: var(--color-fill-2); */
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-1);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* color: var(--color-white); */
  font-size: 16px;
  font-stretch: condensed;
  /* text-align: center; */
}
</style>
