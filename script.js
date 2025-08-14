const arr = ["style.css", "style2.css"]; // arayen som indeholder alle stylesheets
let idx = 0;

document.addEventListener('click', (e) => {

    // if the click is clicked at the header
    const extra1 = document.querySelector('.extra1');
    if(!extra1.contains(e.target)) {
        e.preventDefault();

        // increment the index and set the new stylesheet to "styles/" + arr[idx]
        idx = (idx + 1) % arr.length;

        document.querySelector('link[rel="stylesheet"]').href = "styles/" + arr[idx];
    }
})

function fetchData() {
    fetch('./data.json')
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('extra1')) {
        e.preventDefault();
        fetchData();
    }
})