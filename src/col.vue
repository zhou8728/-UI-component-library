<template>
    <div class="col" :class="colClass"
       :style="colStyle"
    >
        <div style="border:1px solid green;height:100px;">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    let validator =(value)=>{
        let valid = true
        let keys=Object.keys(value)
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid=false
            }
        })
        return valid
    }
    export default {
        // name:'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number,String]
            },
            // phone:{
            //   type:[Object],
            //     validator
            //
            // },
            iPad:{
                type:Object,
                validator
            },
            narrowPc:{
                type:Object,
                validator
            },
            pc:{
                type:Object,
                validator
            },
            widePc:{
                type:Object,
                validator
            }

        },
        data(){
            return {
                gutter:0,

            }
        },
        computed:{
            colStyle(){
                return{
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }
            },
            colClass(){

                let {span,offset,phone, iPad,narrowPc,pc,widePc} =this

                let phoneClass=[]
                if(phone){
                    phoneClass=[]
                }


                return [
                    span &&`col-${span}`,
                    offset && `offset-${offset}`,
                    // ...(phone && [`col-phone-${phone.span}`]),
                    ...(iPad ?  [`col-phone-${iPad.span}`]:[]),
                    ...(narrowPc ?[`{col-phone-${narrowPc.span}`]:[]),
                    ...(pc ? [`col-phone-${pc.span}`]:[]),
                    ...(widePc ? [`col-phone-${widePc.span}`]:[])
                ]
            }

        },

        created(){
            console.log(this.$children);
        },
        mounted(){
            console.log(this.$children);
        }
    }

</script>

<style lang="scss" scoped>
    .col{
        /*height:100px;*/
        /*background: grey;*/
        width:50%;
        /*border:1px solid red;*/
        /*padding:0 10px;*/
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width:($n/24)*100%;

            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left:($n/24)*100%;

            }
        }

        @media(min-width:577px){
            $class-prefix:col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n/24)*100%;

                }
            }
            $class-prefix:offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n/24)*100%;

                }
            }
        }
        @media(min-width:769px){
            $class-prefix:col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n/24)*100%;

                }
            }
            $class-prefix:offset--narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n/24)*100%;

                }
            }
        }
        @media(min-width:993px){
            $class-prefix:col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n/24)*100%;

                }
            }
            $class-prefix:offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n/24)*100%;

                }
            }
        }
        @media(min-width:1201px){
            $class-prefix:col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width:($n/24)*100%;

                }
            }
            $class-prefix:offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left:($n/24)*100%;

                }
            }
        }
    }


</style>
