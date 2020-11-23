var app = new Vue({
    el: '#root',
    data: {
        discs: [],
        categories: 'All',
        },
    methods: {

    },

    mounted: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function(risposta) {
                    console.log(risposta);
                    app.discs=risposta.data.response;
                });

    },

})
