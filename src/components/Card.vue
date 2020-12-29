<template>
    <v-card elevation="4" v-bind="rest">
        <slot name="content"/>
    </v-card>
</template>
<script>
export default {
    name : "Card",
    props: {
        rest : {
            type : Object,
            default : null
        }
    }
}
</script>