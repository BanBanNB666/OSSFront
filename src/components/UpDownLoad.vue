<template>
    <button class="btn  btn-light" type="button" data-bs-toggle="modal" data-bs-target="#upLoad" data-toggle="modal" data-target="#myModal">
        <i class="bi bi-arrow-right"></i>上传
    </button>
    <button class="btn  btn-light" type="button" style="margin-left:3% ;">
        下载选中<i class="bi bi-arrow-right"></i>
    </button>

    <!-- 上传 -->
    <div class="modal fade" id="upLoad">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">拖入文件批量上传</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <input type="text" readonly class="form-control" placeholder="提交后不可修改" name="email">
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">确定</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.btn{
    height: 80%;
    background-color: white;
}
</style>