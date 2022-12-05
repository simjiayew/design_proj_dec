import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RouterModule, Routes, Router } from '@angular/router';

// declare var startRecording: any;

@Component({
  selector: 'app-doorbell',
  templateUrl: './doorbell.page.html',
  styleUrls: ['./doorbell.page.scss'],
})
export class DoorbellPage implements OnInit {

  clickme() 
  {fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! Somebody is at the door')}


//    start1() {
//     // startRecording();
// }



constructor(private router:Router)  {}

backhome()
{this.router.navigate(['/home']);}

  ngOnInit() {
    // new startRecording();

    // console.log("123123")
//webkitURL is deprecated but nevertheless
  // URL = window.URL || window.webkitURL;

  // var gumStream; 						//stream from getUserMedia()
  // var rec; 							//Recorder.js object
  // var input; 							//MediaStreamAudioSourceNode we'll be recording

  // // shim for AudioContext when it's not avb. 
  // var AudioContext = window.AudioContext || window.webkitAudioContext;
  // var audioContext //audio context to help us record

  // var recordButton = document.getElementById("recordButton");
  // var stopButton = document.getElementById("stopButton");
  // var pauseButton = document.getElementById("pauseButton");

  // //add events to those 2 buttons
  // console.log(recordButton);
  // recordButton.addEventListener("click", startRecording);
  // stopButton.addEventListener("click", stopRecording);
  // pauseButton.addEventListener("click", pauseRecording);
  }

}
