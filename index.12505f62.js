(()=>{const o={openModalBtn:document.querySelector("[modal-open]"),closeModalBtn:document.querySelector("[modal-close]"),modal:document.querySelector("[data-modall]")};function e(){o.modal.classList.toggle("is-hiddenlo")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})(),(()=>{const o={openModalBtn:document.querySelector("[locdata-modal-opening]"),closeModalBtn:document.querySelector("[locdata-modal-close]"),modal:document.querySelector("[locdata-modal]")};function e(){o.modal.classList.toggle("locis-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})(),window.onload=()=>{window.onscroll=function(o){let e=window.scrolly;e>300&&(progressbar(),scrollbaranimation(),e=null)};const o=document.querySelector(".isshowbtn");window.onscroll=()=>{window.scrollY>300?o.classList.remove("isshowbtn__hide"):window.scrollY<300&&o.classList.add("isshowbtn__hide")},o.onclick=()=>{window.scrollTo(0,0)}},(()=>{const o={openModalBtn:document.querySelector("[buy-now-open]"),closeModalBtn:document.querySelector("[buy-now-close]"),modal:document.querySelector("[buy-now-modal]")};function e(){o.modal.classList.toggle("buy-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})(),(()=>{const o={openModalBtn:document.querySelector("[ingredients-modal-open]"),closeModalBtn:document.querySelector("[ingredients-modal-close]"),modal:document.querySelector("[ingredients-modal]")};function e(){o.modal.classList.toggle("ingredients-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})();
//# sourceMappingURL=index.12505f62.js.map