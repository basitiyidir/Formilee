<template>
    <div>
        <b-button>
            {{currentField.buttonText}}
        </b-button>
    </div>
</template>

<script>
export default {
  name: "Button",
  props: ["currentField"]
};
</script>
