const submission = document.getElementById('button');
const list = document.getElementById('list');

submission.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
});

dltButton.addEventListener('click', )

async function getData () {
    const textInput = document.getElementById('textBox').value
    const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=8Mi7QrBAwO84UD7O6RxQJFl2E6XWPc9C&q=${textInput}&limit=1`);

    const imgUrl = res.data.data[0].images.fixed_height.url;
    makeList(imgUrl);
}

function makeList(imgUrl) {
    const newLi = document.createElement('li');
    const newImg = document.createElement('img');
    const newDltBtn = document.createElement('button');
    const newBr = document.createElement('br');

    newDltBtn.addEventListener('click', () => {
        newLi.remove();
    });

    newDltBtn.id = 'deleteBtn';
    newDltBtn.innerText = 'Delete';

    newImg.src = imgUrl;
    newLi.appendChild(newImg);
    newLi.appendChild(newBr);
    newLi.appendChild(newDltBtn);
    list.appendChild(newLi);
}