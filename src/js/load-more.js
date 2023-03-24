



class LoadMore {

  
    refBtnLoadMore = document.querySelectorAll('.spiner'); 
refDiv = document.querySelectorAll('.spinner-load')

    btnEnableSearch(){ 
        this.refBtnLoadMore[0].disabled = false
 this.refDiv[0].classList.remove('loader')
    }
    btnEnableLoader() { 
        this.refBtnLoadMore[1].disabled = false 
this.refDiv[1].classList.remove('loader')
    }

    btnDisabledSearch(){ 
        this.refBtnLoadMore[0].disabled = true
        this.refDiv[0].classList.add('loader')
    }
    btnDisabledLoader() { 
        this.refBtnLoadMore[1].disabled = true 
       this.refDiv[1].classList.add('loader')
    }
    btnIsHidden() { 
        this.refBtnLoadMore[1].style.visibility = 'hidden';
        
    }
     btnIsShow() { 
        this.refBtnLoadMore[1].style.visibility='visible';
    }
}


export default {LoadMore}