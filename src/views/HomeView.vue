<template>
  <div class="home">
    <!-- <TabsComponent /> -->
    <VuePivottable />
  </div>
</template>

<script>
// @ is an alias to /src
// // import TabsComponent from "@/components/TabsComponent.vue";
import VuePivottable from "@/components/VuePivottable.vue";

export default {
  name: "HomeView",
  components: {
    VuePivottable,
    // TabsComponent,
  },
};
</script>
