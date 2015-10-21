
Package.describe({
  summary: "A simple tool to define/require modules with dependencies",
  version: "0.1.0",
  name: "deanius:lego",
  git: "https://github.com/deanius/meteor-lego.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.1.0.3");

  api.use(["tracker", "underscore", "amd:manager@0.2.0"]);

  api.addFiles("shared/lego.js", ["client", "server"]);

  api.export("define", ["client", "server"]);
  api.export("require", ["client", "server"]);
});


Package.onTest(function (api) {
  api.use(["amd:manager@0.2.0", "tinytest"]);

  api.add_files("tests/shared/tests.js");
});
