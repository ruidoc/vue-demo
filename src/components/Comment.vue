<template>
    <div class="main">
        <Modal width="700" v-model="modal.show" class="hide_footer">
            <div slot="header" class="m_header">
                <span>{{modal.title}}</span>
            </div>
            <Tabs value="name1" style="padding: 0 20px" type="card">
                <Tab-pane label="表扬" name="name1">
                    <div class="behav" v-for="(list,index) in rlist">
                        <div class="behav_icon" @click="add(index)">
                            <img src="/static/img/bhav.png" width="100%" height="100%">
                            <span>{{list.score}}</span>
                        </div>
                        <h3 class="behav_name">{{list.name}}</h3>
                    </div>
                </Tab-pane>
                <Tab-pane label="待改进" name="name2">
                    <div class="behav" v-for="(list,index) in glist">
                        <div class="behav_icon" @click="minu(index)">
                            <img src="/static/img/bhav.png" width="100%" height="100%">
                            <span style="background: #ed3f14">{{list.score}}</span>
                        </div>
                        <h3 class="behav_name">{{list.name}}</h3>
                    </div>
                </Tab-pane>
            </Tabs>
        </Modal>
    </div>
</template>
<script>
    var data = {
        rlist: [
            {
                name: '积极提问',
                score: 2,
            },
            {
                name: '踊跃回答',
                score: 1,
            }

        ],
        glist: [
            {
                name: '操场抽烟',
                score: 2,
            },
            {
                name: '课间打架',
                score: 1,
            }
        ]
    }
    export default {
        name: 'Comment',
        data(){
            return data
        },
        props: ['modal'],
        methods: {
            add(i) {
                this.modal.show = false,
                this.$emit('ping',{
                    'sid': this.modal.sid,
                    'score': this.rlist[i].score,
                    'type': 1
                }),
                this.$Notice.success({
                    title: '打分成功！'
                })
            },
            minu(i) {
                this.modal.show = false,
                this.$emit('ping',{
                    'sid': this.modal.sid,
                    'score': this.glist[i].score,
                    'type': 2
                }),
                this.$Notice.success({
                    title: '打分成功！'
                })
            }
        }
    }
</script>
<style scoped>
    .m_header {
        font-size: 16px;
        color:#333;
    }
    .behav {
        text-align: center;
        width: 80px;
        float: left;
        margin: 16px 20px;
    }
    .behav_icon {
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;
        cursor: pointer;
    }
    .behav_icon span {
        position: absolute;
        color: #fff;
        border: 2px solid #fff;
        display: inline-block;
        width: 25px; height: 25px;
        border-radius: 25px;
        font-weight: bold;
        text-align: center;
        background: #5cadff;
        font-size: 16px;
        top: -3px; right: -2px;
    }
    .behav_name {
        font-size: 17px;
        margin-top: 10px;
    }
</style>