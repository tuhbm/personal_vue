<template>
    <div class="header__logo">
        <router-link to="/">
            <img src="https://avatars0.githubusercontent.com/u/13491712?s=40&v=4" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Logo'
};
</script>

<style scoped>
.header__logo{
    float:left;
    vertical-align: top;
}
.header__logo a{
    display:block;
}
</style>