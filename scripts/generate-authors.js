const p = require("path");
const { faker } = require("@faker-js/faker");
const process = require("process");
const fs = require("fs");

const authorPath = p.join(process.cwd(), "content", "authors");

function generateAuthorPage({ name, img, bio }) {
  return `---
name: ${name}
avatar: ${img}
_template: author
---
${bio}
`;
}

Array(1)
  .fill(0)
  .map((_, i) => {
    const name = faker.name.findName();
    const fileName =
      name.toLowerCase().trim().replace(/\s/g, "-").replace(".", "") + ".md";
    const fileContent = generateAuthorPage({
      name,
      img: faker.image.imageUrl(344, undefined, "profile"),
      bio: faker.lorem.paragraphs(4, "\n \r \n"),
    });
    fs.writeFileSync(p.join(authorPath, fileName), fileContent);
  });
