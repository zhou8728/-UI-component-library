<template>
    <div class="x">
        {{sourceItem.name}}
        <cascader-item
        v-for="item in sourceItem.children"  
        v-if="sourceItem.children"
        :sourceItem="item"
        >
        </cascader-item>
    </div>
</template>

<script>
const cascaderItem = {
    name: "GuluCascaderItem",
    components: {
        cascaderItem: cascaderItem
    },
    props:{
        sourceItem:{
            type: Object
        }
    }
}
export default cascaderItem
    

</script>

<style scoped lang="scss">
    .x{
        border: 1px solid red;
        margin:10px;
    }
</style>
