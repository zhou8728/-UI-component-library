<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>            
        </div>
        <div class="popover">
            <div v-for="item in source">
               <cascader-item :sourceItem="item"></cascader-item>
            </div>
            
        </div>
    </div>
</template>

<script>
import CascaderItem from  './cascader-item'
export default {
    name:"GuluCascader",
    components:{
        CascaderItem: CascaderItem
    },
    props: {
        sourceItem: {
            type: Array
        }
    }
}
</script>

<style scoped lang="scss">
@import "var"
   
</style>
