<template>
  <div>
    <!-- isActiveの条件によって表示非表示が切り替わるよう、v-ifを使った処理を追加しなさい -->
    <p v-if="isActive">テキスト1</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const isActive = false;

    return {
      isActive,
    };
  },
});
</script>
