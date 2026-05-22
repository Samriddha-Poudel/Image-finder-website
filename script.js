const apikey='aaHnPX84is5jogcGwWdqVho569RCyMaof-cwuslA5g8';
const apiurl='https://api.unsplash.com/photos';
const error=document.getElementById('msg');


let currentpage=1;
let currentQuery='';

const searchImages = () => {
    const query = document.getElementById('seachInput').value.trim();
}

const fetchImages = () =>{
fetch(`${apiurl}?query=${currentQuery}&per_page=15&page=${currentpage}&client_id=${apikey}`

)

.then(res => res.json())
.then(data => {
    const container=document.getElementById("image-container");
    data.resutl.forEach(img => {
        const link=document.createElement('a');
        link.href = img.links.html;
        link.target='_blank';
        const image = document.creatElement('img');
        image.src = img.urls.small;
        link.appendChild(image);
        container.appendChild(link);
    });
if(data.resutls.length > 0){
    document.getElementById('loadmorecontainer').style.display='block';
}
else{
    error.innerHTML="<p>No Images Found.Try a different search Term.</p>";
    document.getElementById('loadmorecontainer').style.display='none';
}
})
};





