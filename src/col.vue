<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        // name:'GuluCol',
        props:{
            span:Number
        }
    }

</script>

<style lang="scss" scoped>
    .col{
        height:100px;
        background: grey;
        width:50%;
        border:1px solid red;

        $class-prefix:col-;
        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class-prefix}#{$n} {
                width:($n/24)*100%;

            }
        }
    }
</style>
