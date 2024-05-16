const articles = [
  {
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus.",
  },
  {
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus.",
  },
  {
    title: "Post 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus. Quisquam quod, voluptates, quae, quos quia quibusdam quidem voluptatum laboriosam doloremque nemo doloribus.",
  },
];
const main = document.querySelector("#main");

articles.forEach((article) => {
  const articleElement = document.createElement("article");
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("p");

  articleElement.classList.add("article");
  titleElement.classList.add("article__title");
  contentElement.classList.add("article__content");

  titleElement.textContent = article.title;
  contentElement.textContent = article.content;

  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);

  main.appendChild(articleElement);
});
