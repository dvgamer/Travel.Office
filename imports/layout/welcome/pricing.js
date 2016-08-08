import './pricing.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('pricing');

Template.pricing.onCreated(() => {
  // counter starts at 0
  
});

Template.pricing.onRendered(() => {
	$('.welcome.menu > .item').removeClass('active');
	$('.welcome.menu > .item.pricing').addClass('active');
});
