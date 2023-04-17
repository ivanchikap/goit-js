const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const apiKeyA = '16975766-b0a48c2723f188a71f6ea56b7';

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

export default {
    page: 1,
    query: '',
    fetchPictures() {
        const search = `'&q='${this.query}&page=${this.page}`
        const pageSize = '&per_page=12'
        const apiKey = `&key=${apiKeyA}`
        return fetch(baseUrl + search + pageSize + apiKey).then(response => response.json()).then(parcedResopnse => {
            this.incrementPage();
            return parcedResopnse;
        });
    },

    get searchQuery(){
        return this.query;
    },
    set searchQuery(string){
         this.query = string;
    },

    incrementPage() {
        this.page += 1;
    },
    resetPage(){
        this.page = 1;
    },
}