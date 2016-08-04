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
		BlazeLayout.render('welcome');
  }
});
 
FlowRouter.notFound = {
  action:function() {
  	if(Meteor) {
  		BlazeLayout.render('app-error');
  	} else {
  		BlazeLayout.render('error');
  	}
  },
};