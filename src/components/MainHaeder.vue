<template>
    <div>
        <el-header style="padding: 0px">
            <div id="top_nav-body" class="x-panel-body-default">
                <span id="top_nav-outerCt">
                  <div id="top_nav-innerCt">
                    <div id="top_nav_div">

                        <div id="x-logo">
                        <img width="61" alt="" height="35" style="vertical-align:middle;"
                             src="../assets/logo.png">
                        <span style="margin-left: 5px;font-family: 微软雅黑;font-size: 18px;color: #428dc8;">
                          12345工单监督
                        </span>
<!--                        <img alt="" style="vertical-align:middle;" src="../assets/tower.png">-->
                      </div>

<!--                        <div style="margin-left:40%;float:left;height:100%;line-height: 46px;padding-right: 10px;font-size: 24px">-->
<!--                            {{$store.getters.getTitle}}-->
<!--                        </div>-->

                        <div style="width:350px;height:100%;float:right;line-height: 46px;padding-right: 10px">
<!--                         <span class="loginclick icon close" style="float: right;cursor: pointer"-->
<!--                               @click="logout"></span>-->
<!--                         <div style="float: right;width: 100px;">-->
<!--                           <span class="user icon"></span>-->
<!--                           <span style="margin-left:5px">{{$store.getters.getName}}</span>-->
<!--                             <el-divider direction="vertical" style="height: 14px; background-color: #7cb305"/>-->
<!--                         </div>-->

                      </div>
                    </div>
                  </div>
                </span>

            </div>
        </el-header>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            logout() {
                location.href = `/${$store.getters.getContext}/logout`;
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    #top_nav {
        right: auto;
        left: 0px;
        top: 0px;
        margin: 0px;
        width: 100%;
        background: #F5F5F5;
        height: 50px !important;
    }

    #top_nav #top_nav-body {

        background-image: url(../assets/bg1.png);
        background-size: 100% 100%;
        padding: 0px;
        height: 60px;
        width: 100%;
        left: 0px;
        top: 0px;
    }

    .x-panel-body-default {
        border-top: 0px solid #ffffff !important;
        border: none !important;
        color: black;
        font-size: 12px;
    }

    #top_nav-outerCt {
        display: table;
        width: 100%;
        table-layout: fixed;
        height: 100%;
        font-family: '微软雅黑';
        font-size: 12px;
    }

    #top_nav-innerCt {
        display: table-cell;
        height: 100%;
        vertical-align: top;
    }

    #top_nav_div {
        width: 100%;
        height: 49px;
        border-bottom: 3px solid #017d7b;
        background-image: url(../assets/bg1.png);
        background-size: 100% 400%;
        border-image: linear-gradient(90deg, #65c7b7 0, #53bfea 50%, #a4ded5 100%) 4;
    }

    #x-logo {
        /*width: 350px;*/
        height: 100%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    #top_nav_div .close {
        background-position: 0px -116px;
        margin-top: -8px;
        margin-left: -10px;

    }

    #top_nav_div .icon {
        margin-left: 10px;
        float: left;
        margin-top: 11px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        background-repeat: no-repeat;
        background-image: url(../assets/login.png);
    }

    #top_nav_div .user {
        background-position: 0px -68px;
    }

    #top_nav_div .icon {
        margin-left: 10px;
        float: left;
        width: 24px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        background-repeat: no-repeat;
        background-image: url(../assets/login.png);
    }

    #left_nav {
        width: 180px;
        right: auto;
        left: 0px;
        margin: 0px;
        height: 1021px;
        top: 5px !important;
        border-color: #d0d0d0;
        padding: 0;
    }

</style>
