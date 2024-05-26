<!-- route -->
<!-- <template>
  <div>
    <a :href="`/example/${id}`" @click.prevent="incrementParamsId">{{
      $route.params.id
    }}</a>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import { useRouter, useRoute } from "@/router/use-router";

export default defineComponent({
  name: "ExampleView",

  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = ref(Number(route.params.id));

    const incrementParamsId = () => {
      id.value = Math.floor(Math.random() * 100);
      router.push(`/example/${id.value}`);
    };

    return { id, incrementParamsId };
  },
});
</script> -->

<!-- store -->
<template>
  <!-- lastNameとfirstNameが半角スペースで結合された文字列として出力 -->
  <div>{{ $store.getters.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useStore } from "@/store/use-store";

export default defineComponent({
  name: "ExampleView",

  setup() {
    const store = useStore();
    store.commit("setUser", { id: 1, lastName: "山田", firstName: "太郎" });
  },
});
</script>
