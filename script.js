let body = document.querySelector('body');

const awwData = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json());

awwData.then(data => {
    for(let i =0; i < data.data.children.length; i++){
        //console.log(data.data.children[i].data.title);
        body.append(data.data.children[i].data.title);
       // body.append(data.data.children[i].data.thumbnail)
    }
    
})