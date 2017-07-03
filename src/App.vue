<style>
    html, body {
        width: 100%;
        height: 100%;
        font-weight: bold;
        overflow: hidden;
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
        transition: all 0.5s;
        position: absolute;
        left: 80px; bottom: 0; top: 0;
        background: #edf0f3;
    }
    .layout_right {
        width: 220px;
        transition: all 0.5s;
        position: absolute;
        right: 0; bottom: 0; top: 0;
        border-left: 1px solid #e9eaec;
    }
    .layout_right .lay_ban {
        transition: all 0.5s;
        position: absolute;
        left: -20px; top: 40%;
        width: 70px; height: 70px;
        background: #fff;
        border-radius: 70px;
        line-height: 82px;
        padding-left: 10px;
        cursor: pointer;
    }
    .layout_rshow {
        transition: all 0.5s;
        position: absolute;
        top: 30px;
    }
</style>
<template>
    <div class="layout">
        <div class="layout_left">
            <left-menu></left-menu>
        </div>
        <div class="layout_content" :style="{ right: width.Clayout_right+'px'}">
            <main-content></main-content>
        </div>
        <div class="layout_right" :style="{ right: width.Rlayout_right+'px'}">
            <div class="lay_ban" @click="hide" :style="{ left: width.RlayoutBan_left+'px'}">
                <Icon type="ios-arrow-forward" size="28" color="#ccc"></Icon>
            </div>
            <right-content></right-content>
        </div>
        <div class="layout_rshow" :style="{ right: width.LayoutShow_right+'px'}" @click="show">
            <Button type="primary" shape="circle" icon="log-in"></Button>
        </div>
    </div>
</template>
<script>
    import leftMenu from './components/leftMenu'
    import MainContent from './components/MainContent'
    import RightContent from './components/RightContent'

    let data = {
        width: {
            Clayout_right: 220,
            Rlayout_right: 0,
            LayoutShow_right: -50,
            RlayoutBan_left: -17
        }
    }

    export default {
        data() {
            return data
        },
        components: {
            leftMenu,
            MainContent,
            RightContent
        },
        methods: {
            hide() {
                this.width = {
                    Clayout_right: 1,
                    Rlayout_right: -220,
                    LayoutShow_right: 40,
                    RlayoutBan_left: 25
                }
            },
            show() {
                this.width = {
                    Clayout_right: 220,
                    Rlayout_right: 0,
                    LayoutShow_right: -50,
                    RlayoutBan_left: -17
                }
            },
        }
    }
</script>