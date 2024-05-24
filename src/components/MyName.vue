<template>
  <div>
    <p>
      こんにちは、私の名前は
      <slot>山田太郎</slot>
      です。
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MyName",
});
</script>
