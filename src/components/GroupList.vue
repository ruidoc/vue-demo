<template>
    <div class="content">
        <div class="wrap" v-for="(list,index) in lists">
            <div class="bg">
                <div class="student" @click="ping(index)" v-show="!checked">
                    <img src="/static/img/icon2.png" width="90%">
                    <span>{{list.score}}</span> 
                </div>
                <div class="student newst" @click="check(list.id)" v-show="checked">
                    <img src="/static/img/icon2.png" width="90%">
                    <div class="newst_check" :class="{newst_check_active: pingData.indexOf(list.id) >= 0}">
                        <Icon type="checkmark" size="16"></Icon>
                    </div>
                </div>
            </div>
            <h2 v-text="list.name"></h2>
        </div>
        <comment :modal="modal" @ping="rantocal"></comment>
    </div>
</template>
<script>
    import Comment from '@/components/Comment'
    var data = {
        modal: {
            show: false,
            title: '',
            sid: 0
        },
    }
    export default {
        name: 'StudentList',
        data() {
            return data
        },
        methods: {
            ping(i) {
                this.modal = {
                    show: true,
                    sid: i,
                    title: '点评 '+this.lists[i].name
                }
            },
            rantocal(data) {
                if(data.type == 1) {
                    this.lists[data.sid].score += data.score
                } else {
                    this.lists[data.sid].score -= data.score
                }
            },
            check(id) {
                let i = this.pingData.indexOf(id);
                if (i >= 0) {
                    this.pingData.splice(i,1)
                } else {
                    this.pingData.push(id)
                }
            }
        },
        components: {
            Comment
        },
        computed: {
            lists() {
                return this.$store.state.groups
            },
            checked() {
                return this.$store.state.status.checked
            },
            pingData() {
                return this.$store.state.pingData
            }
        }
    }
</script>
<style scoped>
    .content {
        padding: 10px 30px;
        position: absolute;
        top: 0; bottom: 0;
        left: 0; right: 0;
    }
    .wrap {
        width: 100px;
        text-align: center;
        float: left;
        margin: 15px 20px;
    }
    .wrap h2 {
        margin-top: 15px;
    }
    .bg {
        position: relative;
        width: 100px; height: 95px;
        border-radius: 100px;
        background: #d7dde4;
        text-align: center;
    }
    .student {
        background: #fff;
        width: 100px; height: 95px;
        border-radius: 100px;
        position: absolute;
        top: 5px; left: 0;
        text-align: center;
        cursor: pointer;
    }
    .student span {
        position: relative;
        top: -15px;
        padding: 2px 9px;
        border-radius: 15px;
        background: #ccebfa;
        color: #44b4ee;
        border: 2px solid #fff;
        font-weight: bold;
        font-size: 15px;
    }
    .newst img {
        opacity: 0.7
    }
    .newst_check {
        position: absolute;
        bottom: 0px;
        right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background: #e4e5e7;
        color: #fff;
        border: 2px solid #fff;
        line-height: 30px;
    }
    .newst_check_active {
        background: #44b4ee;
    }
</style>
