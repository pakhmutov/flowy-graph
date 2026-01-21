import { createRouter, createWebHashHistory } from "vue-router";
import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
    {
        path: "/",
        redirect: "/overview",
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
