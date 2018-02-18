<template>
    <div>
        <header-app></header-app>
        <nuxt/>
        <footer-app></footer-app>
    </div>
</template>

<script>
import HeaderApp from '~/components/HeaderApp.vue'
import FooterApp from '~/components/Footer.vue'
export default {
    components: {
        HeaderApp,
        FooterApp
    }
}
</script>
<style>

</style>
