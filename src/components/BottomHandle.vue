<template>
    <div class="main">
        <Row class="smain">
            <Col span="8">
                <Button type="success" icon="ios-plus-empty" shape="circle" style="margin-left: 50px">添加学生</Button>
            </Col>
            <Col span="16">
                <div class="handle">
                    <div class="handle-tiem">
                        <img src="/static/img/kaoqin.png">
                        <span>考勤</span>
                    </div>
                    <div class="handle-tiem">
                        <img src="/static/img/quanxuan.png">
                        <span>多选</span>
                    </div>
                    <div class="handle-tiem">
                        <img src="/static/img/suiji.png">
                        <span>随机</span>
                    </div>
                    <div class="handle-tiem" @click="reset">
                        <img src="/static/img/chongzhi.png">
                        <span>重记分数</span>
                    </div>
                    <div class="handle-tiem">
                        <img src="/static/img/jishi.png">
                        <span>计时器</span>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    var data = {}
    export default {
        name: 'BottomHandle',
        data(){
            return data
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
            }
        }
    }
</script>
<style>
    .handle {
        float: right;
        height: inherit;
        margin-right: 20px;
    }
    .smain {
        line-height: 70px;
    }
    .handle-tiem {
        /*width: 120px;*/
        cursor: pointer;
        float: left;
        text-align: center;
        margin-right: 40px;
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

</style>