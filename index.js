const init = () => {

    const form = document.querySelector('form');
    const nameInput = document.querySelector('#nameInput');
    const breedInput = document.querySelector('#breedInput');

    form.addEventListener('submit',e => {
        e.preventDefault();

        fetch("http://localhost:3000/dogs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                dogName: nameInput.value,
                dogBreed: breedInput.value
            })
        })
    })
}

document.addEventListener('DOMContentLoaded',init);

function submitData(name,email) {
        
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    })
    .then(res => res.json())
    .then(json => {
        const newNode = document.createElement('p');
        newNode.textContent = json.id;
        newNode.classList.add("addedId");
        document.querySelector('body').appendChild(newNode);
    })
    .catch(obj => {
        const newNode = document.createElement('p');
        newNode.textContent = obj.message;
        newNode.classList.add("error");
        document.querySelector('body').appendChild(newNode)
    });

    

}