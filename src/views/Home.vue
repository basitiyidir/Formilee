<template>
<div>
<b-row>
    <b-col sm="3" class="mt-3">
        <b-card no-body>
            <b-tabs card>
              <b-tab title="Elements" v-on:click="changeTabClick('elements')" v-bind="{ 'active': activeTabForFields === 'elements' }">
                <b-card-text v-bind:class="{ 'show active': activeTabForFields === 'elements' }">
                    <elements />
                </b-card-text>
              </b-tab>
              <b-tab title="Properties" v-on:click="changeTabClick('properties')" v-bind="{ 'active': activeTabForFields === 'properties' }">
                <b-card-text>
                    <properties v-show="Object.keys($store.activeForm).length > 0"></properties>
                </b-card-text>
              </b-tab>
            </b-tabs>
        </b-card>
    </b-col>


    <b-col sm="9">

        <div class="wrapper-forms">
            <div v-if="forms.length == 0" class="emptyState text-center" style="margin-top:30px;">
                Please drag and drop an element here
            </div>

        <draggable :list="forms"
                   class="dragArea"
                   :options="sortElementOptions">

          <!-- The form elements starts (on the right) -->

          <div v-for="(form, index) in forms"
               :key="index"
               v-bind="form"
               class="form__group"
               :class="{ 'is--active': form === activeForm  }">
            <span class="form__selectedlabel badge badge-primary">{{ form.fieldType }}</span>

            <div @click="editElementProperties(form)" class="form-group">
              <label v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label>

              <component :is="form.fieldType"
                         :currentField="form"
                         class="form__field">
              </component>

              <!-- Helpblock -->
              <small class="form-text text-muted" v-model="form.helpBlockText" v-show="form.isHelpBlockVisible">
                  {{ form.helpBlockText }}
              </small>

            </div>
            <!-- Actions list -->
            <div class="form__actiongroup">
              <span class="form__actionitem--move">
                  <b-button variant="btn btn-warning btn-sm btn-circle"><font-awesome-icon :icon="['fas', 'arrows-alt']" /></b-button>
              </span>

               <div class="form__actionlist">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <b-button variant="btn btn-primary btn-sm"
                            @click="cloneElement(index, form)"
                            v-show="!form.isUnique"
                        >
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </b-button>
                        <b-button variant="btn btn-danger btn-sm"
                            @click="deleteElement(index)"
                        >
                            <font-awesome-icon :icon="['far', 'trash-alt']" />
                        </b-button>
                    </div>
               </div>
            </div>
          </div>
        </draggable>
      </div>



    </b-col>
</b-row>
<b-row>
    <b-col>
        <b-card class="mt-3">
            <h6 slot="header">Json Return</h6>
            <b-card-text class="wrapper-snippet">
                  <pre>{{ forms }}</pre>
            </b-card-text>
        </b-card>
    </b-col>
</b-row>
</div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";


  export default {
    name: 'Home',
    store: ['forms', 'activeForm', 'activeTabForFields', 'themingVars'],

    data() {
      return {
        sortElementOptions: FormBuilder.$data.sortElementOptions,

      };
    },

    computed: {
      cssProps() {
        // Return an object that will generate css properties key
        // to match with the themingVars
        //
        // Example output: { '--theme-primary-color': this.themingVars.primaryColor }
        var result = {},
            themingVars = this.themingVars;

        for (var v in themingVars) {
          if (themingVars.hasOwnProperty(v)) {
            var newV = "--theme-" + _.kebabCase(v),
                suffix = "";

            // Add px to the value if the default value contain 'px'
            if (_.includes(newV, 'size'))         suffix = "px"
            else if (_.includes(newV, 'margin'))  suffix = "px"
            else if (_.includes(newV, 'radius'))  suffix = "px"

            result [newV] = themingVars[v] + suffix;
          }
        }

        console.log("result", result)

        return result;
      }
    },

    mounted(){
      console.log("form ->", this.forms)
      console.log("activeform ->", this.activeForm)
    },

    components: FormBuilder.$options.components,

    methods: {
        deleteElement(index){
            FormBuilder.deleteElement(index)
        },

        cloneElement(index, form){
            FormBuilder.cloneElement(index, form)
        },

        editElementProperties(form){
            FormBuilder.editElementProperties(form)
        },
        // my
        changeTabClick(tab){
            vm.$store.activeTabForFields = tab;
        }

    }
  }
</script>

<style lang="scss" scoped>

.emptyState {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color:#000;
    padding: 20px;
}

  .dragArea {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 10px;
    z-index: 2;
    margin-top: 30px;
  }

    .form__selectedlabel {
      display: none;
      //background: lighten(blue, 20%);
      padding: 3px 5px;
      //color: white;
      font-size: 10px;
      position: absolute;
      top: -10px;
      left: 15px;
    }

    .form__actionitem--move {
      position: absolute;
      right: -10px;
      top: -10px;
      //transform: translateY(-50%);
      visibility: hidden;
      //background: #000;
      cursor: all-scroll;

      &:active, &:focus, &:hover {
        //border-color: lighten(black, 50%);
        //background: lighten(black, 50%);
      }
    }

    .form__actionlist {
      position: absolute;
      margin-top: -7px;
      visibility: hidden;
      z-index: 3;
      right: 0;
      //box-shadow: 4px 4px 0 0 lighten(black, 80%);
      //border-radius: 2px;
    }

    .form__group {
      margin-bottom: 25px;
      padding: 5px;
      border: 2px solid transparent;
      position: relative;

      &:hover {
        border-color: lighten(black, 80%);

        .form__actionitem--move {
          visibility: visible;
        }
      }

      &.is--active {
        border-color: lighten(black, 60%);
        background: lighten(black, 95%);

        .form__actionlist { visibility: visible; }
        .form__selectedlabel { display: inline-block; }
      }
    }


.wrapper-snippet{
    pre {
        color:rgb(39, 117, 235)
    }
}
</style>
