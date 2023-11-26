<template>
    <div id="wjfx-container">
    <div style="height: 10%;overflow: auto;background-color: #FFF;border-radius: 5px;margin-bottom: 5px;line-height: 90px;text-align: left">
        <el-button style="margin: 0px 20px">导出</el-button>
    </div>
    <el-table
            :data="datas"
            height="90%"
            stripe
            style="width: 100%"
    >
        <el-table-column
                align="center"
                type="index"
                label="序号"
                width="50">
        </el-table-column>
        <el-table-column
                align="center"
                prop="title"
                label="违纪"
        >
        </el-table-column>
        <el-table-column
                align="center"
                prop="datils"
                label="详情"
        >
        </el-table-column>
        <el-table-column
                align="center"
                prop="name"
                label="人员">
        </el-table-column>
        <el-table-column
                prop="lxfs"
                align="center"
                label="联系方式">
        </el-table-column>

    </el-table>
    </div>
</template>

<script>
    import {getWjtj} from '~/utils/api'
    export default {
        name: "wjfx",
        data(){
            return {
                datas:[]
            }
        },
        mounted(){
            const screenHeight = document.getElementById("index-div").clientHeight;
            document.getElementById("wjfx-container").style.height = `${screenHeight-39-30}px` ;
            window.onresize = () => {
                return (() => {
                    const screenHeight = document.getElementById("index-div").clientHeight;
                    document.getElementById("wjfx-container").style.height = `${screenHeight-39-30}px` ;
                })();
            };
            getWjtj().then(data =>{
                this.datas =data.data;
            })

        }
    }
</script>

<style scoped>

</style>
