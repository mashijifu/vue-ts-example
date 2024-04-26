<template>
  <div>
    <!-- v-forを使ってdataListの配列をリスト表示しなさい -->
    <ul>
      <li v-for="(data, index) in dataList" :key="index">{{ data }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dataList = ["バナナ", "イチゴ", "スイカ"];

    return {
      dataList,
    };
  },
});
</script>
