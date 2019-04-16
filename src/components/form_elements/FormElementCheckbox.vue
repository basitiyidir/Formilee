<template>
<div>


<div class="custom-control custom-checkbox custom-control-inline"
    v-model="checkList"
    v-for="(item, index) in currentField.options"
    :options="(item, index) in currentField.options"
    :key="item.optionValue"
    :label="index"
>
  <input class="custom-control-input" type="checkbox" :id="item.optionValue" :value="item.optionValue">
  <label class="custom-control-label" :for="item.optionValue">{{ item.optionValue }}</label>
</div>



</div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["currentField"],
  data() {
    return {
      checkList: [0]
    };
  }
};
</script>
