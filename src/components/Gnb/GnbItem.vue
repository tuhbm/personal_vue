<template>
    <div>
        <router-link tag="a" class="gnb__link" v-for="(data, index) in menuItems" :key="index" :to="data.link">
            {{data.title}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'GnbItem',
    computed: {
        menuItems() {
            let items = [
                {title: 'TODO', link: '/todo'},
                {title: 'Calculator', link: '/calculator'},
            ];
            return items;
        }
    }
};
</script>

<style scoped>
.gnb__link{
    padding: 0.5rem 2rem;
    background: #fff;
    color:#000;
}
.gnb__link:hover{
    background: #000;
    color:#fff;
}
</style>