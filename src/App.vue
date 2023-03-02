<script setup lang="ts">
  import waterFallVue from './components/waterFallVue.vue'
  import {ref , reactive} from 'vue'
  const a:number = 12
  const getName = (name:string) => {
    console.log(name)
    console.log(waterFall.value?.name)
  }
  const waterFall = ref<InstanceType<typeof waterFallVue>>()



const data = [
{
    bucketName:"Bucket1",
    Files:[{
        fileName:"fileName1",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },]
},{
    bucketName:"Bucket2",
    Files:[{
        fileName:"fileName1",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },]
},{
    bucketName:"Bucket3",
    Files:[{
        fileName:"fileName1",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },{
        fileName:"fileName2",
        fileType:"txt",
        fileSize:"30000",
        id:"09450928532904",
        version:"3",
        filePath:"F:\\hello",
        creatTime:"2021313134",
    },]
},
]
</script>

<template>
      <router-view></router-view>
  <div>
    父级  {{ waterFall?.name }}
  </div>
  <waterFallVue ref="waterFall"  :arr=[1,2,3] :title="a" :data=data></waterFallVue>
</template>




