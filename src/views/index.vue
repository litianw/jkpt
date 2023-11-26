<template>
    <div id="index-div">
        <vue-particles
                class="par-box"
                color="#fff"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#409EFF"
                :linesWidth="1"
                :lineLinked="false"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="false "
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        ></vue-particles>
        <div id="context-div">
            <el-tabs type="border-card" style="border: none;height: 100%;background-color: #f0f2f5;"
                     v-model="menuName" @tab-click="tabClick">

                <el-tab-pane class="content-pane" name="1">
                    <span slot="label"><i class="iconfont icon-zhuye"></i> 主页</span>
                    <Maincontent @changeMenu="changeMenu"/>
                </el-tab-pane>

                <el-tab-pane class="content-pane" name="2">
                    <span slot="label"><i class="iconfont icon-fanfugaojing"></i> 反复投诉</span>
                    <cfts/>
                </el-tab-pane>

                <el-tab-pane class="content-pane" name="3">
                    <span slot="label"><i class="iconfont icon-zongrenshu"></i> 多人多次投诉</span>
                    <drdcts/>
                </el-tab-pane>

                <el-tab-pane class="content-pane" name="5">
                    <span slot="label"><i class="iconfont icon-minganci"></i> 敏感词筛查</span>
                    <mgcsc/>
                </el-tab-pane>

                <el-tab-pane class="content-pane" name="7">
                    <span slot="label"><i class="iconfont icon-weijichufen"></i> 违纪分析</span>
                    <wjfx/>
                </el-tab-pane>

<!--                <el-tab-pane class="content-pane" name="4">-->
<!--                    <span slot="label"><i class="el-icon-loading"></i> 推诿工单</span>-->
<!--                    <tw/>-->
<!--                </el-tab-pane>-->

                <el-tab-pane class="content-pane" name="6">
                    <span slot="label"><i class="iconfont icon-face-grin-stars"></i> 满意度统计</span>
                    <mydtj/>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>

</template>

<script>
    import Maincontent from '~/components/Iframe'
    import cfts from '~/components/Cfts'
    import drdcts from '~/components/Drdcts'
    import tw from '~/components/trgd'
    import mgcsc from '~/components/mgcsc'
    import mydtj from '~/components/mydtj'
    import wjfx from '~/components/wjfx'

    export default {
        components: {
            Maincontent,
            cfts,
            drdcts,
            tw,
            mgcsc,
            mydtj,
            wjfx
        },
        name: "index",
        data() {
            return {
                menuName:'1'
            }
        },
        mounted() {


        },
        methods: {


            changeMenu(active){
                this.menuName = active;
            },
            tabClick(tab){
                console.log(tab);
            }
        }
    }
</script>

<style scoped>
    #index-div {
        background-color: #56bc8a;
        height: calc(100% - 65px);

    }

    #context-div {
        height: 100%;
        background-color: #f0f2f5;
    }

    .content-pane {
        height: 100%;
    }

    .el-tabs__content {
        padding: 5px 0px !important;
        height: calc(100% - 49px) !important;
    }

    .section-title {
        font-size: 32px;
        font-weight: 700;
    }

    .section-description {
        font-size: 16px;
        margin-bottom: 100px;
    }

    .feature-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #fff;
        margin: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 10px;
        font-size: 22px;
        color: #2d8cf0;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
        box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    }

    h2 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
    }

    #particles-js {

        width: 100% !important;

        height: calc(100% - 65px);

        position: absolute;

    }

    .particles-js-canvas-el {

        width: 100% !important;

        height: 100% !important;

        position: fixed;

        top: 0;

        left: 0;

    }
</style>
