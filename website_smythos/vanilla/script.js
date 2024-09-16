// script.js

document.getElementById('loadDataBtn').addEventListener('click', fetchData);

function fetchData() {
  // Simulating an API call (you can replace this URL with the actual API)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      const dataList = document.getElementById('dataList');
      dataList.innerHTML = ''; // Clear existing data
      
      data.slice(0, 5).forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.id}: ${item.title}`;
        dataList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}