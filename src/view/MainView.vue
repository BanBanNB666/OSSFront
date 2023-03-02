<template >
    <div class="" style="background-color: rgb(238,241,246); height:100% ;">
        <div class="row" style=" height:100% ;">
            <div class="col-md-12">
                <!-- 顶部在这里！！！！！！！！！！！！！！！！！！！！！！！！ -->
                <div class="row" style="background-color: rgb(255,255,255); height: 7%;  ">
                    <div class="col-md-4" style="height: 100%;">
                        <i class="bi bi-airplane"  style="font-size: 30px; font-weight: 500 ; margin-left: 20%;" ></i>
                    </div>
                    <div class="col-md-8">
                        <SettingAboutPerson></SettingAboutPerson>
                    </div>
                </div>
                <div class="row " style="margin-top: 4px;height: 100%;">
                    <!-- 左侧边在这里！！！！！！！！！！！！！！！！！！！！！ -->
                    <div class="col-md-2" style="background-color: rgb(255,255,255); height: 100%;">
                        <div class="row" style=" height: 10%; padding-left: 4%; padding-top: 2%;">
                            <SearchBucket @on-click="getOneBacketName" :data=data></SearchBucket>
                            <AddBucket :data=data></AddBucket>
                        </div>
                        <div class="row" style=" height: 80%;margin-top: 15%;">
                            <div class="col-md-13" id="box" style="height: 90;">
                                <BucketsList @on-click="getBacketName" :data=data></BucketsList>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧边在这里！！！！！！！！！！！！！！！！！！！！！ -->
                    <div class="col-md-10"
                        style="background-color: rgb(255,255,255);  border: 4px solid rgb(238,241,246); border-top: none; border-bottom: none; border-right: none; ">
                        <div class="row" style="height: 6%;">
                            <div class="col-md-12">
                                <Navbar  @on-click="navBack" :bucket=bucketNow :fileNow=fileNow ></Navbar>
                            </div>
                        </div>
                        <div class="row" style="height: 100%;">
                            <div class="col-md-12"
                                style="  border: 4px solid rgb(238,241,246); border-left: none; border-bottom: none; border-right: none; ">
                                <div class="row"
                                    style="height: 6%; border: 4px solid rgb(238,241,246); border-left: none; border-top: none; border-right: none;">
                                    <div class="col-md-6" role="group">
                                        <UpDownLoad></UpDownLoad>
                                        
                                    </div>
                                    <div class="col-md-4" role="group">
                                            <SearchFile @on-click="getOneFile" :bucket=bucketNow :data=data></SearchFile>
                                        </div>
                                        <div class="col-md-1" style="margin-left: 5%;" role="group">
                                            <ShowUpDownLoad></ShowUpDownLoad>
                                        </div>
                                </div>
                                <div class="row" style="height: 40%;">
                                    <div class="col-md-12">
                                        <FilesList @on-click="OpenFile" :files=bucketNow></FilesList>
                                    </div>
                                </div>
                                <div class="row">
                                    <Page></Page>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FilesList from '../components/FilesList.vue';
import BucketsList from '../components/BucketsList.vue';
import Navbar from '../components/Navbar.vue';
import SearchBucket from '../components/SearchBucket.vue';
import SearchFile from '../components/SearchFile.vue';
import SettingAboutPerson from '../components/SettingAboutPerson.vue';
import UpDownLoad from '../components/UpDownLoad.vue';
import AddBucket from '../components/AddBucket.vue';
import ShowUpDownLoad from '../components/ShowUpDownLoad.vue';
import Page from '../components/Page.vue';
import {ref} from 'vue'

//all data
var data = [
{
    bucketName:"Bucket1"  ,
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
} ,{
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
//当前桶
let bucketNow = ref("")
//当前文件
let fileNow = ref("")
    
//查找桶,当前桶改变
let temp = ref("")
const getBacketName = (params:any) => {
    if(params!=""){
        bucketNow.value = params
    }else{
        console.log("not found Bucket")
    }
}

//查找桶,当前桶改变
const getOneBacketName = (params:any) =>{
    if(params!=""){
        console.log(params)
        bucketNow.value = params
    }else{
        console.log("not found Bucket")
    }
}

//查找某桶文件，当前某桶，当前某文件改变
const getOneFile = (params:any) =>{
    if(params!=""){
        console.log(params)
        fileNow.value = params
    }else{
        console.log("not found File")
    }
}

//导航，修改当前桶，当前文件
const navBack = (params:any) => {
    if(params == "0"){
        bucketNow.value = ""
        fileNow.value = ""
    }
    if(params == "1"){
        fileNow.value = ""
    }
}

//打开文件，修改当前文件
const OpenFile = (params:any) => {
    if(params == ""){
        console.log("文件打开失败")
    }
    else
        fileNow.value = params
    
}
    

</script>

<style scoped>
/* overflow-y:auto; 重要的东西，滚动条*/
#box {
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    line-height: 30px;
    text-align: center;
}

#box::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar {
    width: 0 !important;
}

::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>
