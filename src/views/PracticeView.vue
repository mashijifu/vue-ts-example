<template>
  <div>
    <!-- v-forを使ってdataListの配列オブジェクトをidが奇数のものだけテーブルの要素として表示しなさい -->
    <table>
      <thead>
        <tr>
          <th>id：</th>
          <th>name：</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in oddList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dataList = [
      { id: 1, name: "バナナ" },
      { id: 2, name: "イチゴ" },
      { id: 3, name: "スイカ" },
    ];

    const oddList = computed(() => {
      return dataList.filter((data) => data.id % 2 !== 0);
    });

    return {
      dataList,
      oddList,
    };
  },
});
</script>
