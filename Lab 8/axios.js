let axioss = new Vue({
    el: "#axios",
    data: {
        posts: []
    },
    beforeCreate() {
        axios.get('https://isidea.ru/rgups_data.json').then(result => {
            this.posts = result.data;
        })
    }
});
