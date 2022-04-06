import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PivotTable from "../views/PivotTable.vue";
import BootstrapTabs from "../views/BootstrapTabs.vue";
import VuetifyTable from "../views/VuetifyTable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pivot-table",
    name: "pivot-table",
    component: PivotTable,
  },
  {
    path: "/bootstrap-tabs",
    name: "bootstrap-tabs",
    component: BootstrapTabs,
  },
  {
    path: "/vuetify-table",
    name: "vuetify-table",
    component: VuetifyTable,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
