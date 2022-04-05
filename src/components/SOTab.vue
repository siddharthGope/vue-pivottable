<template>
  <div>
    <td>{{ so }}</td>
    <td>{{ soCode }}</td>
  </div>
</template>
<script>
export default {
  props: {
    so: { default: "", type: String },
    soCode: { default: "", type: String },
  },
};
</script>
