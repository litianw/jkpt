<template>
    <div id="cfts-container">
        <div style="height: 10%;overflow: auto;background-color: #FFF;border-radius: 5px;margin-bottom: 5px;line-height: 90px;text-align: left">
            <el-button style="margin: 0px 20px" @click="exportdrdc">导出</el-button>
        </div>
        <MainTable id="ffts" :tableData="tableData"></MainTable>

    </div>
</template>

<script>
    import MainTable from '~/components/table'
    import {getCfts} from "~/utils/api";
    import {exportExc} from "~/utils/exportExcle";

    export default {
        name: "cfts",
        components: {
            MainTable
        },
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            const screenHeight = document.getElementById("index-div").clientHeight;
            document.getElementById("cfts-container").style.height = `${screenHeight - 39 - 30}px`;
            window.onresize = () => {
                return (() => {
                    const screenHeight = document.getElementById("index-div").clientHeight;
                    document.getElementById("cfts-container").style.height = `${screenHeight - 39 - 30}px`;
                })();
            };
            getCfts().then(data => {
                this.tableData = data.data;
            })

        },
        methods: {
            exportdrdc() {
                exportExc('ffts', "重复投诉");
            }
        }
    }
</script>

<style scoped>

</style>
