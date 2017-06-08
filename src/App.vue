<style>
    html, body {
        width: 100%;
        height: 100%;
    }
    .layout{
        height: 100%;
        position: relative;
    }
    .layout_left {
        width: 80px;
        position: absolute;
        left: 0; bottom: 0; top: 0;
        background: #2d8cf0;
    }
    .layout_content {
        position: absolute;
        left: 80px; bottom: 0; top: 0; right: 220px;
        background: #edf0f3;
    }
    .layout_right {
        width: 220px;
        position: absolute;
        right: 0; bottom: 0; top: 0;
        border-left: 1px solid #e9eaec;
    }

</style>
<template>
    <div class="layout">
        <div class="layout_left">
            
        </div>
        <div class="layout_content">
            <main-content></main-content>
        </div>
        <div class="layout_right">
            
        </div>
    </div>
</template>
<script>
    import leftMenu from './components/leftMenu'
    import MainContent from './components/MainContent'
    export default {
        data() {
            return {
                'value4':'请输入...'
            }
        },
        components:{
            leftMenu,
            MainContent
        }
    }
</script>