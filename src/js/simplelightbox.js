import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.index.css'


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt' ,
    captionsDelay: 250 ,
    close: true,
});