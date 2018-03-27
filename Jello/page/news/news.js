var app = require('app');
var api = require('app/api');

module.exports = function (opt) {
	var method = {
		doComment: function(content) {
	      var url = api.addComment;
	      var param = {
	        
	      }
	      console.log(param)
	      var callback = function(res) {
	      	console.log(res)
	      }
	      app.ajax(url, 'post', param, callback)
	    },
	}
}