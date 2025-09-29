import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.configureStatusBar();
  }

  private async configureStatusBar() {
    try {
      await StatusBar.setOverlaysWebView({ overlay: false });
      await StatusBar.setBackgroundColor({ color: '#4E3AFD' });
      await StatusBar.setStyle({ style: Style.Light }); // contenu (heure, wifi, batterie) blanc
    } catch (err) {
      // noop on web
    }
  }
}
