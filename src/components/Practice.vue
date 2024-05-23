<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PracticeComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>
