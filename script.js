let body = document.querySelector('body');
let div = document.querySelector('div');
const awwData = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json());

awwData.then(data => {
    for(let i =0; i < data.data.children.length; i++){
        //console.log(data.data.children[i].data.title);
        let newDiv = document.createElement('div');
        newDiv.append(data.data.children[i].data.title);
        let newImage = document.createElement('img');
        newImage.setAttribute('src', data.data.children[i].data.thumbnail)
        newDiv.append(newImage);
        let newLink = document.createElement('a');
        
        
        //newDiv.append(data.data.children[i].data.thumbnail);
        div.append(newDiv);
        //console.log(data.data.children[i].data.thumbnail)
        //body.append(data.data.children[i].data.thumbnail);
    }
    
})