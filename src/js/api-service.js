import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
    per_page:40,
    image_type:"photo",
    orientation: "horizontal",
    q: this.requestApi,  
    page: this.page,
    safesearch:true,
    });



 BTN.btnDisabledSearch()
        try {
            
            const responce = await fetch(`${this.BEST_URL}/?key=${this.KEY}&${searchParams}`)
        
            if (!responce.ok) {
                throw new Error(responce.statusText)
            }
            const data = await responce.json()
            console.log(this.page);
            console.log(this.requestApi);
            console.log(data.totalHits);
            
            if (data.totalHits <= 40) { 
                Notify.info("We're sorry, but you've reached the end of search results.") 
                BTN.btnIsHidden()
            }else if (data.totalHits === this.page || !data.totalHits) {
             
               
                this.page = 0;
                
            } 
            this.incrementPage()
                return data
                
        } catch (e) { 
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