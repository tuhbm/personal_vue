<template>
    <div class="header__logo">
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
.header__logo {
    float:right;
}
</style>