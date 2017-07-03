<template>
    <div class="main">
        <div class="title">
            <title-content></title-content>
        </div>
        
        <div class="students">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        
        <div class="footer">
            <bottom-handle></bottom-handle>
        </div>
    </div>
</template>
<script>
    import TitleContent from '@/components/TitleContent'
    import BottomHandle from '@/components/BottomHandle'

    var data = {}
    export default {
        name: 'MainContent',
        data() {
            return data
        },
        components: {
            TitleContent,
            BottomHandle
        },
        watch: {
            $route() {
                this.$store.commit('init');
                let ul = this.$route.path
                if (ul == '/students') {
                    this.$store.commit('changeStatus',{
                        'role': 'students'
                    });
                } else if(ul == '/groups') {
                    this.$store.commit('changeStatus',{
                        'role': 'groups'
                    });
                } 
            }
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
    .students {
        position: absolute;
        top: 80px;
        bottom: 70px;
        width: 100%;
    }
</style>