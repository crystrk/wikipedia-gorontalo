<template>
    <div class="empty">
        <div class="empty-action">
            Built with
            <span class="tooltip" data-tooltip="NuxtJS">
                <img src="/favicon.ico" class="logo">
            </span>
            +
            <span class="tooltip" data-tooltip="spectre CSS">
                <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg" class="logo">
            </span>
            and Designed
            by <a href="https://twitter.com/crystrk" target="_blank">Crystal K</a>
        </div>
    </div>
</template>

<style scoped>
.empty {
    padding: 1rem 1.6rem;
}
.logo {
    height: 13px;
    width: 13px;
}
.footer{
position: fixed;
    bottom: 0;
    width: 100%;
}

.empty-action {
    margin: 0 auto;
}
</style>
