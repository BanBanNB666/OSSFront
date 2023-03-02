<template>
<button data-bs-toggle="modal" data-bs-target="#myModal"  data-toggle="modal"
        data-target="#myModal">
        新建桶
    </button><br>

    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">确定提交</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <input type="text" readonly class="form-control" placeholder="提交后不可修改" name="email">
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button"  class="btn btn-danger" data-bs-dismiss="modal">确定</button>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>