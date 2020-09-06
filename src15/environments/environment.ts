// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = 
{
  production: false,
  // Add this to access firebase in our project
  firebase :
  {
    // Copy this contents from our firebase creation
    apiKey: "AIzaSyAGPP7KiDfJIRZmfhnu8NOl2RxR3UVkdzc",
    authDomain: "angular9-5c112.firebaseapp.com",
    databaseURL: "https://angular9-5c112.firebaseio.com",
    projectId: "angular9-5c112",
    storageBucket: "angular9-5c112.appspot.com",
    messagingSenderId: "239894479154",
    appId: "1:239894479154:web:0474d1400531ce16ead72b",
    measurementId: "G-DYHX10PCJW"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
