<template>
    <div>
        <h1>TODO입니다.</h1>
        <div class="todo__container">
            <todo-write></todo-write>
            <h2>해야할 일</h2>
            <todo-list :todo="getProgressItem"></todo-list>
            <hr>
            <h2>완료된 일</h2>
            <todo-list :todo="getFinishItem"></todo-list>
            <hr>
            <h2>삭제된 일</h2>
            <todo-list :todo="getDeleteItem"></todo-list>
        </div>
    </div>
</template>

<script>
import todoWrite from './TodoWrite';
import todoList from './todoList';
import { mapGetters } from 'vuex';

export default {
    name: 'Todo',
    components: {
        todoWrite,
        todoList
    },
    computed: {
        ...mapGetters([
            'getProgressItem',
            'getFinishItem',
            'getDeleteItem'
        ])
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
hr{
    margin-top:3rem;
    border: 1px dashed #ddd;
}
.todo__container h2{
    font-size:2rem;
    color:#000;
    margin:2rem 0;
}
</style>