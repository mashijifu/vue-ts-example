<template>
  <div>
    <!-- 以下赤文字で表示するようv-bindを利用したインラインスタイルでcssを当てなさい -->
    <p :style="fontColor">見出し1</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const fontColor = {
      color: "red",
    };

    return {
      fontColor,
    };
  },
});
</script>
