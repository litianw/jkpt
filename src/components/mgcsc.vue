<template>
    <div id="mgcsc-container">
        <div style="height: 10%;overflow: auto;background-color: #FFF;border-radius: 5px;margin-bottom: 5px;line-height: 90px;text-align: left">
            <el-button style="margin: 0px 20px" @click="exportdrdc">导出</el-button>
        </div>
        <MainTable id="mgcsc" :tableData="tableData"></MainTable>
    </div>
</template>

<script>
    import MainTable from '~/components/table'
    import {getMgcsc} from "~/utils/api";
    import {exportExc} from "~/utils/exportExcle";
    export default {
        name: "mgcsc",
        components:{
            MainTable
        },
        data(){
            return {
                tableData:[]
            }
        },
        mounted(){
            const screenHeight = document.getElementById("index-div").clientHeight;
            document.getElementById("mgcsc-container").style.height = `${screenHeight-39-30}px` ;
            window.onresize = () => {
                return (() => {
                    const screenHeight = document.getElementById("index-div").clientHeight;
                    document.getElementById("mgcsc-container").style.height = `${screenHeight-39-30}px` ;
                })();
            };
            getMgcsc().then(data =>{
                this.tableData =data.data;
            })
        },
        methods: {
            exportdrdc() {
                exportExc('mgcsc', "敏感词筛查");
            }
        }
    }
</script>

<style scoped>

</style>
