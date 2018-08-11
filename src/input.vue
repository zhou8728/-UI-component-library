<template>
    <div class="wrapper" :class="{error:error}">
        <input :value="value" :disabled="disabled" :readonly="readonly"  type="text"
        @change="$emit('change')"
        >
        <template v-if="error">
            <icon  name="error" class="icon-error"></icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        // name: "input.vue"
        components:{Icon},
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String,
                // default:true
            }

        }
    }
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,.5);
    $red:#F1453D;
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        align-items:center;
        > :not(:last-child){margin-right:.5em;}

        > input{
            height:32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &.focus{
                box-shadow: inset 0 1px 3px  $box-shadow-color;
                outline: none;
            }
            &[disnable],&[readonly]{
                border-color:#aaa;
                color:#aaa;
                cursor:not-allowed;
            }

        }
        &.error{
            >input{
                border-color:$red;
            }
        }
        .icon-error{
            fill:$red;
        }
        .errorMessage{
            color:red;
        }
    }

</style>