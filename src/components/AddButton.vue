<template>
  <div>
    <input v-model="inputText" />
    <button @click="add">値を加算</button>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AddButton",
  // setup(_, { emit }) { // この書き方でもOK
  setup(_, context) {
    const inputText = ref("");

    const add = () => {
      context.emit("add", inputText.value);
    };
    return {
      inputText,
      add,
    };
  },
});
</script>
