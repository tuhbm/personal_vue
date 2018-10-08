<template>
    <div class="header__menu">
        <gnb-item></gnb-item>
    </div>
</template>

<script>
import GnbItem from './GnbItem';

export default {
    name: 'Gnb',
    components: {
        GnbItem
    }
};
</script>

<style scoped>
.header__menu {
    float:right;
    margin-top: 1rem;
}
</style>