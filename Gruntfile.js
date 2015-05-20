module.exports = function (grunt) {

  grunt.initConfig({
  	typescript: {
	    base: {
	      src: ['js/**/*.ts'],
	      dest: 'js/',
	      options: {
	        module: 'commonjs',
	        target: 'es5'
	      }
	    }
	  },
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.registerTask('build', ["typescript"]);

}