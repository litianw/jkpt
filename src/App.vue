<template>
    <div id="app">
        <MainHeader></MainHeader>

        <router-view></router-view>
    </div>
</template>

<script>
    import {getLoginUserAllInfo} from "./utils/api"
    import MainHeader from "./components/MainHaeder"

    export default {
        components: {
            MainHeader
        },

        methods: {
            toDash() {
                this.$router.push('/main/dashbroad')
            },
            toUser() {
                this.$router.push('/main/user')
            },
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
        width: 100%;

        height: 100%;
        background-color: #f7f8fa;

        font-family: 'Microsoft YaHei', Arial, sans-serif;

        -webkit-font-smoothing: antialiased;

        -moz-osx-font-smoothing: grayscale;
    }

    #app {


    }
</style>
