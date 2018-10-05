<template>
    <ul class="todo__list">
       <li>
           <todo-item></todo-item>
       </li>
        <li>
            <todo-item></todo-item>
        </li>
        <li>
            <todo-item></todo-item>
        </li>
        <li>
            <todo-item></todo-item>
        </li>
        <li>
            <todo-item></todo-item>
        </li>
    </ul>
</template>

<script>
import todoItem from './todoItem';

export default {
    name: 'todoList',
    components: {
        todoItem
    }
};
</script>

<style scoped>
.todo__list{
    border:1px solid #000;
}
.todo__list li{
    list-style: none;
    border-top:1px solid #000;
}
.todo__list li:first-child{
    border-top:0;
}
</style>