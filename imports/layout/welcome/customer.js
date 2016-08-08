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
	$('.welcome.menu > .item').removeClass('active');
	$('.welcome.menu > .item.customer').addClass('active');
});
