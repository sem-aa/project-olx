const oldPriceEl = document.querySelectorAll(".prod_card-old_price");
console.log(oldPriceEl);  
oldPriceEl.forEach(el=>{
    if(el.textContent !== "") {
    el.classList.add("cross_out") // додає закреслювання на стару ціну 
}
   if(el.textContent === "") {
       el.remove()  //якщо старої ціни нема видаляє пустий елемент
   }
})

