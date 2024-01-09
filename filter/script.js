const container = document.querySelector('.post-container');
const loading = document.querySelector('.loader');
let limit = 5;
let pages = 1;
// get data
async function fetchPost() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pages}`);
    const data = await response.json()
    return data;
}
async function displayDom() {
    const posts = await fetchPost();
    posts.forEach(post => {
        const postEl = document.createElement('div');
        console.log(postEl);
        postEl.classList.add('post');
        postEl.innerHTML = `
  <div class="number">
  <span>${post.id}</span>
</div>
<div class="post-tilte">
  <h3>${post.title}</h3>
</div>
<div class="post-info">
  <p class="body">
    ${post.body}
  </p>
</div>
  `
        container.parentElement.append(postEl);
    });
}
displayDom()
// show loading
function showloading() {
    loading.classList.add('show');
    setTimeout(() => {
        setTimeout(() => {
            pages++;
            displayDom();
        }, 300)
        loading.classList.remove('show');
    }, 2000)
}
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showloading()
    }
})