<template>
    <div class="todo__item" :class="isDelete">
        <label :for="`item${item.id}`" class="item__label">{{ checkProgressText }}
            <input :id="`item${item.id}`" class="item__checkbox" :disabled="checkDelete" type="checkbox" v-model="item.done">
        </label>
        <p class="item__text" :class="{isFinish}" v-if="!isModify">{{item.text}}</p>
        <label for="itemInput" v-else>
            <input type="text" id="itemInput" class="item_input" v-model="item.text">
        </label>
        <div class="item_area">
            <button type="button" class="item_button item_modify" @click.prevent="statusModify" v-if="!checkDelete && isModify">완료</button>
            <button type="button" class="item_button item_modify" @click.prevent="statusModify" v-if="!checkDelete && !isModify">수정</button>
            <button type="button" class="item_button item_delete" v-if="!checkDelete" @click.prevent="toggleRemoveState({item})">삭제</button>
            <button type="button" class="item_button item_restore" @click.prevent="toggleRemoveState({item})" v-else>복원</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'todoItem',
    data() {
        return {
            isModify: '',
            items: []
        };
    },
    props: ['item'],
    computed: {
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
        isDelete() {
            return this.checkDelete ? 'isDelete' : '';
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