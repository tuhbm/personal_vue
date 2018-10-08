<template>
    <div class="todo__item" :class="deleteItem">
        <label for="`item${item.id}`" class="item__label">{{ checkProgressText }}</label>
        <input :id="`item${item.id}`" class="item__checkbox" type="checkbox" v-model="checkProgress">
        <p class="item__text" :class="{isFinish}" v-if="!isModify">{{item.text}}</p>
        <input type="text" class="item_input" v-model="item.text" v-else>
        <div class="item_area">
            <button type="button" class="item_button item_modify" @click.prevent="statusModify" v-if="!checkDelete && isModify">완료</button>
            <button type="button" class="item_button item_modify" @click.prevent="statusModify" v-if="!checkDelete && !isModify">수정</button>
            <button type="button" class="item_button item_delete" v-if="!checkDelete" @click.prevent="toggleRemoveState({item})">삭제</button>
            <button type="button" class="item_button item_restore" @click.prevent="toggleRemoveState({item})" v-else>복원</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'todoItem',
    data() {
        return {
            isModify: ''
        };
    },
    props: ['item'],
    computed: {
        ...mapState({
            message: state => state.todos.text
        }),
        checkProgress() {
            return this.item.done;
        },
        checkProgressText() {
            return this.checkProgress ? '완료' : '진행';
        },
        isFinish() {
            return this.checkProgress ? 'isFinish' : '';
        },
        checkDelete() {
            return this.item.removeStatus;
        },
        deleteItem() {
            return this.checkDelete ? 'isDelete' :'';
        }
    },
    methods: {
        ...mapMutations([
            'toggleRemoveState'
        ]),
        statusModify() {
            this.isModify = !this.isModify;
        }
    }
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
.isFinish {
    text-decoration: line-through;
}
.isDelete .item__text{
    color: #d2d2d2;
}
.item__checkbox,
.item__text,
.item_input{
    float:left
}
.item__text,
.item_input{
    width:40%;
}
.item__text{
    display:block;
    overflow:hidden;
    text-align:left;
    word-break: break-all;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.item__checkbox{
    margin-right:0.5rem;
}
.item_area{
    float:right;
}
.item_button{
    margin-left:0.5rem;
    background-color:transparent;
}
.item_button:first-child{
    margin-left:0;
}
.item_button:active{
    background-color: #000;
    color: #fff;
}
</style>