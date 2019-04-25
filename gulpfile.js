var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify',async function(){
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
})