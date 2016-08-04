import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

import './admin';

import './reservation';
import './account';

FlowRouter.route('/', {
  name: 'main',
  action:function() {
    Session.set('config.title', null);
		BlazeLayout.render('welcome');
  }
});
 
FlowRouter.notFound = {
  action:function() {
    Session.set('config.title', 'NotFound');
  	if(Meteor) {
  		BlazeLayout.render('app-error');
  	} else {
  		BlazeLayout.render('error');
  	}
  },
};