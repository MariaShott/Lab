let posts_loading = document.querySelectorAll(".posts_loading");

const Items = categorie => {
    let items = document.querySelectorAll(".themas_post[categorie]");

    items.forEach(item => {
        let categorie = item.dataset.categories.split(', ');

        let result = categorie.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block"))
            item.classList.remove("block")
        else
            item.classList.remove("hide")

        item.classList.add(result ? "block" : "hide");
    })
};

categories_button.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});
