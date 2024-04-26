<template>
  <div>
    <!-- v-forを使ってdataListの配列オブジェクトをテーブルの要素として表示しなさい -->
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      <tr v-for="(item, index) in dataList" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dataList = [
      { id: 1, name: "バナナ" },
      { id: 2, name: "イチゴ" },
      { id: 3, name: "スイカ" },
    ];

    return {
      dataList,
    };
  },
});
</script>
