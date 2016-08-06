import './introduce.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

// require('/imports/language')('error');

Template.introduce.onCreated(function() {

});

Template.introduce.onRendered(function() {

});


// Template.introduce.helpers({
//   counter: () => {
//     return Template.instance().counter.get();
//   },
// });

Template.introduce.events({
  'click #titleBar>.toggle': (e, instance) => {
		$('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
  },
});
