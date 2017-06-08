<template>
<div>
    <div class="content">
        <div class="wrap" v-for="(list,index) in lists">
            <div class="bg">
                <div class="student" @click="ping(index)">
                    <img src="/static/img/icon2.png" width="90%">
                    <span>{{list.score}}</span>
                </div>
            </div>
            <h2 v-text="list.name"></h2>
        </div>
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
        lists: [
            {
                name: '杨成功',
                score: 34
            },
            {
                name: '王小贱',
                score: 37
            },
            {
                name: '阿葱',
                score: 65
            },
            {
                name: '杨成功',
                score: 43
            },
            {
                name: '王小贱',
                score: 88
            },
            {
                name: '阿葱',
                score: 55
            },
            {
                name: '杨成功',
                score: 27
            },
            {
                name: '王小贱',
                score: 16
            },
            {
                name: '阿葱',
                score: 24
            },
            {
                name: '杨成功',
                score: 34
            },
            {
                name: '王小贱',
                score: 37
            },
            {
                name: '阿葱',
                score: 65
            },
            {
                name: '杨成功',
                score: 43
            },
            {
                name: '王小贱',
                score: 88
            },
            {
                name: '阿葱',
                score: 55
            },
            {
                name: '杨成功',
                score: 27
            },
            {
                name: '王小贱',
                score: 16
            },
            {
                name: '阿葱',
                score: 24
            },
        ]
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
                this.$store.commit('increment',this.totalscore);
            }
        },
        components: {
            Comment
        },
        computed: {
            totalscore() {
                let num = 0;
                this.lists.forEach((item) => {
                    num += item.score
                })
                return num;
            }
        },
        mounted() {
            this.$store.commit('increment',this.totalscore);
        }
    }
</script>
<style scoped>
    .content {
        padding: 10px 30px;
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
</style>
