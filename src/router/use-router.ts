import { getCurrentInstance } from "@vue/composition-api";
import VueRouter, { Route } from "vue-router";

export function useRouter(): VueRouter {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error("Instance Not Found.");
  }

  return instance.proxy.$router;
}

export function useRoute(): Route {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error("Instance Not Found.");
  }

  return instance.proxy.$route;
}
