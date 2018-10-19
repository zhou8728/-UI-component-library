

<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{single}}{{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"GuluCollapseItem",
    data(){
        return {
            eventBus :new Vue()
        }
    },
    props: {
        title:{
            type: String,
            required:true
        },
        name:{
            type: String,
            reuqired: true
        }
    },
    data (){
        return {
            open :false,
            single: false
        }
    },
    inject: ['eventBus'],
    mounted(){
        this.eventBus && this.eventBus.$on('update:selected', (names)=>{
            console.log('names', names)
            if(names.indexOf(this.name) >= 0){
                // this.show()
                this.open = true
               
            } else {
                // if(this.single){
                   
                    this.open = false
                // }
            }
        })
    },
    methods:{
        toggle (){
            if(this.open){
                this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
            } else {
                this.open = true
                this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
            }
        },
        // close(){
        //     this.open = false
        // },
        // show(){
        //     this.open =true
        // }
    },
    
}
</script>

<style scoped lang="scss">
  $grey: #ddd;
    $border-radius :4px;
    .collapseItem{
    > .title{
            .collapse {
                border: 1px solid $grey;
                border-radius: $border-radius;
                margin-top: -1px;
                margin-left: -1px;
                margin-right: -1px;
                min-height:32px;
                display:flex;
                align-items:center;
                padding:0 8px;
            }
        }
        &:first-child {
            margin-bottom : -1px;
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>