<template>
    <div id="tw-container">
        <div style="height: 10%;overflow: auto;background-color: #FFF;border-radius: 5px;margin-bottom: 5px;line-height: 90px;text-align: left">
            缺乏关键性指标无法计算，待开发。。。。
        </div>
        <MainTable :tableData="tableData"></MainTable>
    </div>
</template>

<script>
    import MainTable from '~/components/table'
    export default {
        name: "tw",
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
            document.getElementById("tw-container").style.height = `${screenHeight-39-30}px` ;
            window.onresize = () => {
                return (() => {
                    const screenHeight = document.getElementById("index-div").clientHeight;
                    document.getElementById("tw-container").style.height = `${screenHeight-39-30}px` ;
                })();
            };
        }
    }
</script>

<style scoped>

</style>
