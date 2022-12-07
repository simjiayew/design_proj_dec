import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RouterModule, Routes, Router } from '@angular/router';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { CaptureImageOptions, MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';
import { CapacitorVideoPlayer } from 'capacitor-video-player';
import { fromEvent } from 'rxjs';


// declare var startRecording: any;

@Component({
  selector: 'app-doorbell',
  templateUrl: './doorbell.page.html',
  styleUrls: ['./doorbell.page.scss'],
})
export class DoorbellPage implements OnInit {

  video: any;
  toDir: any;




  clickme() 
  {
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! Somebody is at the door');
    fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&document=AAMCBQADGQMAA8RjjtCmehL6W1DI2nkh4mngTFudZgACZwcAAvgReFTaxAYGxYqYMAEAB20AAysE');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&file_id=BAACAgUAAxkDAAPEY47QpnoS-ltQyNp5IeJp4ExbnWYAAmcHAAL4EXhU2sQGBsWKmDArBA');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&file_name=VID_20221206_131427.mp4');

    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&document=AAMCBQADGQMAA8RjjtCmehL6W1DI2nkh4mngTFudZgACZwcAAvgReFTaxAYGxYqYMAEAB20AAysE');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&document=BAACAgUAAxkDAAPEY47QpnoS-ltQyNp5IeJp4ExbnWYAAmcHAAL4EXhU2sQGBsWKmDArBA');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&document=VID_20221206_131427.mp4');
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&caption=AAMCBQADGQMAA8RjjtCmehL6W1DI2nkh4mngTFudZgACZwcAAvgReFTaxAYGxYqYMAEAB20AAysE');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&caption=BAACAgUAAxkDAAPEY47QpnoS-ltQyNp5IeJp4ExbnWYAAmcHAAL4EXhU2sQGBsWKmDArBA');
    // fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&caption=VID_20221206_131427.mp4');
    // fetch('https://api.telegram.org/file/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! Somebody is at the door');
    console.log("asdasd123")
  }


  
  clickme2() 
  {
    fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! test text')

    fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendMessage?chat_id=204907740&text=Ring! Somebody is at the door')

    console.log(this.video)
    
    fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendVideo?chat_id=204907740&video=VID_20221206_125339.mp4');
    fetch('https://api.telegram.org/bot5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc/sendDocument?chat_id=204907740&document=https://localhost/__cdvfile_sdcard__/DCIM/Camera/VID_20221206_125339.mp4');
    console.log("asdasd123")
  }


constructor(
  private router:Router,
  private mediaCapture: MediaCapture,
  private file: File
  )  {}

backhome()
{this.router.navigate(['/home']);}

dosomething(){
 let  formele = (<HTMLInputElement>document.getElementById("fileInput"));
 formele.value = this.toDir;
 console.log("replaced");
}

async startRecording() {
  try {
    let options: CaptureImageOptions = { 
      limit: 1,  
    }
    const data = await this.mediaCapture.captureVideo(options);
    this.video = data;
    console.log("this.video");
    console.log(this.video);
    let dir = this.video.localURL.split('/');
    dir.pop();
    let fromDir = dir.join('/');
    let toDir = this.file.dataDirectory;
    console.log("todir below");
    console.log("toDir");
    console.log(toDir);
    const response = await this.file.copyFile(fromDir, this.video.name, toDir, this.video.name);
    console.log(response);
    console.log("newtest");
  } 
    catch(e) 
    {
      console.log(e);
    }
}


 

// async playRecording() {
//   let path = this.file.dataDirectory + this.video.name;
//   await CapacitorVideoPlayer.initPlayer({
//     mode: 'fullscreen',
//     url: path,
//     playerId: 'fullscreen',
//     componentTag: 'app-home'
//   });   
// }




  ngOnInit() {

  }

}
