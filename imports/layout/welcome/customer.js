import './customer.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

const moment = require('moment');

require('/imports/language')('customer');

Template.customer.helpers({
  ImgNone: (logo) => {
    return !logo ? 'none-logo.jpg' : logo;
  },
  ref: () => {
    return [
      { 
        name: 'Nissin Travel Service Co., Ltd.', 
        logo: 'nissin-travel-logo.jpg', 
        url: 'http://www.nissin-trvl.co.jp/en/company/history.html',
        comment:'Mar. 1975Founded in the capital of 3 million yen. Sep. 1977Increased the capital into 30 million yen.',
        created: moment('01-01-2014').fromNow()
      },
      { 
        name: 'H.I.S. TOURS CO.,LTD.', 
        logo: 'his-logo.jpg', 
        url: 'http://www.his-bkk.com/en/company_profile.php',
        comment:'Offers Air Ticket, Package Tour and accommodation at cheap price / H.I.S.',
        created: moment('01-01-2013').fromNow()
      },
      { 
        name: 'Medsye Travel', 
        logo: 'medsye-logo.jpg', 
        url: 'https://www.similanthailand.com/',
        comment:'Offers Air Ticket, Package Tour and accommodation at cheap price / H.I.S.',
        created: moment('01-01-2013').fromNow()
      },
      { 
        name: 'Journey Ticket', 
        logo: 'journey-ticket-logo.jpg', 
        url: 'http://www.his-bkk.com/en/company_profile.php',
        comment:'ร้านรับจองตั๋วเครื่องบินทั้งภายในและต่างประเทศ ทั่วโลก ทุกสายการบิน รับจัดกรุ๊ปเหมา กรุ๊ปส่วนตัว ดูงาน สัมมนา และจอยทัวร์ตามงบประมาณที่ตรงตามความต้องการค่าาา และเป็นร้านกาแฟสดมีหนังสือพ็อกเก็ตบุ๊ค การ์ตูน นิตยสาร ฟรี wi-fi บริการค่ะ',
        created: moment('01-01-2015').fromNow()
      }
    ];
  }
});

Template.customer.onCreated(() => {
  // counter starts at 0
  
});

Template.customer.onRendered(() => {
	$('.welcome.menu > .item').removeClass('active');
	$('.welcome.menu > .item.customer').addClass('active');
});
