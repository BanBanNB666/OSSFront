<template>
    <nav style="margin-left: 2%;margin-top: 1%; ">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#1" @click="backHome">开始</a>
            </li>
            <li v-if="props.bucket.bucketName" class="breadcrumb-item">
                <a href="#1"  @click="backBucket">{{ props.bucket.bucketName }}</a>
            </li>
            <li v-if="props.fileNow.fileName" class="breadcrumb-item active">
                <a href="#1" >{{ props.fileNow.fileName }}</a>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
//从父组件拿数据
const props = defineProps<{
    bucket: any
    fileNow: any
}>()

//给父组件事情：我要回到主页
const emit = defineEmits(['on-click'])
const backHome = () => {
    emit('on-click', "0")
}
//给父组件事情：我要回到桶子
const backBucket = () => {
    emit('on-click', "1")
}



</script>

<style></style>