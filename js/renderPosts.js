import posts from '../posts.json' assert { type: 'json' };

const post = document.querySelector('.post__wrapper');
const lists = [];

for (let item in posts['mines']) {
  if (item.startsWith('list')) {
    lists.push(item);
  }
}

console.log(lists);

const renderPost = () => {
  post.innerHTML = `
        <div class="post__info">
            <div class="post__text">
                <h2 class="post__title">${posts['mines']['title']}</h2>
                <p class="post__subtitle">
                    ${posts['mines']['text']}
                </p>
            </div>
            <img src="${posts['mines']['image']}" class="post__image"></img>
        </div>
        <div class="post__content">
            ${lists
              .map(
                (list) => `
                <ul class="post__content-list">
                    <li class="post__content-item item">
                        <h2 class="item__title">${posts['mines'][list]['title']}</h2>
                        <p class="item__subtitle">${posts['mines'][list]['subtitle']}</p>
                        <ul class="item__list">
                            ${posts['mines'][list]['items']
                              .map((item) => {
                                return `
                                    <li class="item__list-point point">
                                        ${item}
                                    </li>
                                `;
                              })
                              .join('')}
                              
                            
                            
                        </ul>
                    </li>
                </ul>
                `,
              )
              .join('')}
        </div>
    `;
};

renderPost();
