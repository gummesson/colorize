module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'assets/js/app.js']
    },

    uglify: {
      build: {
        src: 'assets/js/app.js',
        dest: 'assets/js/app.min.js'
      }
    },

    cssmin: {
      combine: {
        files: {
          'assets/css/style.min.css': ['assets/css/style.css']
        }
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          src: ['*.html', 'assets/**/*.min.*', 'assets/**/*.ico'],
          dest: '../gh-pages'
        }]
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
  grunt.registerTask('build', ['default', 'copy']);

};
