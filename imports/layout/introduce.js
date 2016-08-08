import './introduce.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

// require('/imports/language')('error');

Template.introduce.onCreated(function() {

});

Template.introduce.onRendered(function() {
	$('.ui.sidebar').sidebar({
		duration: 2000,
		defaultTransition: {
		  computer: { left   : 'overlay' },
		  mobile: { left   : 'overlay' }
		}
	});
});


// Template.introduce.helpers({
//   counter: () => {
//     return Template.instance().counter.get();
//   },
// });

Template.introduce.events({
  'click #titleBar>.toggle': (e, instance) => {
		$('.ui.sidebar').sidebar('toggle');
  },
  'click .sidebar.menu > .item': () => {
    $('.ui.sidebar').sidebar('toggle');
  },
  'click .welcome.menu > .item.tour': () => {
    FlowRouter.go('tour');

  },
  'click .welcome.menu > .item.customer': () => {
    FlowRouter.go('customer');

  },
  'click .welcome.menu > .item.pricing': () => {
    FlowRouter.go('pricing');
  }
});
