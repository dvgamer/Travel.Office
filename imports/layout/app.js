import './app.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

// require('/imports/language')('error');

Template.app.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
	Session.setDefault('config.page.start', null);
	Session.setDefault('config.page', null);
	Session.setDefault('config.language', 'en-EN')
});

Template.app.helpers({
  counter: () => {
    return Template.instance().counter.get();
  },
});

Template.app.events({
  'click button': (event, instance) => {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
