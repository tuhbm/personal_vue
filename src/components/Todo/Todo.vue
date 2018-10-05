<template>
    <div>
        <h1>Todo입니다.</h1>
        <div class="todo__container">
            <todo-write></todo-write>
            <todo-list></todo-list>
        </div>
    </div>
</template>

<script>
import todoWrite from './TodoWrite';
import todoList from './todoList';

export default {
    name: 'Todo',
    components: {
        todoWrite,
        todoList
    }
};
</script>

<style scoped>
.todo__container {
    width:80%;
    padding:2rem 1rem;
    margin:0 auto;
    background-color:#fff;
}
</style>