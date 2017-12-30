module.exports = plop => {
  plop.setGenerator('package', {
    description: 'Create a new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the new package',
      },
      {
        type: 'input',
        name: 'description',
        message: 'what does this package do?',
      },
      {
        type: 'input',
        name: 'author',
        message: 'author information for this package',
      },
    ],
    actions: data => [
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/package.json',
        templateFile: 'plop-templates/package/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/index.js',
        templateFile: 'plop-templates/package/index.js.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/README.md',
        templateFile: 'plop-templates/package/README.md.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/.gitignore',
        templateFile: 'plop-templates/package/.gitignore.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/.npmignore',
        templateFile: 'plop-templates/package/.npmignore.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{kebabCase name}}/src/.gitkeep',
      },
    ],
  })
}
