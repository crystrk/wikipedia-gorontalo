<template>
    <div class="container grid-xs">
        <br>
        <div class="input-group">
            <input type="text" class="form-input input-lg" placeholder="Ketik disini" v-model="keyword"  @keyup.enter="searching">
            <button class="btn btn-primary input-group-btn btn-lg" @click="searching"><i class="icon icon-search"></i> Cari</button>
        </div>
        <small class="float-right">
            Powered By API <a href="https://incubator.wikimedia.org/wiki/Wp/gor/Halaman_Bungaliyo" target="_blank">Wikipedia Gorontalo</a>
        </small>

        <br><br>
        <div class="loading loading-lg" v-if="isLoading"></div>

        <div class="card" v-for="(word, index) in filterResults" :key="index">
            <div class="card-header">
                <div class="card-title h5">
                    <nuxt-link :to="'/detail/'+word.pageid" class="card-link tooltip tooltip-right" data-tooltip="klik detail">{{ word.judul }}</nuxt-link>
                </div>
                <div class="card-subtitle text-gray">
                    <a :href="'https://incubator.wikimedia.org/wiki/'+word.title" class="card-sublink tooltip tooltip-bottom" data-tooltip="visit wikimedia link" target="_blank">
                        https://incubator.wikimedia.org/wiki/{{ word.title }}
                    </a>
                </div>
            </div>
            <div class="card-body">
                <div v-html="word.snippet"></div>
            </div>
        </div>


        <!-- empty state -->
        <div class="empty" v-if="!newSearch && results.length === 0">
            <div class="empty-icon">
                <i class="icon icon-search icon-4x"></i>
            </div>
            <p class="empty-title h5">Pencarian tidak ditemukan</p>
            <p class="empty-subtitle">Silahkan cari kata yang lain</p>

        </div>

    </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {

    data() {
        return{
            newSearch: true,
            results:[],
            isLoading: false,
            keyword: ''
        }
    },

    computed: {
        filterResults() {

            return this.results
                .map(item => {
                    item.judul = item.title.replace('Wp/gor/','')
                    return item
                })
        }
    },

    methods: {
        searching() {
            this.newSearch = true
            this.isLoading = true
            let url = 'https://incubator.wikimedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=Wp/gor/'+this.keyword
            this.$axios.$get(url)
                .then(res => {
                    this.results = res.query.search
                    // console.log(res)
                    this.isLoading = false
                    this.newSearch = false
                })
                .catch((err) => {
                    this.isLoading = false
                    this.newSearch = false
                })
        }
    }
}
</script>

<style scoped>
.card {
    margin-bottom: 5px;
}
.card-link {
    text-decoration:none;
    color: #50596c;
}
</style>
