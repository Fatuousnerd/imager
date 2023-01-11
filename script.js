var btn= document.getElementById("btn"),
rmv = document.getElementById("rmv"),
contain = document.querySelector(".contain");
//icn = `<i class="material-symbols-outlined">download</i>`;

//Loader
window.addEventListener('load', () => {
  contain.style.display = 'none'
});
    
btn.addEventListener('click', () => {
    var name = document.getElementById("name");
    var nameval = name.value;
    
const container = document.querySelector(".container");
container.innerHTML = ''
       // container.location.reload();
//const cardTag;
function getPhotos(images) {
   images.map(image => {
   const cardTag = `<div class="card">
                        <img src=${image.src.tiny} />
                    </div>`;
     container.innerHTML += cardTag;
   })
}
        const pexels = "https://api.pexels.com/v1/search?query="+nameval;
fetch(pexels,{
  headers: {
    Authorization: "563492ad6f917000010000014061e5d42524467b95e7f27d98d41b00"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })
})

window.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        var name = document.getElementById("name");
    var nameval = name.value;
    
const container = document.querySelector(".container");
container.innerHTML = ''
       // container.location.reload();
//const cardTag;
function getPhotos(images) {
   images.map(image => {
   const cardTag = `<div class="card">
              <img src=${image.src.tiny} />
              ${icn}
         </div>`;
     container.innerHTML += cardTag;
   })
}
        const pexels = "https://api.pexels.com/v1/search?query="+nameval;
fetch(pexels,{
  headers: {
    Authorization: "563492ad6f917000010000014061e5d42524467b95e7f27d98d41b00"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })
    }
})


