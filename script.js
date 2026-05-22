const apikey='aaHnPX84is5jogcGwWdqVho569RCyMaof-cwuslA5g8';
const apiurl='https://api.unsplash.com/search/photos';
const error=document.getElementById('msg');


let currentpage=1;
let currentQuery='';

const searchImages = () => {
    const query = document.getElementById('searchInput').value.trim();
    if(!query){
        error.textContent= "Please enter a search term";
        return;
    }

    error.textContent='';
    currentQuery=query;
    currentpage=1;
    document.getElementById('image-container').innerHTML='';
    fetchImages();
};

const loadMoreImages = () => {
currentpage++;
fetchImages();
};

const fetchImages = () =>{
fetch(`${apiurl}?query=${currentQuery}&per_page=15&page=${currentpage}&client_id=${apikey}`

)

.then(res => res.json())
.then(data => {
    const container=document.getElementById("image-container");
    data.results.forEach(img => {
        const link=document.createElement('a');
        link.href = img.links.html;
        link.target='_blank';
        const image = document.createElement('img');
        image.src = img.urls.small;
        link.appendChild(image);
        container.appendChild(link);
    });
if(data.results.length > 0){
    document.getElementById('loadmorecontainer').style.display='block';
}
else{
    error.innerHTML="<p>No Images Found.Try a different search Term.</p>";
    document.getElementById('loadmorecontainer').style.display='none';
}
})
};





