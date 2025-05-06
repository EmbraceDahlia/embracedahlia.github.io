class Exercise3 {
    #movies = new Map();
    //key is the genre: string, value is array of movies  
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] } 

    add_genre(genre) {
        if (this.#movies.has(genre)) return false;
        this.#movies.set(genre, []);
        console.log("Added genre", genre);
        return true;
    }

    add_movie_in_genre(genre, new_movie) {
        let g = this.#movies.get(genre);
        if (!g || g.find(g => g.id === new_movie.id)) return false;
        g.push(new_movie);
        console.log("Added movie", new_movie);
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        let g = this.#movies.get(genre);
        if (!g) return false;
        let m = g.find(g => g.id === movie_id);
        if (!m) return false;
        m.title = new_title;
        console.log("Updated title", new_title);
        return true;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        let g = this.#movies.get(genre);
        if (!g) return false;
        let index = g.findIndex(m => m.id === movie_id);
        if (index == -1) return false;
        g.splice(index, 1);
        console.log("Deleted")
        return true;
    }

    get_movie_title_by_id(genre, movie_id) {
        let g = this.#movies.get(genre);
        if (g) {
            let m = g.find(g => g.id === movie_id);
            if (m) return m.title;
        }
        return '';
    }

    get_all_movies() {
        return this.#movies;
    }
}
let ex = new Exercise3();
ex.add_genre("Thriller");
ex.add_movie_in_genre("Thriller", { id: 1, title: "The American" });
ex.add_movie_in_genre("Thriller", { id: 2, title: "Arcadian" });
ex.add_movie_in_genre("Thriller", { id: 2, title: "24 Hours" });
ex.add_genre("Bromance");
ex.add_movie_in_genre("Bromance", { id: 1, title: "TU" });
ex.add_movie_in_genre("Bromance", { id: 2, title: "Testing" });
ex.update_movie_title_by_genre_and_movie_id("Bromance", 1, "The Untamed");
ex.delete_movie_by_genre_and_movie_id("Bromance", 2);
console.log("Thriller movie 1:",ex.get_movie_title_by_id("Thriller",1))
console.log(ex.get_all_movies());