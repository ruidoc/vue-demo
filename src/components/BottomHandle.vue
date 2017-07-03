<template>
    <div class="main">
        <Row class="smain">
            <Col span="24">
                <!-- 主界面 -->
                <div class="handle" v-show="status.main">
                    <div class="handle-tiem">
                        <img src="/static/img/kaoqin.png">
                        <span>考勤</span>
                    </div>
                    <div class="handle-tiem" @click="checked()">
                        <img src="/static/img/quanxuan.png">
                        <span>多选</span>
                    </div>
                    <div class="handle-tiem" @click="callAction()">
                        <img src="/static/img/suiji.png">
                        <span>点名</span>
                    </div>
                    <div class="handle-tiem" @click="reset">
                        <img src="/static/img/chongzhi.png">
                        <span>重记分数</span>
                    </div>
                    <div class="handle-tiem" @click="clockShowAction()">
                        <img src="/static/img/jishi.png">
                        <span>计时器</span>
                    </div>
                </div>

                <!-- 多选界面 -->
                <div v-show="status.checked" class="dv_check">
                    <a href="javascript:;" @click="allcheck()">
                       <div class="dv_check_allchk" :class="{dv_check_allchk_active: isAllChk}">
                            <Icon type="checkmark" size="15"></Icon>
                        </div>
                        <h4 class="dv_check_h4">全部选择</h4>
                    </a>
                    <Button type="primary" shape="circle" class="dv_check_but" @click="ping()"> 点评 {{pingData.length}}</Button>
                    <Button shape="circle" @click="uncheck()" class="dv_check_but"> 取 消 </Button>
                </div>


            </Col>
        </Row>

        <comment :modal="modal" @ping="rantocal"></comment>

        <!-- 随机 -->
        <Modal v-model="callModal.main" width="400">
            <p slot="header" style="text-align:center">
                <span style="line-height: 23px;font-size: 15px">随机点名</span>
            </p>
            <div style="text-align:center; padding: 12px 0">
                <img :src="range.img" width="150">
                <h2 style="font-size: 25px;margin-top: 7px">{{range.name}}</h2>
            </div>
            <div slot="footer" align="center">
                <Button type="ghost" size="small" @click="callAction()">{{ callModal.isstart ? '立刻停止' : '再点一次'}}</Button>
                <Button type="primary" size="small" :disabled="callModal.isstart">发送点评</Button>
            </div>
        </Modal>

        <clock :clockShow="clockShowt"></clock>

    </div>
</template>
<script>

    import Clock from '@/components/Clock'
    import Comment from '@/components/Comment'

    // let data = {

    export default {
        name: 'BottomHandle',
        data(){
            return {
                clockShowt: {
                    show: false
                },
                modal: {
                    show: false,
                    title: '',
                    sid: 0
                },
                callModal: {
                    main:false,
                    i: 0,
                    intval: null,
                    isstart: false
                }
            }
        },
        components: {
            Comment,
            Clock
        },
        methods: {
            reset() {
                this.$Modal.confirm({
                    title: '警告！',
                    content: '确定重置分数吗？',
                    onOk: () => {
                        this.$store.commit('resetScore');
                        this.$Message.info('重置成功');
                    }
                });
            },
            checked() {
                this.$store.commit('changeStatus',{
                    'checked': true
                });
            },
            uncheck() {
                this.$store.commit('changeStatus',{
                    'checked': false
                });
                this.pingData.splice(0)
            },
            allcheck() {
                let role = this.$store.state.status.role;
                if (role == 'students') {
                    this.$store.commit('allCheck','lists');
                } else if(role == 'groups') {
                    this.$store.commit('allCheck','groups');
                }
            },
            ping() {
                if (this.pingData.length == 0) {
                    this.$Message.warning('请选择要点评的学生或小组！');
                    return false
                }
                this.modal = {
                    show: true,
                    sid: 2,
                    title: '点评 达芙妮'
                }
            },
            rantocal() {
                
            },
            callAction() {
                if (this.callModal.isstart) {
                    this.callModal.isstart = false;
                    clearInterval(this.callModal.intval);
                    return false
                }

                this.callModal.main = true;
                this.callModal.isstart = true;
                
                this.callModal.intval = setInterval(()=> {
                    this.callModal.i = parseInt(5*Math.random());
                },120)

            },
            stopCallAction() {
                this.callModal.isstart = false;
                clearInterval(this.callModal.intval)
            },
            clockShowAction() {
                this.clockShowt.show = true
            }
        },
        computed: {
            status() {
                let statu = this.$store.state.status.checked
                if (statu) {
                    return {
                        main: false,
                        checked: true
                    }
                } else {
                    return {
                        main: true,
                        checked: false
                    }
                }
            },
            pingData() {
                return this.$store.state.pingData
            },
            isAllChk() {
                let length;
                let role = this.$store.state.status.role;
                if (role == 'students') {
                    length = this.$store.state.lists.length
                } else if(role == 'groups') {
                    length = this.$store.state.groups.length
                }
                return this.pingData.length == length
            },
            selectItem() {
                return this.$store.state.lists
            },
            range() {
                let i = this.callModal.i;
                return this.selectItem[i]
            }
        }
    }
</script>
<style>
    .handle {
        height: inherit;
        margin: 0 auto;
        text-align: center;
    }
    .smain {
        line-height: 70px;
    }
    .handle-tiem {
        cursor: pointer;
        display: inline-block;
        text-align: center;
        padding: 0 20px;
    }
    .handle-tiem img {
        display: inline;
        vertical-align: middle;
        margin-right: 3px;
        width: 28px;
    }
    .handle-tiem span {
        font-weight: bold;
        font-size: 18px;
        vertical-align: middle;
    }
    .dv_check {
        text-align: center;
        height: 100%;
    }
    .dv_check .dv_check_but {
        font-size: 15px;
        margin-left: 15px;
    }
    .dv_check .dv_check_allchk {
        display: inline-block;
        vertical-align: middle;
        width: 27px;
        height: 27px;
        border-radius: 27px;
        line-height: 30px;
        background: #e4e5e7;
        color: #ccc;
        cursor: pointer;
    }
    .dv_check .dv_check_allchk_active {
        background: #0099e7;
        color: #fff;
        border-color: #0099e7;
    }
    .dv_check_h4 {
        font-size: 15px;
        display: inline-block;
        vertical-align: middle;
        color: #444;
    }
</style>