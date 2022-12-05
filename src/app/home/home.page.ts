import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RouterModule, Routes, Router } from '@angular/router';
// import {DoorbellPage} from ''
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  @ViewChild(IonModal) modal: IonModal | undefined;

  clickme() 
  {fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! Somebody is at the door')}

  // sixdigitpin: string;

features: any[] = 
[
  {id: 1, name: 'Door Bell', src: 'assets/icons/doorbell-icon.png', background: 'rgba(27,150,181, 0.2)', page: ''},
  {id: 2, name: 'Unlock', src: 'assets/icons/lock.png', background: 'rgba(106,100,255, 0.2)', page: ''},
  {id: 3, name: 'Contact Us', src: 'assets/icons/phone-call.png', background: 'rgba(255, 196, 9, 0.2)', page: ''},
  {id: 4, name: 'Delivery', src: 'assets/icons/deliveryman.png', background: 'rgba(27,150,181, 0.2)', page: ''}, //rgba(color, shade)
  // {id: 5, name: 'Delivery', src: 'assets/icons/deliveryman.png', background: 'rgba(27,150,181, 0.3)', page: '2'},
];

transactions: any[] = 
[
  {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
  {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
];

constructor(private router:Router)  {}

doorbelloptions()
{this.router.navigate(['/doorbell']);}

unlockoptions()
{this.router.navigate(['/locked']);}
// cancel() 
// {this.modal.dismiss(null, 'cancel');}
// confirm() 
// {this.modal.dismiss(this.sixdigitpin, 'confirm');}
// gotodoorbell(){}


isModalOpen1 = false;
isModalOpen2 = false;
isModalOpen3 = false;
isModalOpen4 = false;


setOpen(isOpen: boolean, name: string) {
  //console.log(name);
  if(name=='Door Bell')
  {  
     this.doorbelloptions();
     this.clickme();
  }
  else if (name=='Unlock')
  {
    // this.isModalOpen2 = isOpen;
    this.unlockoptions();
  }
  else if (name=='Contact Us')
  {this.isModalOpen3 = isOpen;}
  else if (name=='Delivery')
  {this.isModalOpen4 = isOpen;}
}

presentingElement = null;

ngOnInit() 
{
  // this.presentingElement = document.querySelector('.ion-page');
  
}

}
