<template>
  <div>
    <!-- ボタンの押下で2の倍数の値が追加される -->
    <button v-on:click="addTwoNum">next</button>
    <table>
      <tr>
        <th>2の倍数</th>
      </tr>
      <tr v-for="(v, index) in data" :key="index">
        <td>{{ v }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const data = ref([2]);

    const addTwoNum = () => {
      data.value.push(data.value[data.value.length - 1] * 2);
    };

    return {
      data,
      addTwoNum,
    };
  },
});
</script>
