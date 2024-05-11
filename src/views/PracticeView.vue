<template>
  <div>
    <select v-model="selectedLangage">
      <option disabled value="">選択してください</option>
      <option
        v-for="(language, index) in languages"
        :value="language.value"
        :key="index"
      >
        {{ language.label }}
      </option>
    </select>
    <select v-if="selectedLangage !== ''" v-model="selectedFramework">
      <option disabled value="">選択してください</option>
      <option
        v-for="(framework, index) in frameworks[selectedLangage]"
        :value="framework.value"
        :key="index"
      >
        {{ framework.label }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const languages = [
      {
        value: "php",
        label: "PHP",
      },
      {
        value: "java",
        label: "Java",
      },
    ];

    const frameworks = {
      php: [
        {
          value: "laravel",
          label: "Laravel",
        },
        {
          value: "cakephp",
          label: "CakePHP",
        },
      ],
      java: [
        {
          value: "spring",
          label: "Spring",
        },
        {
          value: "play",
          label: "Play",
        },
      ],
    };
    const selectedLangage = ref("");
    const selectedFramework = ref("");

    return {
      selectedLangage,
      selectedFramework,
      languages,
      frameworks,
    };
  },
});
</script>
