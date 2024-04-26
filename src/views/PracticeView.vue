<template>
  <div>
    <p v-if="status === 0">仮会員</p>
    <!-- statusが1の場合"会員"が表示、それ以外の場合"非会員"と表示されるようにしなさい -->
    <p v-else-if="status === 1">会員</p>
    <p v-else>非会員</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const status = 0;

    return {
      status,
    };
  },
});
</script>
