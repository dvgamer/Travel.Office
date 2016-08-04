import './welcome.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

// require('/imports/language')('error');

Template.welcome.onCreated(function helloOnCreated() {

});

// Template.welcome.helpers({
//   counter: () => {
//     return Template.instance().counter.get();
//   },
// });

// Template.welcome.events({
//   'click button': (event, instance) => {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
