import './customer.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('customer');

Template.customer.onCreated(() => {
  // counter starts at 0
  
});

Template.customer.onRendered(() => {
  $('.app.menu>li').removeClass('active');
	$('.app.menu>li.customer').addClass('active');
});
