module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),   
        less: {
            development: {
                files: {
                    './src/styles/main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    './dist/styles/main.min.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        }    
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['less', 'uglify']);

}