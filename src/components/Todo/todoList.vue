<template>
    <div class="todo__content">
        <em class="todo__info">갯수: <span>{{todoItemCount}}</span></em>
        <ul class="todo__list">
            <li v-for="item in todo" :key="item.id">
                <todo-item :item="item"></todo-item>
            </li>
        </ul>
    </div>

</template>

<script>
import todoItem from './todoItem';

export default {
    name: 'todoList',
    components: {
        todoItem
    },
    props: ['todo'],
    computed: {
        todoItemCount() {
            return this.todo.length;
        }
    }
};
</script>

<style scoped>
.todo__info{
    display:block;
    margin-bottom:1rem;
    font-size:0.8rem;
    text-align:left;
}
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