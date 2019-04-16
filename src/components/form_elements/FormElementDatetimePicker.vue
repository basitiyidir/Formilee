<template>
    <div>
        <b-input-group prepend="DT" class="mb-2 mr-sm-2 mb-sm-0">
            <datetime type="datetime" v-model="date" input-class="form-control"></datetime>
        </b-input-group>
    </div>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
    name: "DatetimePicker",
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
