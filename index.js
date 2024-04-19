function cityForm(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-city");
   let cityElement=document.querySelector("#city");
   cityElement.innerHTML = searchInput.value;
}
let searchElement=document.querySelector("#search-form");
searchElement.addEventListener("submit",cityForm);
