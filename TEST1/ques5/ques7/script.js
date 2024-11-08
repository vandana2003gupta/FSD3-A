
const username = 'your_username';
const password = 'your_password';

if (username === 'your_username' && password === 'your_password') {
    document.querySelector('.login-panel').style.display = 'none';
    document.querySelector('.dashboard-container').style.display = 'block';
} else {
    alert('Invalid login details.');
}

async function fetchGitHubUsers() {
    try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();

        data.sort((a, b) => {
            if (document.getElementById('sort-by').value === 'alphabetical') {
                return a.login.localeCompare(b.login);
            } else if (document.getElementById('sort-by').value === 'followers') {
                return b.followers - a.followers;
            } else {
                return 0;
            }
        });

        const top10Users = data.slice(0, 10);

        displayUsers(top10Users);
    } catch (error) {
        console.error('Error fetching GitHub users:', error);
        alert('Failed to fetch GitHub users. Please try again later.');
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = user.html_url;
        a.textContent = user.login;
        li.appendChild(a);
        userList.appendChild(li);
    });
}

document.getElementById('sort-by').addEventListener('change', () => {
    fetchGitHubUsers();
});

document.querySelector('.logout').addEventListener('click', () => {
    window.location.href = 'login.html';
});

fetchGitHubUsers(); 