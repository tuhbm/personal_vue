<template>
    <div class="todo__item">
        <label for="todoItem" class="item__label">진행</label>
        <input id="todoItem" class="item__checkbox" type="checkbox">
        <p class="item__text">task111111111</p>
        <button type="button" class="item_delte">삭제</button>
    </div>
</template>

<script>
export default {
    name: 'todoItem'
};
</script>

<style scoped>
.todo__item{
    overflow:hidden;
    padding:1rem;
}
.item__label{
    font-size:0;
    text-indent: -9999px;
}
.item__checkbox,
.item__text{
    float:left
}
.item__checkbox{
    margin-right:0.5rem;
}
.item_delte{
    float:right;
    background-color:transparent;
}
.item_delte:active{
    background-color: #000;
    color: #fff;
}
</style>