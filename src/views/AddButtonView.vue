<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import AddButton from "@/components/AddButton.vue";

export default defineComponent({
  name: "AddButtonView",
  components: {
    AddButton,
  },
  setup() {
    const displayText = ref("");

    const add = (text: string) => {
      displayText.value = text;
    };

    return {
      displayText,
      add,
    };
  },
});
</script>

<template>
  <div>
    <AddButton @add="add" />
    <p>{{ displayText }}</p>
  </div>
</template>
