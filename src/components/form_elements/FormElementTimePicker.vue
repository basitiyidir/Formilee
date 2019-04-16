<template>
    <div>
        <b-input-group prepend="T" class="mb-2 mr-sm-2 mb-sm-0">
            <datetime type="time" v-model="date" input-class="form-control"></datetime>
        </b-input-group>
    </div>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
    name: "TimePicker",
    data() {
        return {
            time: ""
        };
    },
    components: {
        datetime: Datetime
    }
};
</script>
