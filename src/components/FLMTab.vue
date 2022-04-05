<template>
  <div>
    <td>{{ flm }}</td>
    <td>{{ flmCode }}</td>
  </div>
</template>
<script>
export default {
  props: {
    flm: { default: "", type: String },
    flmCode: { default: "", type: String },
  },
};
</script>
