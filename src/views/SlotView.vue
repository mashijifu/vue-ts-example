<template>
  <div>
    <!-- こんにちは、私の名前は山田太郎です。 -->
    <MyName></MyName>
    <!-- こんにちは、私の名前は山田孝之です。 -->
    <MyName>山田孝之</MyName>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import MyName from "@/components/MyName.vue";

export default defineComponent({
  name: "ExampleView",
  components: {
    MyName,
  },
});
</script>
