<template>
  <div>
        <b-form-textarea
            id="textarea"
            type="textarea"
            :rows="2"
            :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''"
            v-model="textarea"
        >
        </b-form-textarea>

  </div>
</template>

<script>
export default {
  name: "LongTextInput",
  props: ["currentField"],
  data() {
    return {
      textarea: ""
    };
  }
};
</script>
