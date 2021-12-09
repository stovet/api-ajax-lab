let body = document.querySelector('body');
let div = document.querySelector('div');
const awwData = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json());

awwData.then(data => {
    for(let i =0; i < data.data.children.length; i++){
        let newDiv = document.createElement('div');
        newDiv.append(data.data.children[i].data.title);

        let newImage = document.createElement('img');
        newImage.classList.add('image');
        newImage.setAttribute('src', data.data.children[i].data.thumbnail)
        newDiv.append(newImage);

        let newLink = document.createElement('a');
        newLink.innerHTML = "click me";
        newLink.href = "https://reddit.com" + data.data.children[i].data.permalink;

        newDiv.append(newLink);   
        div.append(newDiv);

    }
    
})