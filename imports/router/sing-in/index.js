import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

var signin = FlowRouter.group({
  prefix: '/Sign-In',
  action: function(){
    
  }
});

signin.route('/', {
	name: 'reservation',
  action:function() {
  	Session.set('config.title', 'Sign-In Customer');
		BlazeLayout.render('app', { user: 'signin' });
  }
});