module.exports = function (grunt) {
  grunt.initConfig({

      //package.jsonを取得
    pkg: grunt.file.readJSON('package.json'),

    image: {
      static: {
        files: { 
        }
      },
      dynamic: {
        files: [{
          expand: true,
            cwd: 'img_source/', 
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'img/'
        }]
      }
    },
    sass: {
      dist: {
        files: {
            "css/style.css": "scss/style.scss"
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    watch: {
      sass: {
        //変更を監視するファイルを指定
        files: ['scss/*.scss'],
        //変更されたらどのタスクを実行するか指定
        tasks: [ 'sass' ]
      }
    }
  });
  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};