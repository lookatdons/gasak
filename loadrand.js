// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load posts function
function loadPosts() {
    // Assume `posts` is an array containing the post data
    let posts = getPosts(); // Fetch or reference your posts here

    // Shuffle the posts
    posts = shuffleArray(posts);

    // Clear existing posts
    const postContainer = document.getElementById('data-card-post');
    postContainer.innerHTML = '';

    // Render the shuffled posts
    posts.forEach(post => {
        const postHTML = `
        <div class="ab cm" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <div class="hy bg hz ia ib ic">
                <meta itemprop="position" content="1">
                <div itemprop="item" class="bg l" content="${post.url}">
                    <article>
                        <div class="li l">
                            <div class="bg dk">
                                <div class="l">
                                    <div class="bg l">
                                        <div role="link" data-href="${post.url}" tabindex="0" style="position: relative; display: flex;">
                                            <div class="bg lj lk ll lm">
                                                <div class="ab">
                                                    <div class="ln lo lp lq lr ab q"></div>
                                                </div>
                                                <div class="ab">
                                                    <div class="l ck fv">
                                                        <div class="lv lw lx ly lz ma mb mc md me">
                                                            <a itemprop="url" class="af ag ah ai aj ak al am an ao ap aq ar as at" rel="noopener follow" href="${post.url}">
                                                                <h2 itemprop="name" class="be mf mg mh mi mj mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne hd hf hg hi hk bj">${post.title}</h2>
                                                                <div class="nf">
                                                                    <h3 class="be b fx z hd ng hf hg nh hi hk dn">${post.description}</h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        `;
        postContainer.insertAdjacentHTML('beforeend', postHTML);
    });
}

// Call the loadPosts function when the page loads or when the "Load More" button is clicked
document.addEventListener('DOMContentLoaded', loadPosts);
document.getElementById('loadmore').addEventListener('click', loadPosts);
