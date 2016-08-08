import './sign.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('signin');
require('/imports/language')('signout');

Template.signin.onCreated(() => {
  // counter starts at 0
  
});
Template.signin.onRendered(() => {

  
});

Template.signout.onCreated(() => {
  // counter starts at 0
  
});
Template.signout.onRendered(() => {

  
});
