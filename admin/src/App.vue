<script setup lang="ts">
  import useSettingsStore from '@/store/modules/settings';
  import eruda from 'eruda';
  import hotkeys from 'hotkeys-js';
  import VConsole from 'vconsole';
  import Provider from './ui-provider/index.vue';
  import eventBus from './utils/eventBus';

  const route = useRoute();

  const settingsStore = useSettingsStore();
  const { auth } = useAuth();

  const isAuth = computed(() => {
    return route.matched.every((item) => {
      return auth(item.meta.auth ?? '');
    });
  });

  // 侧边栏主导航当前实际宽度
  const mainSidebarActualWidth = computed(() => {
    let actualWidth = Number.parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--g-main-sidebar-width'),
    );
    if (
      settingsStore.settings.menu.menuMode === 'single' ||
      (settingsStore.settings.menu.menuMode === 'head' && settingsStore.mode !== 'mobile')
    ) {
      actualWidth = 0;
    }
    return `${actualWidth}px`;
  });

  // 侧边栏次导航当前实际宽度
  const subSidebarActualWidth = computed(() => {
    let actualWidth = Number.parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--g-sub-sidebar-width'),
    );
    if (settingsStore.settings.menu.subMenuCollapse && settingsStore.mode !== 'mobile') {
      actualWidth = Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--g-sub-sidebar-collapse-width',
        ),
      );
    }
    return `${actualWidth}px`;
  });

  // 设置网页 title
  watch(
    [() => settingsStore.settings.app.enableDynamicTitle, () => settingsStore.title],
    () => {
      if (settingsStore.settings.app.enableDynamicTitle && settingsStore.title) {
        const title =
          typeof settingsStore.title === 'function' ? settingsStore.title() : settingsStore.title;
        document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`;
      } else {
        document.title = import.meta.env.VITE_APP_TITLE;
      }
    },
    {
      immediate: true,
      deep: true,
    },
  );

  onMounted(() => {
    settingsStore.setMode(document.documentElement.clientWidth);
    window.addEventListener('resize', () => {
      settingsStore.setMode(document.documentElement.clientWidth);
    });
    hotkeys('alt+i', () => {
      eventBus.emit('global-system-info-toggle');
    });
  });

  import.meta.env.VITE_APP_DEBUG_TOOL === 'eruda' && eruda.init();
  import.meta.env.VITE_APP_DEBUG_TOOL === 'vconsole' && new VConsole();
</script>

<template>
  <Provider>
    <RouterView
      v-slot="{ Component }"
      :style="{
        '--g-main-sidebar-actual-width': mainSidebarActualWidth,
        '--g-sub-sidebar-actual-width': subSidebarActualWidth,
      }"
    >
      <component :is="Component" v-if="isAuth" />
      <NotAllowed v-else />
    </RouterView>
    <SystemInfo />
  </Provider>
</template>
