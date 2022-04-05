<template>
  <div>
    <div>{{ slm }}</div>
    <div>{{ slmCode }}</div>
  </div>
</template>
<script>
export default {
  props: {
    slm: { default: "", type: String },
    slmCode: { default: "", type: String },
  },
};
</script>
