<!-- <template>
  <div>
    <MyName></MyName>
    <MyName>山田孝之</MyName>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import MyName from "@/components/MyName.vue";

export default defineComponent({
  name: "SlotView",
  components: {
    MyName,
  },
});
</script> -->

<template>
  <div>
    <UserDetail>
      <template v-slot:icon>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </template>
      <template v-slot:name>
        <span>山田孝之</span>
      </template>
    </UserDetail>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserDetail from "@/components/UserDetail.vue";

export default defineComponent({
  name: "ExampleView",
  components: {
    UserDetail,
  },
});
</script>
