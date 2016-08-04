import './account.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('account');

Template.account.onCreated(() => {
  // counter starts at 0
  
});

Template.account.onRendered(() => {
  $('.app.menu>li').removeClass('active');
	$('.app.menu>li.account').addClass('active');
});

// Template.mainmenu.events({
//   'click .group': (e, instance) => { 
//   	$('.app.menu>li').removeClass('active');
//   	$(e.currentTarget).addClass('active');
//   },
//   'click .reservation': (e, instance) => {
//   	$('.app.menu>li').removeClass('active');
//   	$(e.currentTarget).addClass('active');
//   },
//   'click .account': (e, instance) => {
//   	$('.app.menu>li').removeClass('active');
//   	$(e.currentTarget).addClass('active');
//   },
// });





