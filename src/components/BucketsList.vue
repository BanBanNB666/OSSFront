<template>
    <ul class="nav flex-column">
        <li class="nav-item" v-for="bucket in data" @click="emitBucket(bucket.bucketName)">
            <i class="bi bi-database"> {{ bucket.bucketName }}</i>
        </li>
    </ul>
</template>

<script setup lang="ts">

//从父组件拿数据
const props = defineProps<{
    data: any
}>()

//给父组件事件：传出桶名
const emit = defineEmits(['on-click'])
const emitBucket = (bucketName:string) => {
    let temp:any;
    let isFind = false;
    for(temp in props.data){
        if(props.data[temp].bucketName == bucketName){
            emit('on-click', props.data[temp])
            isFind = true;
        }
    }
    if(!isFind){
        emit('on-click',"")
    }
}

</script>

<style scoped>
.nav-item {
    margin-top: 4%;
    margin-bottom: 4%;
}

.nav-item:hover {
    font-size: 20px;
}
</style>