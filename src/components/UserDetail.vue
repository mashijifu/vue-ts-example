<template>
  <div>
    <div class="user-detail">
      <div class="user-detail__icon">
        <slot name="icon" />
      </div>
      <div class="user-detail__name">
        <slot name="name" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "UserDetail",
});
</script>
