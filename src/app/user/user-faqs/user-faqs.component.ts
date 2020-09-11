import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-faqs',
  templateUrl: './user-faqs.component.html',
  styleUrls: ['./user-faqs.component.scss']
})
export class UserFaqsComponent implements OnInit {

  faqs = [
    {
    question: ' 01 How do I make a Pickbids payment on a purchase with the Merchant? ',
    answer: `The Payment of the customer can be paid directly at the Merchant's counter.`
  },
  {
    question: ' 02 How do I redeem the offer? ',
    answer: `Firstly, select your preferred offer and then unlock the offer on the Pickbids app or on the website later you
     will be receiving a unique redemption code to redeem the offer at the counter.`
  },
  {
    question: ' 03 What are the modes of the bill payment? ',
    answer: `Payment of the bills can be paid on all the major platforms which are available at the 
    Merchant's counter such as Cash/Debit Card/ Credit Card and Wallet payments.`
  },
  {
    question: ` 04 Can the same redemption code be used multiple times at the Merchant's counter? `,
    answer: `No, the redemption code cannot be used multiple times as the counter 
    as Pickbids redemption codes are unique on every offer.`
  },
  {
    question: ' 05 How do I contact with regards to any issue related to services or products with Pickbids? ',
    answer: `Pickbids customers can shoot us a mail to our support team at support@pickbids.com or can get in touch with the concerned person at the Merchant's counter in queries related to issues with services or with the products.`
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
