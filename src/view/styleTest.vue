<template>
    <button type="button" class="btn btn-default btn-circle"><i class="bi bi-arrow-right"></i></button>
    <button type="button" class="btn btn-primary btn-circle"><i class="glyphicon glyphicon-list"></i></button>
    <button type="button" class="btn btn-success btn-circle"></button>
    <button type="button" class="btn btn-info btn-circle"><i class="glyphicon glyphicon-ok"></i></button>
    <button type="button" class="btn btn-warning btn-circle"><i class="glyphicon glyphicon-remove"></i></button>
    <button type="button" class="btn btn-danger btn-circle"><i class="glyphicon glyphicon-heart"></i></button>

    <h2>lg</h2>
    <button type="button" class="btn btn-default btn-circle btn-lg"><i class="bi bi-arrow-right"></i></button>
    <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="glyphicon glyphicon-list"></i></button>
    <button type="button" class="btn btn-success btn-circle btn-lg"><i class="glyphicon glyphicon-link"></i></button>
    <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
    <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="glyphicon glyphicon-remove"></i></button>
    <button type="button" class="btn btn-danger btn-circle btn-lg"><i class="glyphicon glyphicon-heart"></i></button>

    <h2>xl</h2>
    <button type="button" class="btn btn-default btn-circle btn-xl"><i class="glyphicon glyphicon-ok"></i></button>
    <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="glyphicon glyphicon-list"></i></button>
    <button type="button" class="btn btn-success btn-circle btn-xl"><i class="glyphicon glyphicon-link"></i></button>
    <button type="button" class="btn btn-info btn-circle btn-xl"><i class="glyphicon glyphicon-ok"></i></button>
    <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="glyphicon glyphicon-remove"></i></button>
    <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="glyphicon glyphicon-heart"></i></button>
</template>

<style scoped>
body {
    margin: 40px;
}

.btn:hover{
    background-color: white;
}

.btn{
    background-color: red;
}

.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}

.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
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
}</style>