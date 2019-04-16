<template>
    <div>
        <div class="form-check form-check-inline">
            <b-form-radio
                v-model="radio"
                v-for="(item, index) in currentField.options"
                :key="item.optionValue"
                :label="item.optionLabel"
                name="radio-inline" class="mr-4"
                >
                 {{ item.optionValue }}
            </b-form-radio>
        </div>
    </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ["currentField"],
  data() {
    return {
      radio: "1",
      
    };
  }
};
</script>
