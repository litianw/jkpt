<template>

    <div >
        <h2>{{type}}</h2>
        <el-upload
                class="upload-demo"
                drag
                :action="action"
                :on-success="success"
                :on-error="error"
                :multiple="false"
                :show-file-list="false"
        >
            <i class="iconfont icon-yunshangchuan upload-c"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件</div>
        </el-upload>
    </div>
</template>
<script>
    export default {
        name: "commonupload",
        props: {
            title: {
                type: String
            },
            url: {
                type: String
            }
        },
        data() {
            return {
                type: this.title,
                action: this.url
            }
        },
        mounted(){

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
    .upload-c {
        font-size: 67px;
        color: #C0C4CC;
        margin-top: 40px;
        display: inline-block;

    }
</style>