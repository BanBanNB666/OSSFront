<!-- <template>
   <div style="width: 800px;">
    <input type="file" name="file" id="file" multiple class="file"  />
</div>
</template>

<script setup lang="ts">

    let title = document.getElementById('#file') as HTMLInputElement
    // title.fileinput({
    //     language: 'zh',     //设置语言
    //     dropZoneEnabled: true,      //是否显示拖拽区域
    //     dropZoneTitle: "可以将图片拖放到这里",    //拖拽区域显示文字
    //     uploadUrl: 'file/imgSave',  //上传路径
    //     allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg'],   //指定上传文件类型
    //     minFileSize: 0,
    //     maxFileSize: 2048,   //上传文件最大值，单位kb
    //     uploadAsync: true,  //异步上传
    //     maxFileCount: 2    //上传文件最大个数。
    // }).on("fileuploaded", function(event,data) { //异步上传成功后回调
    //     console.log(data);		//data为返回的数据
    // });
</script> -->

<!-- <template>
    <input id="file" type="file" name="pic"  @change="showPic(this:FileList)">
    <img src="" id="preview" width="300" height="240" style="opacity:0">
</template>

<script setup lang="ts">
const showPic = (obj:any)=> {
        var fileUrl = getObjectURL(obj.files[0]);
        if (fileUrl != null) {
            document.getElementById("preview").src = fileUrl;      // 图片预览
            document.getElementById("preview").style = "opacity:1";
        }
    }

</script> -->

<template>
    <input type="file" id="importFile" />
    <input type="button" :onclick="upload"/>
</template>

<script setup >
const upload = () => {
    var filename = document.getElementById("importFile")
    
    // 这时的filename不是 importFile 框中的值
    alert(filename.files[0]);
    var selectedFile = document.getElementById('files').files[0];
}
</script>