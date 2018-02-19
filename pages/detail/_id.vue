<template>
    <div class="container grid-xs">
        <br>
        <div class="loading loading-lg" v-if="isLoading"></div>
        <div class="card">
            <div class="card-image" v-if="showImage">
                <img :src="imageUrl" class="img-responsive">
            </div>
            <div class="card-header">
                <div class="card-title h5">{{ judul }}</div>
                <div class="card-subtitle text-gray">https://incubator.wikimedia.org/wiki/{{ kode }}</div>
            </div>
            <div class="card-body">
                <div v-html="cleanDeskripsi"></div>
            </div>
            <div class="card-footer">
                <a :href="'https://incubator.wikimedia.org/wiki/'+kode" target="_blank" class="btn btn-primary">View on Wikimedia</a>
            </div>
        </div>
    </div>
</template>

<script>
import md5 from 'js-md5'
var hashmd5 = md5
export default {
    data() {
        return{
            judul:'',
            kode:'',
            showImage: false,
            images:[],
            deskripsi:'',
            isLoading: false,
        }
    },
    created() {
        this.fetchDetail()
    },

    computed: {
        imageUrl() {
            let baseUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/'

                let fileName = this.images[0]
                let hash = hashmd5(fileName);
                let var1 = hash.slice(0,1)+'/'
                let var2 = hash.slice(0,2)+'/'

                return baseUrl+var1+var2+fileName+'/500px-'+fileName;

        },

        cleanDeskripsi() {
            let deskripsi = this.deskripsi.replace(/<\/*a.*?>/g,'')
            return deskripsi
        }
    },

    methods: {
        fetchDetail() {
            this.isLoading = true
            let url = 'https://incubator.wikimedia.org/w/api.php?origin=*&action=parse&format=json&pageid='+this.$route.params.id
            this.$axios.$get(url)
                .then(res => {
                    // console.log(res)
                    if(res.parse.images.length > 0) {
                        this.showImage = true
                    }
                    this.judul = res.parse.title.replace('Wp/gor/','')
                    this.kode = res.parse.title
                    this.images = res.parse.images
                    this.deskripsi = res.parse.text["*"];
                    this.isLoading = false
                })
                .catch((err) => {
                    console.log('err ',err)
                    this.isLoading = false
                })
        }
    }
}
</script>

<style>
.thumbinner{
    display: none;
}
.mw-editsection{
    display: none;
}

td > img{
    display: none;
}
</style>
