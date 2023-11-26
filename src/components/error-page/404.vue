<template>
    <div class="wscn-http404-container">

        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Page404",
        computed: {
            message() {
                return '无法找到这个页面！'
            }
        }
    }
</script>

<style scoped>

</style>
