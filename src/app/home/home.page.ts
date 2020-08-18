import { Component } from '@angular/core';

import { Admob, AdmobOptions, AdmobOriginal } from '@ionic-native/admob';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private adverts: AdmobOriginal = Admob;

  constructor() {}

  public ngOnInit() {
    // Admob options config
    console.log(Admob);
    const admobOptions: AdmobOptions = {
      bannerAdId: 'XXX-XXXX-XXXX',
      interstitialAdId: 'ca-app-pub-1981652597494266/3831091382',
      rewardedAdId: 'XXX-XXXX-XXXX',
      isTesting: true,
      autoShowBanner: false,
      autoShowInterstitial: true,
      autoShowRewarded: false,
      adSize: Admob.AD_SIZE.BANNER,
      publisherId: 'pub-1981652597494266'
    };

    // Set admob options
    this.adverts.setOptions(admobOptions)
      .then(() => console.log('Admob options have been successfully set'))
      .catch(err => console.error('Error setting admob options:', err));
  }

  public showAdvert() {
    this.adverts.requestInterstitialAd();
  }
}
