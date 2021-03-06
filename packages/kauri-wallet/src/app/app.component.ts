import { Component } from '@angular/core';
import lernaImportTest from 'temp-test-module';

import { SwLogService } from './features/service-workers/sw-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _SwLogService: SwLogService) {

  }
  title = 'Kauri Wallet';
  lernaTest = lernaImportTest;
}
