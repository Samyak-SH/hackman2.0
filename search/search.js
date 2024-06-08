let input = document.querySelector(".searchInput");
let submit = document.querySelector(".searchButton");
// let autocomplete = new google.maps.places.Autocomplete(input);


submit.onclick = (event)=>{
    event.preventDefault();
    console.log(input.value);
}
