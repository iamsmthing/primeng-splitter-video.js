import { Component,OnInit } from "@angular/core";
import videojs from "video.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  
  public videoJsConfigObj = {
              preload: "metadata",
              controls: true,
              autoplay: true,
              overrideNative: true,
              techOrder: ["html5", "flash"],
              html5: {
                  nativeVideoTracks: false,
                  nativeAudioTracks: false,
                  nativeTextTracks: false,
                  hls: {
                      withCredentials: false,
                      overrideNative: true,
                      debug: true
                  }
              }
          };
    ngOnInit() {
  
      var player = videojs('my-video', this.videoJsConfigObj);
  
    }
  
  
  }
  
