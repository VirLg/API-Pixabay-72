import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMore from './js/load-more'
import API from './js/api-service'



const refForm = document.querySelector('#search-form')
const refBtnSearch = refForm.lastElementChild
const refBgContainer = document.querySelector('.bg-container')
const refDivGallery = refBgContainer.firstElementChild
const refBTNLoadMore=document.querySelector('.load-more')

refForm.addEventListener('submit', handleForm)
refBTNLoadMore.addEventListener('click', handleLoadMore)

const GalleryAPIServise = new API.GalleryAPIServise()
const BTN = new LoadMore.LoadMore()

//  Notify.info("We're sorry, but you've reached the end of search results.")  
"We're sorry, but you've reached the end of search results."

//  Notify.info("We're sorry, but you've reached the end of search results.") 



async function handleForm(evt) { 
    evt.preventDefault()
  const serchInput = evt.target.elements.searchQuery.value.trim()
    GalleryAPIServise.resetPage()
  
    if (!serchInput) {
        return
    } 
  GalleryAPIServise.request = serchInput; 
  
    BTN.btnDisabledLoader()
    BTN.btnIsShow()
  refDivGallery.innerHTML = ''
  marcupSet(await GalleryAPIServise.fetchGallery())  

}  
          function handleLoadMore() { 
  BTN.btnDisabledLoader()
  
 marcupSet( GalleryAPIServise.fetchGallery()) 
console.log( GalleryAPIServise.fetchGallery());
}

function marcupSet(arr) {
  
  if (!arr.hits.length ?? !arr) {
   
  
    BTN.btnIsHidden()
    BTN.btnIsShowSearch()
    return
  } else {   
  
    const marcup = arr.hits.map(({ largeImageURL, previewURL, likes, views, comments, downloads, tags }) => {
     
     return ` 
          <div class="photo-card">
          <div class="thumb">
          <a href="${largeImageURL}"><img src="${previewURL}" alt="" title="" loading="lazy"/></a> 
          </div>
          <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
           <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
          <p class="info-item">
            <b>Tags: ${tags}</b>
          </p>
          </div>
          </div>
        `}).join('');
  const markupPagination =  refDivGallery.insertAdjacentHTML('beforeend', marcup)
         
  BTN.btnEnableLoader()
  BTN.btnEnableSearch()
    return galleryPagination(markupPagination)  
}   
}
function galleryPagination(markupPagination) { 
const gallery = new SimpleLightbox('.gallery a',
    {
        navText: ['←', '→'],
        captionsData: 'alt',
        animationSpeed: 1800,
        animationSlide: true,
        // swipeTolerance:50,
        // fadeSpeed:1200,
        captionDelay: 250,
    }
);   
}   

const a = document.body;
a.style.backgroundColor = "azure"



 