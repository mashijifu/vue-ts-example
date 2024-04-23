<template>
  <div>
    <!-- 以下isRedがtrueであれば赤文字で表示させる -->
    <p :class="{ red: isRed }">見出し1</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const isRed = true;

    return {
      isRed,
    };
  },
});
</script>
<style scoped>
.red {
  color: red;
}
</style>
