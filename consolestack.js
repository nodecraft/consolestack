'use strict';

require('colors');
var replacement = new RegExp(process.cwd(), 'g');
['log', 'warn'].forEach(function(method){
	var old = console[method];
	console.out = old;
	console[method] = function(){
		var stack = (new Error()).stack.split(/\n/);
		if(stack[0].indexOf('Error') === 0){
			stack = stack.slice(1);
		}
		var out = stack[1].trim();
		out = out.replace(replacement, '~');
		if(typeof(out) == 'string'){
			out = out.grey;
		}
		var args = [].slice.apply(arguments).concat([out]);
		return old.apply(console, args);
	};
});