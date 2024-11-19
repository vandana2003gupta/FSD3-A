// script.js
const userList = document.querySelector('.user-list');
const sortDropdown = document.querySelector('.sort-dropdown');

// Function to fetch data from GitHub API
async function fetchUsers(sortOption) {
  // ... (fetch data using the GitHub API)
  // ... (parse the JSON response)
  // ... (sort the data based on the sortOption)

  // Clear the user list
  userList.innerHTML = '';

  // Create list items for each user and append them to the list
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.login;
    userList.appendChild(li);
  });
}

// Event listener for the dropdown
sortDropdown.addEventListener('change', () => {
  const selectedOption = sortDropdown.value;
  fetchUsers(selectedOption);
});

// Initial fetch
fetchUsers('default');