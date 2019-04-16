<template>
  <div class="tabs_inner">
    <form
      :model="fieldProperties"
      :rules="rules"
      :label-position="labelPosition"
      ref="fieldProperties"
    >

        <b-form-group v-show="activeForm.hasOwnProperty('label')" label="Label">
            <b-form-input id="input-horizontal" v-model="activeForm.label"></b-form-input>
        </b-form-group>

        <!-- Show only when 'isPlacehodlerVisible' key exist -->
        <b-form-group v-show="activeForm.hasOwnProperty('isPlaceholderVisible')">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitchPlace" v-model="activeForm.isPlaceholderVisible">
              <label class="custom-control-label" for="customSwitchPlace">Placeholder</label>
            </div>
            <b-form-input
                    v-show="activeForm.isPlaceholderVisible"
                    v-model="activeForm.placeholder" class="mt-2"
            ></b-form-input>
        </b-form-group>

        <!-- required -->
        <div class="form-group" v-show="activeForm.hasOwnProperty('isRequired')">
      				<div class="custom-control custom-switch">
      				  <input type="checkbox" class="custom-control-input" id="customSwitchRequired" v-model="activeForm.isRequired">
      				  <label class="custom-control-label" for="customSwitchRequired">Required field?</label>
      				</div>
        </div>

        <!-- help block -->
      	<div class="form-group" v-show="activeForm.hasOwnProperty('isHelpBlockVisible')">
      		<div class="custom-control custom-switch">
      		<input type="checkbox" class="custom-control-input" id="customSwitchHelp" v-model="activeForm.isHelpBlockVisible">
      		<label class="custom-control-label" for="customSwitchHelp">Helpblock</label>
      	</div>
      	<input class="form-control mt-2"
      		v-show="activeForm.isHelpBlockVisible"
      		v-model="activeForm.helpBlockText"
      	>
      	</div>

        <b-form-group v-show="activeForm.options" label="Options">
          <ul class="options">
            <li
              v-for="(item, index) in activeForm.options"
              :key="index"
              class="properties__optionslist"
            >
            <b-row>
                <b-col col lg="9">
                    <b-form-input v-model="item.optionValue"></b-form-input>
                </b-col>
                <b-col col lg="3">

                    <b-button variant="light" @click="deleteOption(activeForm.options, index)"
                    v-show="activeForm.options.length > 1"><font-awesome-icon :icon="['far', 'times-circle']" /></b-button>
                </b-col>
            </b-row>
            </li>
          </ul>

          <b-button variant="link" class="btn-sm" @click="addOption(activeForm.options)">
              <font-awesome-icon :icon="['fas', 'plus']" class="mr-1" /> Add more</b-button>
          </b-form-group>

        <!-- button -->
        <div v-show="activeForm.hasOwnProperty('buttonText')">
            Button Text
            <input class="form-control mt-2" v-model="activeForm.buttonText">
        </div>

        <!-- text editor MediumEditor -->
        <div v-show="activeForm.hasOwnProperty('fieldText')">
            Code view
            <b-form-textarea
                id="textarea"
                type="textarea"
                :rows="10"
                v-model="activeForm.fieldText"
            >{{activeForm.fieldText}}
            </b-form-textarea>
        </div>




  </form>
  </div>
</template>

<script>
export default {
  name: "Properties",
  store: ["activeForm"], // Get the form data from Home
  data() {
    return {
      labelPosition: "top",
      fieldProperties: {},
      rules: {}
    };
  },
  methods: {
    deleteOption(option, index) {
      this.$delete(option, index);
    },

    addOption(option) {
      let count = option.length + 1;

      option.push({
        optionLabel: "Option " + count,
        optionValue: "Option " + count
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.properties__optionslist {
  margin-bottom: 5px;
}

.tabs_inner {

}

</style>
