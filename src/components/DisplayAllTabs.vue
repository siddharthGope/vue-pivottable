<template>
  <v-container>
    <div class="filter-data-wrap">
      <FilterData />
      <!-- ******************** search ******************* -->
      <div class="input-group mb-3">
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Search NSM here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
    </div>
    <div>
      <NSM />
      <TLM />
      <SLM />
      <FLM />
      <SO />
    </div>
  </v-container>
</template>

<script>
import NSM from "./NSMTab.vue";
import FLM from "./FLMTab.vue";
import SLM from "./SLMTab.vue";
import SO from "./SOTab.vue";
import TLM from "./TLMTab.vue";
export default {
  name: "DisplayAllTabs",
  components: { NSM, FLM, SLM, SO, TLM },
  data() {
    return {
      worksheet: [],
      search: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/worksheet")
      .then((response) => response.json())
      .then((data) => (this.worksheet = data))
      .catch((err) => console.log(err.msg));
  },
  computed: {
    filteredData: function () {
      return this.worksheet.filter((result) => {
        console.log(result);
        return result.NSM.match(new RegExp(this.search, "i"));
      });
    },
  },
};
</script>
