const p = require("path");
const { faker } = require("@faker-js/faker");
const process = require("process");
const fs = require("fs");

const postsPath = p.join(process.cwd(), "content", "posts");
const authorPath = p.join(process.cwd(), "content", "authors");

function generatePostsPage({ title }) {
  const files = fs.readdirSync(authorPath);
  const author = files[Math.floor(Math.random() * files.length)];
  return `---
title: ${title}
excerpt: ${faker.lorem.paragraph()}
heroImg: ${faker.image.imageUrl()}
date: ${faker.date.recent(800)}
author: content/authors/${author}
---
# ${faker.lorem.word()}

${faker.lorem.paragraphs(4, "\n \r \n")}

## ${faker.lorem.words(5)}

> ${faker.lorem.words(10)}

${faker.lorem.paragraphs(7, "\n \r \n")}

### ${faker.lorem.words(2)}

${faker.lorem.paragraphs(3, "\n \r \n")}

### ${faker.lorem.words(2)}

${faker.lorem.paragraphs(2, "\n \r \n")}

## ${faker.lorem.words(3)}

\`\`\`text
${faker.lorem.lines()}
\`\`\`

`;
}

Array(2000)
  .fill(0)
  .map((_, i) => {
    const name = faker.random.words();
    const fileName =
      name
        .toLowerCase()
        .trim()
        .replace(/\s/g, "-")
        .replace(".", "")
        .replace("/", "")
        .replace("\\", "") + ".mdx";

    const fileContent = generatePostsPage({
      title: name,
    });
    fs.writeFileSync(p.join(postsPath, fileName), fileContent);
  });
