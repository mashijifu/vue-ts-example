<template>
  <div>
    <input v-model="price" />
    <!-- 入力された金額に対して10%を付与した値を表示 -->
    <p>{{ taxPrice }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
  setup() {
    // ウォッチャーを使って、priceの数値に10%を掛けた値を表示する処理を記述
    const price = ref(0);
    const taxPrice = ref(0);

    watch(price, () => {
      taxPrice.value = Math.floor(price.value * 1.1);
    });

    return {
      price,
      taxPrice,
    };
  },
});
</script>
