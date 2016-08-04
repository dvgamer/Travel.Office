import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

import './app.js';

// Import to load these templates

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  name: 'main',
  action:function() {
    BlazeLayout.render('app');
  }
});