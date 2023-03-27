import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import LoadMore from './load-more'
const BTN = new LoadMore.LoadMore()


BTN.btnIsHidden()
class GalleryAPIServise {
 BEST_URL = 'https://pixabay.com/api/';
 KEY = '34368263-756a5eb3a3e360b335b61bac8';
 
    constructor() {
        this.requestApi = '';
        this.page = 1;  
        this.BTN = BTN.btnIsHidden();
    }
 
    
    async fetchGallery() {

        const searchParams = new URLSearchParams({
            per_page: 40,
            image_type: "photo",
            orientation: "horizontal",
            q: this.requestApi,
            page: this.page,
            safesearch: true,
        });

        BTN.btnDisabledSearch()
        try {
            const axi = await axios.get(`${this.BEST_URL}/?key=${this.KEY}&${searchParams}`)
            const responce = axi.data;
        const data = responce
            if (axi.status !== 200) {
                throw new Error(responce.statusText)
             
            }   


          else if (data.hits.length < 40&&data.totalHits>1) {
                
                Notify.info("We're sorry, but you've reached the end of search results.");
                 
                BTN.btnIsHidden()
                return data
            } else if ( !data.totalHits) {
             Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                this.page = 0;
                
            }else{
           console.log(data.hits.length);
            this.incrementPage()
                return data
                
        }
        
                
        } catch(e) {
        console.log(e)
    }
    }
    get request() { 
        return this.requestApi
    }
    set request(newRequest) { 
        this.requestApi = newRequest
    }
    incrementPage() { 
       
        this.page+=1
        
    }
    resetPage() { 
        this.page = 1;
    }
}        


export default { GalleryAPIServise };


