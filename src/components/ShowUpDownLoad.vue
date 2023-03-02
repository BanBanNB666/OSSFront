<template>

    <button type="button" class="btn btn-default btn-circle"><i class="bi bi-arrow-down-circle"></i></button>
</template>


<script setup lang="ts">
</script>

<style scoped>
.btn:hover{
    background-color: white;
}

.btn{
    background-color: red;
}

.btn-circle {
    width: 35px;
    height: 35px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
    margin-top: 1px;
    margin-left: 7%;
}



.btn-circle.btn-lg {
    width: 45px;
    height: 45px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 25px;
}

.btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
}
</style>