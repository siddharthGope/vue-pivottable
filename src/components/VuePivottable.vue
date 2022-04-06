<template>
  <div>
    <vue-pivottable-ui
      :data="worksheet"
      :rows="[
        'NSM',
        'TLM',
        'SLM',
        'FLM',
        'MTD Target',
        'MTD Sales',
        'MTD % Ach',
        'QTD Target',
        'QTD Sales',
        'CP QTD CY Value',
        'CP QTD LY Value',
        'YTD Target',
        'YTD Sales',
        'CP YTD CY Value',
        'CP YTD LY Value',
      ]"
      :cols="[]"
      layout="layout"
      :tableColorScaleGenerator="colorScaleGenerator"
    >
      <!-- <template v-slot:rows><div class="p-1"></div> </template> -->
      <template v-slot:output v-if="!loaded">
        <div class="p-1">loading...</div>
      </template>
      <!-- <template v-slot:rendererCell>
      </template>
      <template v-slot:aggregatorCell>
      </template> -->
      <!-- <template v-slot:pvtAxisLabel>
        <pvtAxisLabel class="pvtAxisLabel" :color="textColor"></pvtAxisLabel>
      </template> -->
      <template v-slot:pvtRowLabel>
        <!-- <span class="apiFields">
          {{ name }}
        </span> -->
        <pvtRowLabel>
          <i class="fa fa-filter"></i>
        </pvtRowLabel>
      </template>
      <template v-slot:pvtAttr="{ name }">
        <span class="apiFields">
          <i class="fa fa-filter"></i>{{ name.toLowerCase() }}
        </span>
      </template>

      <template v-slot:colGroup>
        <colGroup class="colGroupFirst" :width="colGroupFirstWidth"></colGroup>
        <colGroup class="colGroupSecond"></colGroup>
      </template>
    </vue-pivottable-ui>
    <div class="m-1">
      <label>colGroupFirstWidth: </label>
      <input v-model="colGroupFirstWidth" type="number" />
    </div>
    <button
      class="btn btn-sm btn-secondary mt-1"
      :disabled="!loaded"
      @click="reload"
    >
      <i class="fa fa-refresh mr-25"></i>
      Refresh
    </button>
  </div>
</template>

<script>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
// import { scaleLinear } from "d3-scale";
export default {
  components: {
    VuePivottableUi,
  },
  data() {
    return {
      worksheet: [],
      colGroupFirstWidth: 350,
      loaded: false,
      textColor: "blue",
      layout: {
        font: {
          size: 20,
          family: "Montserrat",
        },
      },
    };
  },
  methods: {
    reload() {
      this.loaded = false;
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    },
    // colorScaleGenerator(values) {
    //   const scale = scaleLinear()
    //     .domain([0, Math.max.apply(null, values)])
    //     .range(["#fff", "#77f"]);
    //   return (x) => {
    //     return { "background-color": scale(x) };
    //   };
    // },
  },
  mounted() {
    this.reload();
    fetch("http://localhost:3000/worksheet")
      .then((response) => response.json())
      .then((data) => (this.worksheet = data))
      .catch((err) => console.log(err.msg));
  },
};
</script>
<style scoped>
.colGroupFirst {
  background-color: #f6f6f6;
  color: red;
  font-family: "Montserrat", sans-serif;
}
.colGroupSecond {
  font-family: "Montserrat", sans-serif !important;
}
.pvtUi {
  table-layout: fixed;
  width: 100%;
  color: #000;
  font-family: "Montserrat", sans-serif;
  border-collapse: collapse;
}
table.pvtTable {
  font-size: 15pt;
  text-align: left;
  border-collapse: collapse;
  font-family: "Montserrat", sans-serif;
}
table.pvtTable thead tr th.pvtAxisLabel {
  background-color: #ebf8ec !important;
}
table.pvtTable tbody tr th.pvtAxisLabel {
  background-color: #f8edeb !important;
}
</style>
