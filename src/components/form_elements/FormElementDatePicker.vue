<template>
    <div>
        <b-input-group prepend="D" class="mb-2 mr-sm-2 mb-sm-0">
            <datetime v-model="date" input-class="form-control"></datetime>
        </b-input-group>
    </div>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
    name: "DatePicker",
    data() {
        return {
            date: ""
        };
    },
    components: {
        datetime: Datetime
    }


};
</script>


<style lang="css" scoped>
@import '~vue-datetime/dist/vue-datetime.css';




</style>
