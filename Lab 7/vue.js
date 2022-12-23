let app = new Vue({
    el: "#vue",
    data: {
        author: '',
        posts: data
    },
    computed:{
        filterPosts: function(){
            let author = this.author;
            
            return this.posts.filter(function (elem) {
             
                if(author==='') {
                    return true;
                }
                else {
                    if (author === elem.author) {
                        profile.forEach(it => {
                            if (it.login === elem.author) {
                                alert("Имя автора: " + it.name);
                                alert("Логин автора: " + it.login);
                                alert("Подписчиков автора: " + it.followers);
                                alert("Подписок автора: " + it.follow);
                                alert("Постов автора: " + it.posts);
                            }
                        });
                    }

                    return elem.author.indexOf(author) > -1;
                }
            })
        }
    }
});
