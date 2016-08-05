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
    BlazeLayout.render('introduce');
  }
});
 

FlowRouter.route('/Feature', {
  name: 'feature',
  action:function() {
    Session.set('config.title',  );
    BlazeLayout.render('introduce');
  }
});
 

FlowRouter.route('/Pricing', {
  name: 'pricing',
  action:function() { 
    Session.set('config.title', null);
    BlazeLayout.render('introduce');
  }
});
 
FlowRouter.route('/Pricing/Order', {
  name: 'order',
  action:function() {
    Session.set('config.title', null);
    BlazeLayout.render('introduce');
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