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
  $('.app.menu>li').removeClass('active');
	$('.app.menu>li.pricing').addClass('active');
});
