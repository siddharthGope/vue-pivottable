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
    >
      <template v-slot:output v-if="!loaded">
        <div class="p-1">loading...</div>
      </template>
      <!-- <template v-slot:rendererCell>Table</template>
      <template v-slot:aggregatorCell>Count</template> -->
      <template v-slot:colGroup>
        <colGroup :width="colGroupFirstWidth"></colGroup>
        <colGroup></colGroup>
      </template>
      <template v-slot:pvtAttr="{ name }">
        <i class="fa fa-filter"></i>
        <!-- {{ name[0].toLowerCase() + name.substring(1) }} -->
        {{ name.toLowerCase() }}
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
export default {
  components: {
    VuePivottableUi,
  },
  data() {
    return {
      worksheet: [],
      colGroupFirstWidth: 350,
      loaded: false,
    };
  },
  methods: {
    reload() {
      this.loaded = false;
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    },
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
.pivot-table {
  height: 100%;
  width: 100%;
}
</style>
