<template>
    <div class="main">
        <div class="title">
            <title-content></title-content>
        </div>
        <div class="students">
            <student-list></student-list>
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>
<script>
    import TitleContent from '@/components/TitleContent'
    import StudentList from '@/components/StudentList'

    var data = {}
    export default {
        name: 'MainContent',
        data() {
            return data
        },
        components: {
            TitleContent,
            StudentList
        }
    }
</script>
<style scoped>
    .main {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .title {
        height: 60px;
        margin-top: 20px;
    }
    .footer {
        height: 70px;
        background: #fff;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>