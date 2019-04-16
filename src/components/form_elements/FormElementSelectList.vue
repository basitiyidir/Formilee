<template>
<div>
    <select class="custom-select" v-model="value">
        <option  v-for="item in currentField.options"
          :key="item.optionValue"
          :value="item.optionValue"
          :label="item.optionValue">{{item.optionValue}}
        </option>
    </select>
</div>
</template>

<script>
export default {
  name: "SelectList",
  props: ["currentField"],
  data() {
    return {
      value: ""
    };
  }
};
</script>
