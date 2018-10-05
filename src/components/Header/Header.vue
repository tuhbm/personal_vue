<template>
    <div class="app__header">
        <logo></logo>
        <gnb></gnb>
    </div>
</template>

<script>
import Logo from './Logo';
import Gnb from '../Gnb/Gnb';

export default {
    name: 'Header',
    components: {
        Gnb,
        Logo
    }
};
</script>

<style scoped>
.app__header{
    position:fixed;
    top:0;
    left:0;
    overflow:hidden;
    width:100%;
    height: 5rem;
    background-color:#fff;
}
</style>