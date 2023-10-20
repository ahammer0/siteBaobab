var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src("./*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass',function(){
    browserSync.init({
        server: "./"
    });

    gulp.watch("*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
