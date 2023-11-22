let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
return v.json();
}).then((contests)=>{
    console.log(contests);
    ihtml=""
    for(item in contests)
    {
        console.log(contests[item])
        ihtml+=`
        <div class="card" style="width: 20rem;margin-left:6rem;margin-top:5rem">
        <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">status is ${contests[item].status}</p>
          <p class="card-text">In 24 hrs ? ${contests[item].in_24_hours}</p>
          <p>starts at : ${contests[item].start_time}
          <p>starts at : ${contests[item].end_time}
          <a href="${contests[item].url}" style="margin-top:1rem;" class="btn btn-primary">visit page</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML=ihtml
})