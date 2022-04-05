<template>
  <v-container>
    <div class="filter-data-wrap">
      <FilterData />
      <!-- ******************** Bootstrap ******************* -->
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
    <!-- ******************** Bootstrap ******************* -->

    <div class="tabs-wrap">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="FLM-tab"
            data-bs-toggle="tab"
            data-bs-target="#FLM"
            type="button"
            role="tab"
            aria-controls="FLM"
            aria-selected="true"
          >
            FLM
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="SLM-tab"
            data-bs-toggle="tab"
            data-bs-target="#SLM"
            type="button"
            role="tab"
            aria-controls="SLM"
            aria-selected="false"
          >
            SLM
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="SO-tab"
            data-bs-toggle="tab"
            data-bs-target="#SO"
            type="button"
            role="tab"
            aria-controls="SO"
            aria-selected="false"
          >
            SO
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="TLM-tab"
            data-bs-toggle="tab"
            data-bs-target="#TLM"
            type="button"
            role="tab"
            aria-controls="TLM"
            aria-selected="false"
          >
            TLM
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="FLM"
          role="tabpanel"
          aria-labelledby="FLM-tab"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">FLM Name</th>
                <th scope="col">FLM Code</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredData" :key="item.id">
                <FLM :flm="item.flm" :flmCode="item.flm_code" />
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="SLM"
          role="tabpanel"
          aria-labelledby="SLM-tab"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SLM Name</th>
                <th scope="col">SLM Code</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredData" :key="item.id">
                <SLM :slm="item.slm" :slmCode="item.slm_code" />
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="SO"
          role="tabpanel"
          aria-labelledby="SO-tab"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SO Name</th>
                <th scope="col">SO Code</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredData" :key="item.id">
                <SO :so="item.so" :soCode="item.so_code" />
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="TLM"
          role="tabpanel"
          aria-labelledby="TLM-tab"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">TLM Name</th>
                <th scope="col">TLM Code</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredData" :key="item.id">
                <TLM :tlm="item.tlm" :tlmCode="item.tlm_code" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import FLM from "./FLMTab.vue";
import SLM from "./SLMTab.vue";
import SO from "./SOTab.vue";
import TLM from "./TLMTab.vue";
import FilterData from "./FilterData.vue";
export default {
  name: "FilterComponent",
  components: { FLM, SLM, SO, TLM, FilterData },
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
