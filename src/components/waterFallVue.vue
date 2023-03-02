<template>
    <div>
        子级 值：{{ title }}
        <button @click="send">点我传值给父亲</button>
    </div>

</template>

<script setup lang="ts">
    const props = defineProps<{
        title:Number,
        arr:number[]
        data:{}
    }>()


    const emit = defineEmits<{
        (e:"on-clock",name:string):void
    }>()
    const send  = () => {
        emit('on-clock','sendMessage')
    }

    defineExpose({
        name:'？？'
    })
</script>
<style></style>