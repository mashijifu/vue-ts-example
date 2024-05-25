<template>
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
</script>
