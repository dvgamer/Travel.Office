import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

var admin = FlowRouter.group({
  prefix: '/admin',
  action: function(){

  }
});


admin.route('/', {
	name: 'admin',
  action:function() {
  	Session.set('config.title', 'Administrator');
  	if(Meteor) {
  		BlazeLayout.render('app');
  	} else {
  		BlazeLayout.render('welcome');
  	}
  }
});