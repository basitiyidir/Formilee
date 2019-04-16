<template>
<div>

    <Header title="Formilee"/>
        <b-container fluid>
    <router-view/>


</b-container>

</div>
</template>


<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";

import Header from "./components/Header.vue";


export default {
    name: "app",
    store: ["forms", "activeForm", "activeTabForFields", "themingVars"],
    data() {
        return {
            sortElementOptions: FormBuilder.$data.sortElementOptions
        };
    },

    //components: FormBuilder.$options.components
    components : {
        Header
    }
};
</script>

<style lang="scss">
@import 'assets/custom.scss';

</style>
