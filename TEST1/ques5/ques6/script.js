
document.getElementById('sort-by').addEventListener('change', () => {
    const sortBy = document.getElementById('sort-by').value;
    const userList = document.getElementById('user-list');
    if (sortBy === 'alphabetical') {
        userList.innerHTML = '';
    } else if (sortBy === 'followers') {
        userList.innerHTML = '';
    }
});

document.querySelector('.logout').addEventListener('click', () => {
    window.location.href = 'login.html';
});