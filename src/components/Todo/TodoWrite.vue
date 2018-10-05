<template>
    <div class="todo__write">
        <input type="text" class="todo__input">
        <button type="submit" class="todo__submit">등록</button>
    </div>
</template>

<script>
export default {
    name: 'TodoWrite'
};
</script>

<style scoped>
.todo__write{
    margin-bottom: 1rem;
}
.todo__input{
    width:85%;
    height:5rem;
    margin:0 1% 0 0;
    padding:0;
}
.todo__submit{
    width:13%;
    height:5rem;
    margin:0;
    padding:2rem 1rem;
}
</style>