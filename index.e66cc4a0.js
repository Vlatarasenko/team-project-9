!function(){var o={openModalBtn:document.querySelector("[modal-open]"),closeModalBtn:document.querySelector("[modal-close]"),modal:document.querySelector("[data-modall]")};function e(){o.modal.classList.toggle("is-hiddenlo")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}(),function(){var o={openModalBtn:document.querySelector("[locdata-modal-opening]"),closeModalBtn:document.querySelector("[locdata-modal-close]"),modal:document.querySelector("[locdata-modal]")};function e(){o.modal.classList.toggle("locis-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}(),window.onload=function(){window.onscroll=function(o){var e=window.scrolly;e>300&&(progressbar(),scrollbaranimation(),e=null)};var o=document.querySelector(".isshowbtn");window.onscroll=function(){window.scrollY>300?o.classList.remove("isshowbtn__hide"):window.scrollY<300&&o.classList.add("isshowbtn__hide")},o.onclick=function(){window.scrollTo(0,0)}},function(){var o={openModalBtn:document.querySelector("[buy-now-open]"),closeModalBtn:document.querySelector("[buy-now-close]"),modal:document.querySelector("[buy-now-modal]")};function e(){o.modal.classList.toggle("buy-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}(),function(){var o={openModalBtn:document.querySelector("[ingredients-modal-open]"),closeModalBtn:document.querySelector("[ingredients-modal-close]"),modal:document.querySelector("[ingredients-modal]")};function e(){o.modal.classList.toggle("ingredients-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}();
//# sourceMappingURL=index.e66cc4a0.js.map