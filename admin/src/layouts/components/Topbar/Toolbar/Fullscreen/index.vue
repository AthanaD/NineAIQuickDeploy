<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core';
  import useSettingsStore from '@/store/modules/settings';

  defineOptions({
    name: 'Fullscreen',
  });

  const settingsStore = useSettingsStore();

  const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <span
    v-if="settingsStore.mode === 'pc'"
    class="flex-center cursor-pointer px-2 py-1"
    @click="toggle"
  >
    <SvgIcon :name="isFullscreen ? 'i-ri:fullscreen-exit-line' : 'i-ri:fullscreen-line'" />
  </span>
</template>
