/**
 * VAR
 */
var gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'), 	// Склейка файлов;
	uglify = require('gulp-uglifyjs'),	// Минификация JS
	cssmin = require('gulp-cssmin'), 	// Минификация CSS
	sequence = require('run-sequence');

/**
 *	TASK (clean)
 */
gulp.task('clean', function(){
	return gulp.src('./ui/dist', {read: false})
		.pipe(clean());
});

/**
 *	TASK (js files)
 */
gulp.task('js', function(){

	// App
	gulp.src([
		'./ui/**/*.js', 
		'!./ui/page/admin/**/*.js',
		'!./ui/dist/**/*.js',
		'!./ui/semantic/**/*.*'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./ui/dist/js'))
	.pipe(uglify('app.min.js',{
		sourceRoot: '/js',
		basePath: '/ui/dist/js',
 		outSourceMap: 'app.min.js.map'
	}))
	.pipe(gulp.dest('./ui/dist/js'));
		
	// Admin
	gulp.src([
		'./ui/page/admin/**/*.js'
	])
	.pipe(concat('admin.js'))
	.pipe(gulp.dest('./ui/dist/js'))
	.pipe(uglify('admin.min.js',{
		sourceRoot: '/js',
		basePath: '/ui/dist/js',
 		outSourceMap: 'admin.min.js.map'
	}))
	.pipe(gulp.dest('./ui/dist/js'));
});

/**
 *	TASK (css files)
 */
gulp.task('css', function() {

	// Base
	gulp.src(['./app/client/_base/style/css/*.css'])
		.pipe(concat('base.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./public/css/'));

	// Common Admin
	gulp.src(['./app/client/admin/style/sass/**/*.scss'])
		.pipe(concat('admin.css'))
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest('./public/css/'));

	// Common UI
	gulp.src(['./app/client/ui/style/sass/**/*.scss'])
		.pipe(concat('ui.css'))
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest('./public/css/'));

});

/**
 *	TASK (semantic files)
 */
gulp.task('semantic', function() {
	gulp.src(['./ui/semantic/dist/**/*.*'])
	.pipe(gulp.dest('./ui/dist/semantic'));

});

/**
 *	TASK (watch)
 */
gulp.task('watch', function() {
	// Отслеживаем изменения в файлах
	gulp.watch('./ui/**/*.js', ['js']);
});


/**
 *	Build All
 */
// Действия по умолчанию
gulp.task('build', ['clean'], function(done) {
	sequence(['js', 'semantic']);
});