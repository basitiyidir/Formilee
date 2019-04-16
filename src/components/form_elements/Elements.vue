<template>
  <div class="tabs_inner">
    <draggable
      :list="fields"
      :clone="clone"
      class="dragArea"
      :options="dropElementOptions"
      @start="onStart"
    >
    <b-button variant="secondary mb-1 mr-1 btn-block"
            :class="{ 'is-disabled': checkStopDragCondition(field) }"
             v-for="(field, index) in fields"
            :key="index"
        >
        <div v-if="index === 0"><font-awesome-icon :icon="['far', 'edit']" /> {{ field.text }}</div>
        <div v-if="index === 1"><font-awesome-icon :icon="['far', 'edit']" /> {{ field.text }}</div>
        <div v-if="index === 2"><font-awesome-icon :icon="['fas', 'heading']" /> {{ field.text }}</div>
        <div v-if="index === 3"><font-awesome-icon icon="calculator" /> {{ field.text }}</div>
        <div v-if="index === 4"><font-awesome-icon icon="align-justify" /> {{ field.text }}</div>
        <div v-if="index === 5"><font-awesome-icon :icon="['far', 'circle']" /> {{ field.text }}</div>
        <div v-if="index === 6"><font-awesome-icon :icon="['far', 'check-square']" /> {{ field.text }}</div>
        <div v-if="index === 7"><font-awesome-icon :icon="['far', 'clock']" /> {{ field.text }}</div>
        <div v-if="index === 8"><font-awesome-icon icon="table" /> {{ field.text }}</div>
        <div v-if="index === 9"><font-awesome-icon icon="calendar-day" /> {{ field.text }}</div>
        <div v-if="index === 10"> {{ field.text }}</div>
    </b-button>


    </draggable>
  </div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";
import draggable from "vuedraggable";

export default {
  name: "Elements",
  store: ["forms", "activeForm"],
  components: { draggable },
  data() {
    return {
      fields: FormBuilder.$data.fields,
      dropElementOptions: FormBuilder.$data.dropElementOptions,
      name: "selam"
    };
  },
  methods: {
    clone(field) {
      var newField = {
        fieldType: field.name,
        isUnique: field.isUnique
      };

      // Show placeholder
      if (field.isPlaceholderVisible) {
        newField["isPlaceholderVisible"] = false;
        newField["placeholder"] = "Input your text here...";
      }

      // Decide whether display label, required field, helpblock
      if (field.group == "form") {
        newField["label"] = "Enter your field label";
        newField["isHelpBlockVisible"] = false;
        newField["helpBlockText"] = "Please input your helpblock here...";
        newField["isRequired"] = false;
      }

      if (field.group == "button") {
        newField["buttonText"] = "Submit your form";
      }

      if (field.name == "TextEditor") {
        newField["fieldText"] = "Start typing...";
      }

      // Add dummy options for loading the radio/checkbox
      if (field.hasOptions) {
        newField["options"] = [
          { optionLabel: "Option 1", optionValue: "Option 1" },
          { optionLabel: "Option 2", optionValue: "Option 2" }
        ];
      }

      return newField;
    },
    onStart() {
      // console.log("start liao")
    },
    checkStopDragCondition(field) {
      var form = this.forms,
        formArray = [];

      for (var key in form) {
        formArray.push(form[key]["fieldType"]);
      }

      // Check if the fieldname exist in formArray
      // And when the field.isUnique too
      return _.includes(formArray, field.name) && field.isUnique;
    }
  }
};
</script>

<style lang="scss" scoped>
.button__sidebar {
  width: 100%;
  margin-bottom: 10px;

  .is-disabled & {
    opacity: 0.4;
  }
}

// Display this ghost in <main> only
.wrapper--forms .sortable__ghost {
  position: relative;
  width: 100%;
  border-bottom: 2px solid black;
  margin-top: 2px;
  margin-bottom: 2px;

  [type="button"] {
    display: none;
  }

  &:before {
    content: "Drag it here";
    background-color: black;
    color: white;
    position: absolute;
    left: 50%;
    font-size: 10px;
    border-radius: 10px;
    line-height: 15px;
    padding: 0 10px;
    top: -6px;
    transform: translateX(-50%);
  }
}
</style>
