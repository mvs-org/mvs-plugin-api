module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            all: {
                options: {
                    browserifyOptions: {
                        standalone: 'Lightwallet'
                    }
                },
                src: ['./index.js'],
                dest: './dist/lightwallet.js',
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                    './dist/lightwallet.js': './dist/lightwallet.js'
                }
            }
        },
        uglify: {
            js: {
                src: ['./dist/lightwallet.js'],
                dest: './dist/lightwallet.min.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['browserify', 'babel', 'uglify']);
};
