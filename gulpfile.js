const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

// SASS

function _compilar_todo_sass(done) {
    return gulp.src([
        'src/scss/*.scss',
        'node_modules/bootstrap/sass/bootstrap.scss'
    ])
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('public/css'))
    done();
}
exports.compilar_todo_sass = _compilar_todo_sass;

function _compilar_sass(done) {
    return gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('public/css'))
    done();
}
exports.sass = _compilar_sass;

function _actualizar_sass(done) {
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('public/css'))
    done();
}
exports.actualizar_sass = _actualizar_sass;

// JAVASCRIPT

function _compilar_todo_js(done) {
    return gulp.src([
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'src/js/src/*.js'
    ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    done();
}
exports.compilar_todo_js = _compilar_todo_js;

function _compilar_js(done) {
    return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    done();
}
exports.js = _compilar_js;

function _actualizar_js(done) {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js'
    ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    done();
}
exports.actualizar_js = _actualizar_js;

// DEFAULT

function watch() {
    gulp.watch('src/scss/*.scss', _compilar_sass);
    gulp.watch('src/js/*.js', _compilar_js);
}

gulp.task('default', watch);