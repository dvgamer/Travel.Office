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
    BlazeLayout.render('introduce', { panel: 'tour' });
  }
});
 

FlowRouter.route('/Our-Customer', {
  name: 'customer',
  action:function() {
    Session.set('config.title', null);
    BlazeLayout.render('introduce', { panel: 'customer' });
  }
});
 

FlowRouter.route('/Pricing', {
  name: 'pricing',
  action:function() { 
    Session.set('config.title', null);
    BlazeLayout.render('introduce', { panel: 'pricing' });
  }
});
 
FlowRouter.route('/Contact-us', {
  name: 'us',
  action:function() {
    Session.set('config.title', null);
    BlazeLayout.render('introduce', { panel: 'contact' });
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