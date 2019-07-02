module.exports = function(plop) {
  plop.setGenerator("Fauna", {
    description: "Set up a fauna file",
    prompts: [
      {
        type: "input",
        name: "folder",
        message: "What would you like to name your fauna folder?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/{{folder}}/fauna.ts",
        templateFile: "plop-templates/fauna.ts"
      },
      {
        type: "add",
        path: ".env-fauna",
        templateFile: "plop-templates/.env-fauna"
      }
    ]
  });
};
