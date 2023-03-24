// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMore from './load-more'
const BTN = new LoadMore.LoadMore()


BTN.btnIsHidden()
class GalleryAPIServise {
 BEST_URL = 'https://pixabay.com/api/';
 KEY = '34368263-756a5eb3a3e360b335b61bac8';
 
    constructor() {
        this.requestApi = '';
        this.page = 1;  
    }
 
    
    async fetchGallery() {

const searchParams = new URLSearchParams({
per_page:40,
image_type:"photo",
orientation:"horizontal",  
    });



 BTN.btnDisabledSearch()
        try {
            
            const responce = await fetch(`${this.BEST_URL}/?key=${this.KEY}&q=${this.requestApi}&${searchParams}&page=${this.page}`)
        
            if (!responce.ok) {
                throw new Error(responce.statusText)
            }
            const data = await responce.json()
            console.log(this.page);
            console.log(this.requestApi);
             if (data.totalHits === this.page||!data.totalHits) { 
              
                 BTN.btnIsHidden()
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