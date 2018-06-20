gulp.task("pug-lint", function() {
  const plugin = "gulp-pug-linter";
  const pugLintReporter = function(results) {
    pugLintStylish(results);
    if (results.length > 0) {
      this.emit("error", new util.PluginError(plugin, "Failed with errors"));
    }
  };
  return gulp
    .src("app/views/**/*.pug")
    .pipe(pugLinter())
    .pipe(pugLinter.reporter(pugLintReporter));
});
