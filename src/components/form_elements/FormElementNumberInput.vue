<template>
<div>
    <b-form-input type="number"
        v-model="number" :min="1" :max="100">
    >
    </b-form-input>
</div>
</template>

<script>
export default {
  name: "NumberInput",
  data() {
    return {
      number: 10
    };
  }
};
</script>
