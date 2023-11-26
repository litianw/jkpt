<template>


    <div style="height: 100%;overflow-y: auto">
        <el-row>
            <h2 class="title-h2" >投诉工单</h2>
            <commonupload title="工单数据" url="/jgpt/upload/tsgd"/>
        </el-row>
        <el-row>
            <h2 class="title-h2" >违规申领廉租房</h2>
            <el-col :span="6">
                <commonupload title="廉租房申领人员" url="/jgpt/upload/lzfslry"/>
            </el-col>
            <el-col :span="6">
                <commonupload title="财政供养人员" url="/jgpt/upload/czgyry"/>
            </el-col>
            <el-col :span="6">
                <commonupload title="党员数据" url="/jgpt/upload/dy"/>
            </el-col>

            <el-col :span="6">
                <commonupload title="残疾人信息" url="/jgpt/upload/cjr"/>
            </el-col>

        </el-row>

    </div>

</template>

<script>
    import commonupload from '~/components/CommonUpload'

    export default {
        name: "Mainupload",
        components: {
            commonupload
        },
        methods: {
            success(response, file, fileList) {
                this.$message.success("上传成功！整在进行计算，请稍后查看数据")
            },
            error(err, file, fileList) {
                this.$message.error('上传失败');
            }
        }
    }
</script>

<style scoped>
    .title-h2{
        background: #36a3f7
    }
    .upload-c {
        font-size: 67px;
        color: #C0C4CC;
        margin-top: 40px;
        display: inline-block;

    }
</style>
