<template>
    <section class="section section-header bg-primary shadow">
        <div class="container grid-lg">
            <header class="navbar">
                <section class="navbar-section">
                    <nuxt-link to="/" class="btn btn-link">Home</nuxt-link>
                </section>
                <section class="navbar-center">
                    WikiGo
                </section>
                <section class="navbar-section">
                    <a href="https://github.com/crystrk" target="_blank" class="btn btn-link">GitHub</a>
                </section>
            </header>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.shadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
}
.btn.btn-link{
    color: #fff;
}
</style>
