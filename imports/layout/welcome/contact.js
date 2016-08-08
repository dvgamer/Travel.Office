import './contact.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('contact');

Template.contact.onCreated(() => {
  // counter starts at 0
  
});

Template.contact.onRendered(() => {

});
