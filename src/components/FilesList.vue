<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">文件名</th>
                <th scope="col">大小</th>
                <th scope="col">文件类型</th>
            </tr>
        </thead>
        <tbody>
            <tr @click="openOneFile(oneFile)" v-for="(oneFile,index) in props.files.Files" :key="oneFile">
                <th scope="row">{{index + 1}}</th>
                <td>{{oneFile.fileName}}</td>
                <td>{{oneFile.fileSize}}</td>
                <td>{{oneFile.fileType}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
//从父组件拿数据
const props = defineProps<{
    files: any
}>()

//给父组件事件：打开文件
const emit = defineEmits(['on-click'])
const  openOneFile = (oneFile:any) => {
    if(oneFile){
        emit('on-click', oneFile)
    }else {
        emit('on-click', "")
    }
} 
</script>

<style></style>