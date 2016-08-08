import './tour.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('tour');

Template.tour.onCreated(() => {
  // counter starts at 0
  
});

Template.tour.onRendered(() => {
	$('.welcome.menu > .item').removeClass('active');
	$('.welcome.menu > .item.tour').addClass('active');
});
