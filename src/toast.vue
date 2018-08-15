
<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>



    export default {
        name: "GuluToast"
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
</style>