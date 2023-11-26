<template>
    <div id="dashbroad-div" style="overflow: auto">
        <el-row :gutter="40" class="panel-group" style="margin-left: 0px;margin-right: 0px">
            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('1')">
                    <div class="card-panel-icon-wrapper icon-people">
                        <i class="peoples iconfont icon-gongdan-gongdantongjicopy" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            工单总计
                        </div>
                        <count-to :start-val="0" :end-val="gdzj" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>
            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('2')">
                    <div class="card-panel-icon-wrapper icon-message">
                        <i class="peoples iconfont icon-fanfugaojing" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            反复投诉
                        </div>
                        <count-to :start-val="0" :end-val="ffts" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>

            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('3')">
                    <div class="card-panel-icon-wrapper icon-drdcts">
                        <i class="peoples iconfont icon-zongrenshu" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            多人多次投诉
                        </div>
                        <count-to :start-val="0" :end-val="drdcts" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>
            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('4')">
                    <div class="card-panel-icon-wrapper icon-tw">
                        <i class="peoples iconfont icon-weijichufen" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            违规违纪
                        </div>
                        <count-to :start-val="0" :end-val="wgwj" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>

            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('5')">
                    <div class="card-panel-icon-wrapper icon-money">
                        <i class="peoples iconfont icon-minganshujufenjiguanli" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            敏感词筛查
                        </div>
                        <count-to :start-val="0" :end-val="mgcsc" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>

            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel" @click="click('6')">
                    <div class="card-panel-icon-wrapper icon-shopping">
                        <i class="peoples iconfont icon-review" style="font-size: 50px;"/>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            满意率
                        </div>
                        <count-to :start-val="0" :end-val="myd" :duration="3000" class="card-panel-num"/>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="40" style="margin-left: 0px;margin-right: 0px" class="panel-group">
            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel-pie">
                    <PieChart :pieData="pieData.drdcts"></PieChart>
                </div>

            </el-col>
            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel-pie">
                    <PieChart :pieData="pieData.mgcsc"></PieChart>
                </div>

            </el-col>

            <el-col :lg="8" class="card-panel-col">
                <div class="card-panel-pie">
                    <PieChart :pieData="pieData.fsts"></PieChart>
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CountTo from 'vue-count-to'
    import PieChart from '~/components/PieChart'
    import {getTjsj} from '~/utils/api'

    export default {
        name: "Maincontent",
        props: ['active'],
        components: {
            CountTo,
            PieChart,
        },
        data() {
            return {
                lineChartData: {items: [], datas: []},
                gdzj: 0,
                ffts: 0,
                drdcts: 0,
                wgwj: 0,
                mgcsc: 0,
                myd: 0,
                pieData: {fsts: {items: [], datas: [],list:[]},
                    drdcts: {items: [], datas: [],list:[]},
                    mgcsc: {items: [], datas: [],list:[]}},
            }
        },
        mounted() {
            const screenHeight = document.getElementById("index-div").clientHeight;
            document.getElementById("dashbroad-div").style.height = `${screenHeight - 39 - 30 - 36}px`;
            window.onresize = () => {
                return (() => {
                    const screenHeight = document.getElementById("index-div").clientHeight;
                    document.getElementById("dashbroad-div").style.height = `${screenHeight - 39 - 30 - 36}px`;
                })();
            };

            getTjsj().then(data => {
                this.lineChartData.datas = data.datas
                this.lineChartData.items = data.items
                this.gdzj = data.gdzj
                this.ffts = data.ffts
                this.drdcts = data.drdcts
                this.wgwj = data.wgwj
                this.mgcsc = data.mgcsc
                this.myd = data.myd
                this.pieData.fsts.datas = [
                    {value: data.ffts, name: '重复投诉'},
                    {value: (data.gdzj - data.ffts), name: '其他'}]
                this.pieData.fsts.items = ['重复投诉', '其他']
                this.pieData.fsts.list = ['#36a3f7', '#40c9c6']

                this.pieData.drdcts.datas = [
                    {value: data.drdcts, name: '多人多次投诉'},
                    {value: (data.gdzj - data.drdcts), name: '其他'}]
                this.pieData.drdcts.items = ['多人多次投诉', '其他']
                this.pieData.drdcts.list = ['#b6a2de', '#40c9c6']

                this.pieData.mgcsc.datas = [
                    {value: data.mgcsc, name: '敏感词筛查'},
                    {value: (data.gdzj - data.mgcsc), name: '其他'}]
                this.pieData.mgcsc.items = ['敏感词筛查', '其他']
                this.pieData.mgcsc.list = ['#f4516c', '#40c9c6']
            })


        },
        methods: {
            click(active) {
                this.$emit('changeMenu', active);
            }
        }
    }
</script>

<style scoped>
    #iframe-container {

    }

    .panel-group {
        margin-top: 18px;
    }

    .card-panel-col {
        margin-bottom: 32px;
    }

    .card-panel {
        height: 150px;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #666;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
    }

    .card-panel-pie {
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #666;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
    }

    .card-panel-icon-wrapper:hover {
        color: #fff;
    }

    .icon-people:hover {
        background: #40c9c6;
    }

    .icon-tw:hover {
        background: #ffb980;
    }

    .icon-drdcts:hover {
        background: #b6a2de;
    }

    .icon-message:hover {
        background: #36a3f7;
    }

    .icon-money:hover {
        background: #f4516c;
    }

    .icon-shopping:hover {
        background: #34bfa3
    }

    .icon-people {
        color: #40c9c6;
    }

    .icon-tw {
        color: #ffb980;
    }

    .icon-drdcts {
        color: #b6a2de;
    }

    .icon-message {
        color: #36a3f7;
    }

    .icon-money {
        color: #f4516c;
    }

    .icon-shopping {
        color: #34bfa3
    }

    .card-panel-icon-wrapper {
        float: left;
        margin: 25px 0 0 25px;
        padding: 20px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
    }

    .card-panel-icon {
        float: left;
        font-size: 48px;
    }

    .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 50px;
        margin-left: 0px;
    }

    .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
    }

    .card-panel-num {
        font-size: 30px;
    }

    @media (max-width: 1024px) {
        .chart-wrapper {
            padding: 8px;
        }

        .card-panel-icon-wrapper {
            float: none !important;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        .svg-icon {
            display: block;
            margin: 14px auto !important;
            float: none !important;
        }
    }
</style>
