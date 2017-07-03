<template>
    <Modal v-model="clockShow.show" width="400" :mask-closable="false">
        <p slot="header" align="center">
            <span class="clock_title">计时器</span>
        </p>
        <div class="clock_body">
            <Button-group shape="circle">
                <Button type="primary" size="small" style="width: 75px">秒 表</Button>
                <Button type="ghost" size="small" style="width: 75px">倒计时</Button>
            </Button-group>
            <div class="time_font">
                <span>{{dftime}}</span>
            </div>
            
            <Time-picker type="time" :value="dftime" :open="timeShow" format="HH : mm : ss" @on-change="timeChange" :clearable="isclear" class="dtime" placement="bottom" @on-ok="timeShowAction" >
                <a href="javascript:void(0)" @click.stop="timeShowAction">
                    <Icon type="clock" size="18" color="#666"></Icon>
                </a>
            </Time-picker>

        </div>
        <div slot="footer" align="center">
            <Button type="primary" @click="">{{ isstart ? '暂停' : '开始'}}</Button>
            <Button type="ghost" :disabled="isstart">重新开始</Button>
        </div>
    </Modal>
</template>

<script>
    let data = {
        isstart: false,
        dftime: '00 : 05 : 00',
        timeShow: false,
        isclear: false
    }
    export default {
        name: 'Clock',
        data(){
            return data
        },
        props: ['clockShow'],
        methods: {
            timeChange(time) {
                this.dftime = time
            },
            timeShowAction() {
                this.timeShow = !this.timeShow
            },
            timeClear() {
                this.dftime = '00 : 05 : 00';
            },
            hideTime() {
                this.timeShow = false
            }
        }
    }
</script>
<style scoped>
    .clock_title {
        line-height: 24px;
        font-size: 15px
    }
    .clock_body {
        text-align:center; 
        padding: 8px 0;
        position: relative
    }
    .time_font {
        font-size: 60px; 
        font-weight: normal;
        padding-top: 20px;
        font-family: '微软雅黑'
    }
</style>