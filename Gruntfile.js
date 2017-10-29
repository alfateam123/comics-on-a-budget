module.exports = function(grunt){
  grunt.initConfig({
    serve: {
				path: "./public/",
			options: {
				port: 9000,
			}
		}
	});
  grunt.loadNpmTasks('grunt-serve');
}
