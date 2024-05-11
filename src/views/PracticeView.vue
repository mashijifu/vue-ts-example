<template>
  <div>
    <label for="baseball">野球</label>
    <input id="baseball" type="checkbox" value="baseball" v-model="sports" />
    <label for="football">サッカー</label>
    <input id="football" type="checkbox" value="football" v-model="sports" />
    <div>
      {{ sports }}
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const sports = ref(["football"]);

    return {
      sports,
    };
  },
});
</script>
