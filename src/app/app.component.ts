import { Component, OnInit } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scannerEnabled = true;
  result: string

  constructor() {}

  ngOnInit(): void {}

  camerasNotFound(e: Event) {
    // Display an alert modal here
  }

  cameraFound(e: Event) {
    // Log to see if the camera was found
  }

  onScanSuccess(result: string) {
    console.log(result);
  }
}
