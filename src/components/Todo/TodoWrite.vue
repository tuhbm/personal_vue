<template>
    <div class="todo__write">
        <input type="text" class="todo__input" v-model="newItem" @key.enter="addTodoItem">
        <button type="submit" class="todo__submit" @click.prevent="addTodoItem">등록</button>
    </div>
</template>

<script>
export default {
    name: 'TodoWrite',
    data() {
        return {
            newItem: ''
        };
    },
    methods: {
        addTodoItem() {
            if (!this.newItem) {
                return;
            }
            const text = this.newItem.trim();
            this.$store.commit('addTodoItem', text);
            this.clearInput();
        },
        clearInput() {
            this.newItem = '';
        }
    }
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
    border:1px solid #000;
    vertical-align: top;
}
.todo__submit{
    width:13%;
    height:5.125rem;
    margin:0;
    padding:2rem 1rem;
    border:1px solid #000;
    vertical-align: top;
}
</style>