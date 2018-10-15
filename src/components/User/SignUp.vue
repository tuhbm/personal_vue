<template>
    <div class="sign-up">
        <p>가입을 해보자!</p>
        <input type="text" v-model="email" placeholder="Email"><br/>
        <input type="password" v-model="password" placeholder="Password"><br/>
        <button @click.prevent="signup">가입</button>
        <span><router-link to="/login">로그인</router-link>하기</span>
    </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signup () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alert(`가입완료 ${user}`)
          },
          (err) => {
            alert(`가입실패 ${err.message}`)
          }
        );
      }
    }
  };
</script>

<style scoped>
    h3, p, a, span {
        color:#fff;
    }
    .sign-up {
        margin-top:40px;
    }
    input {
        margin: 10px 0;
        width:20%;
        padding: 15px;
    }
    button {
        margin-top:10px;
        width:10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size:11px;
    }
</style>