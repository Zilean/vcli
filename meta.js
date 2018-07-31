module.exports = {
    "prompts": {
        "name": {
            "type"    : "string",
            "required": false,
            "message" : "Project name",
            "default" : "vcli"
        },
        "author": {
            "type"   : "string",
            "message": "Author",
            "default": "Weich"
        },
        "version": {
            "type"    : "string",
            "message" : "Project version",
            "default" : "1.0.0"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new Vue.js project"
        },
        "state": {
            "type": "list",
            "message": "state manage for your app",
            "choices": [
                {
                  "name": "Vuex (https://github.com/vuejs/vuex)",
                  "value": "vuex",
                  "short": "vuex"
                }
            ]
        },
        "port": {
            "type"    : "string",
            "required": false,
            "message" : "client port",
            "default" : 3000
        },
        "prefix": {
            "type"    : "string",
            "required": false,
            "message" : "the host name for Ajax request",
            "default" : ''
        }
    },
    "filters": {
       "src/store/**/*": "state === 'vuex'"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/Zilean/m-vcli.git"
}