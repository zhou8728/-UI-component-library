<template>
    <div class="tabs-header">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabs"
    }
</script>

<style  scoped>
    .tabs-header{

    }
</style>