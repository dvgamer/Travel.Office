import './customer.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

const moment = require('moment');

require('/imports/language')('customer');

Template.customer.helpers({
  ref: () => {
    return [
    	{ 
    		name: 'Nissin Travel Service Co., Ltd.', 
    		logo: 'pic01.jpg', 
    		author:'คุณนิดา',
    		url: 'http://www.nissin-trvl.co.jp/en/company/history.html',
    		comment:'The hours, minutes and seconds stand as visible reminders that your effort put them all there. ',
    		created: new Date('01-01-2014');
    	}
    ];
  },
});

Template.customer.onCreated(() => {
  // counter starts at 0
  
});

Template.customer.onRendered(() => {
	$('.welcome.menu > .item').removeClass('active');
	$('.welcome.menu > .item.customer').addClass('active');
});
