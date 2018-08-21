
<template>
    <div class="toast">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>



    export default {
        name: "GuluToast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:5
            },
            closeButton:{
                type:Object,
                default() {
                    return {
                        text: '关闭', callback: (toast) => {
                            toast:close()
                        }
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        created(){
            console.log(this.closeButton);
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                this.close()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback==='function'){
                    this.closeButton.callback(this) //this===toast实例
                }

            }

        }
    }


</script>

<style type="scss" scoped>
    $font-size:14x;
    $height:40px;
    $toast-bg:rgba(0,0,0,.75);
    .toast{
        border:1px solid red;
        position: fixed;
        top:0;
        left:50%;
        transform:translate(-50%);
        font-size:$font;
        line-height:1.8;
        height:$height;
        display:flex;
        background:$toast-bg;
        box-shadow:0px 0px 3px 0px rgba(0,0,0,.50);
        border-radius:4px;
    }
    .close{
        border:1px solid red;
        padding-left:16px;
        &::before{
            position:absolute;
            height:100px;
            border-left:1px solid red;
        }

    }
    .line{
        height:100px;
        border-left:1px solid #666;
        margin-left:16px;
    }
</style>