import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

var reservation = FlowRouter.group({
  prefix: '/reservation',
  action: function(){
    
  }
});

reservation.route('/', {
	name: 'reservation',
  action:function() {
  	Session.set('config.title', 'Reservation');
  	if(Meteor) {
  		BlazeLayout.render('app');
  	} else {
  		BlazeLayout.render('welcome');
  	}
  }
});