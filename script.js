let body = document.querySelector('body');
let div = document.querySelector('div');
let btn = document.querySelector('button');
let input = document.querySelector('input');

const awwData = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json());

let maxCount = 10;
awwData.then(data => {
    for(let i =0; i < maxCount; i++){
        let newDiv = document.createElement('div');
        let newImage = document.createElement('img');
        newImage.classList.add('image');
        newImage.setAttribute('src', data.data.children[i].data.thumbnail)
        newDiv.append(newImage);
        newDiv.append(data.data.children[i].data.title);
        let newLink = document.createElement('a');
        newLink.innerHTML = " Click me";
        newLink.href = "https://reddit.com" + data.data.children[i].data.permalink;
        newLink.target = "_blank"; // opens in a new tab
        newDiv.append(newLink);   
        div.append(newDiv);

    }
    
})
.catch(e => {
    console.log(e);
})

btn.addEventListener('click', () => {
    let children = div.childNodes;
    console.log(children);
    let childrenLength = children.length
    console.log(childrenLength);
    for(let i = 0; i < childrenLength; i++){
        div.firstChild.remove();
    }
    let entered = input.value;
    const newEntry = fetch(`https://www.reddit.com/r/${entered}/.json`)
.then(res => res.json());

let maxCount = 10;
newEntry.then(data => {
    for(let i =0; i < maxCount; i++){
        let newDiv = document.createElement('div');
        let newImage = document.createElement('img');
        newImage.classList.add('image');
        newImage.setAttribute('src', data.data.children[i].data.thumbnail)
        newDiv.append(newImage);
        newDiv.append(data.data.children[i].data.title);
        let newLink = document.createElement('a');
        newLink.innerHTML = " Click me";
        newLink.href = "https://reddit.com" + data.data.children[i].data.permalink;
        newLink.target = "_blank"; 
        newDiv.append(newLink);   
        div.append(newDiv);
    }
})
.catch(e => {
    console.log(e);
})

})