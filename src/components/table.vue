<template>
    <el-table
            :data="datas"
            height="90%"
            stripe
            style="width: 100%"
            :id="id"
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
                label="标题"
        >
        </el-table-column>
        <el-table-column
                align="center"
                prop="context"
                label="诉求内容"
        >
        </el-table-column>

        <el-table-column
                prop="ldhm"
                align="center"
                label="来电号码">
        </el-table-column>

        <el-table-column
                align="center"
                prop="jbsj"
                sortable
                label="交办时间">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "MainTable",
        props: ['tableData','id'],
        data() {
            return {
                datas: this.tableData
            }
        },
        mounted() {
        },
        watch: {
            tableData: {
                deep: true,
                handler(val) {
                    this.datas = val;
                    console.log("表格更新数据：", val)
                }
            }
        },
    }
</script>

<style scoped>

</style>
