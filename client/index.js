import { Meteor } from 'meteor/meteor';
import { Session }  from 'meteor/session';

import '../imports/language';
import '../imports/layout';
import '../imports/router';
import '../imports/stylesheet'; 

const Q 			= require('q');

let SignalConnected = true;
const IdSignal = function(){
	let io = Meteor.status();
	if(SignalConnected != io.connected) {
		if(io.connected) {
			// hide preload
		} else { 
			// show preload
		}
		SignalConnected = io.connected;
	}
}

Meteor.setInterval(IdSignal, 3000);

Session.setDefault('config.title', 'Administrator');

Session.setDefault('session.time', 0);
Session.setDefault('session.id', null);
Session.setDefault('session.client', null);
 
Meteor.startup(() => {
	document.title = `${Session.get('config.title') ? `${Session.get('config.title')} - ` : ``}Midback Office™`;;
});


window.T = {
	Call : function(name, param){
		let def = Q.defer();
	  let result = Meteor.subscribe(name, param, function(data) {
	  	console.log(result, data) ;
	    if(result) {
	    	// result[0]
	    	def.resolve(result);
	    } else {
	    	def.resolve();
	    }
	  });
    return def.promise;
	},
	Timestamp : parseInt((new Date().getTime() / 1000)),
	Storage: function(key, setValue) {
		var getValue = null;
		try {
			if(typeof setValue === 'undefined') {
				getValue = window.localStorage.getItem(key);
				try { getValue = JSON.parse(getValue); } catch (e) { }
			} else if (typeof setValue === 'object') {
				setValue = JSON.stringify(setValue);
				window.localStorage.setItem(key, setValue.toString());
			} else {
				window.localStorage.setItem(key, setValue);
			}
		} catch (e) { console.log('catch', e);/* Browser not support localStorage function. */ }
		return getValue;
	},
	StorageClear: function(key){
		try {
			if(key == undefined) {
				$.each(window.localStorage, function(key,value){ window.localStorage.removeItem(key); }); 
			} else {
				localStorage.removeItem(key);
			}
		} catch (e) { /* Browser not support localStorage function. */ }
	}
}
