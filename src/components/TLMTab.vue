<template>
  <div>
    <td>{{ tlm }}</td>
    <td>{{ tlmCode }}</td>
  </div>
</template>
<script>
export default {
  props: {
    tlm: { default: "", type: String },
    tlmCode: { default: "", type: String },
  },
};
</script>
