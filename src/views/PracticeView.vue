<!-- <script lang="ts">
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
</template> -->

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Practice from "@/components/Practice.vue";

export default defineComponent({
  name: "PracticeView",
  components: {
    Practice,
  },
  setup() {
    const items = [
      {
        title: "Item 1",
        description: "Description 1",
      },
      {
        title: "Item 2",
        description: "Description 2",
      },
    ];

    return { items };
  },
});
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <Practice :title="item.title" :description="item.description" />
      </li>
    </ul>
  </div>
</template>
