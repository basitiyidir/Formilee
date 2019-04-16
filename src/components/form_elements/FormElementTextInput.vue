<template>
<div>
    <b-form-input
        :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''"
    >
    </b-form-input>
</div>
</template>

<script>
export default {
  name: "TextInput",
  props: ["currentField"]
};
</script>
