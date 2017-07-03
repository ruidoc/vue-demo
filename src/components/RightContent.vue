<template>
    <div class="r-top">
        <div class="right-top">
            <img src="/static/img/honer.jpg" width="100%" height="100%">
        </div>
        <Row v-for="(item,index) in sordList" :key="index" class-name="lists">
            <Col span="5" class="index">{{index+1}}</Col>
            <Col span="11">{{item.name}}</Col>
            <Col span="8" class="score"><span>{{item.score}}</span></Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name:'RightContent',
        methods: {
            toData() {
                let ul = this.$route.path
                if (ul == '/students') {
                    return this.$store.state.lists
                } else if(ul == '/groups') {
                    return this.$store.state.groups
                } 
            }
        },
        computed: {
            sordList() {
                let lists = this.toData()
                lists.sort((a,b)=> {
                    return b.score - a.score
                })
                return lists;
            }
        }
    }
</script>
<style scoped>
    .r-top{
        width: 100%;
    }
    .right-top{
        height: 60px;
    }
    .lists{
        line-height: 50px;
        border: 1px solid #f5f5f5;
        font-size: 16px;
    }
    .lists .score {
        text-align: center;
    }
    .lists .score span {
        display: inline-block;
        width: 50px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        background: #0099e7;
        border-radius: 20px;
        color: #fff;
    }
    .lists .index{
        text-align: center;
    }
</style>