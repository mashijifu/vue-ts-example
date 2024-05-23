<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Practice from "@/components/Practice.vue";

export default defineComponent({
  name: "PracticeView",
  components: {
    Practice,
  },
});
</script>

<template>
  <div>
    <Practice title="タイトル" description="説明です。" />
  </div>
</template>
