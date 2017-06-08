<template>
    <div class="content">
        <Row>
            <Col span="8">
                <div class="subj">
                    <h2>语文</h2>
                    <div class="score" @click="ping">{{totleScore}}</div>
                </div>
            </Col>
            <Col span="8" class="tag">
                <Button-group shape="circle">
                    <Button :type="tags.student" @click="tag(1)"> 学生 </Button>
                    <Button :type="tags.group" @click="tag(2)"> 小组 </Button>
                </Button-group>
            </Col>
            <Col span="8" class="buttom">
                <Button type="ghost" shape="circle" icon="pie-graph">
                    <span>班级报表 </span>
                </Button>
                <Dropdown class="select" trigger="click">
                    <Button type="ghost" shape="circle" icon="ios-gear">
                        <span>设置 </span>
                        <Icon type="ios-arrow-down"></Icon>
                    </Button>
                    <Dropdown-menu slot="list">
                        <Dropdown-item v-for="item in cityList" v-text="item.label"></Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </Col>
        </Row>
        <comment :modal="modal" @ping="allAddScore"></comment>
    </div>
</template>
<script>
    import Comment from '@/components/Comment'
    var data = {
        cityList: [
            {
                value: 'beijing',
                label: '北京市'
            },
            {
                value: 'shanghai',
                label: '上海市'
            }
        ],
        tags: {
            'student': 'primary',
            'group': 'ghost',
        },
        modal: {
            show: false,
            title: '',
            sid: 0
        }
    }
    
    export default {
        name: 'TitleContent',
        data() {
            return data
        },
        methods: {
            tag(id) {
                if (id == 1) {
                    this.tags.student = 'primary'
                    this.tags.group = 'ghost'
                } else {
                    this.tags.student = 'ghost'
                    this.tags.group = 'primary'
                }
                this.$Loading.finish();
            },
            allAddScore(info) {
                let score
                if(info.type == 1) {
                    score = info.score;
                } else {
                    score = '-'+info.score;
                }
                this.$store.commit('allAddScore',score)
            },
            ping() {
                this.modal = {
                    show: true,
                    title: '点评 全班同学',
                    sid: 0
                }
            }
        },
        components: {
            Comment
        },
        computed: {
            totleScore() {
                let num = 0;
                let lists = this.$store.state.lists;
                lists.forEach((item) => {
                    num += parseInt(item.score)
                })
                return num;
            }
        }
    }
</script>
<style scoped>
    .content {
        vertical-align: middle;
    }
    .tag, .buttom {
        text-align: center;
        vertical-align: middle;
        margin-top: 9px;
    }
    .select {
        width: 100px;
    }
    .subj {
        width: 120px;
        height: 50px;
        background: #3399ff;
        border-top-right-radius:50px;
        border-bottom-right-radius:50px;
        vertical-align: middle;
    }
    .subj h2 {
        display: block;
        float: left;
        line-height: 50px;
        color: #fff;
        padding: 0 0 0 16px;
    }
    .score {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: rgba(255,255,255,0.4);
        float: right;
        margin: 5px 6px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }
</style>