// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe('Teste se funciona a URL passada', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const result = await getRepos(url);
  expect(result).toContain('sd-01-week4-5-project-todo-list');
})