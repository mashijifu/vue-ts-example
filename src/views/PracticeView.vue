<template>
  <div>
    <p v-if="isActive">テキスト1</p>
    <!-- isActiveがfalseの場合に、"テキスト2"が表示表示されるよう処理を追加しなさい -->
    <p v-else>テキスト2</p>
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
