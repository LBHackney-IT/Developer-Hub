// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cognito: {
    userPoolId: 'eu-west-2_rQ3dI3Vbp',
    region: 'eu-west-2',
    clientId: 'fjnkqnloe7adg1b85kvdmmscm'
  },
  // apiURL : {
  //   tokenService: 'http://localhost:3000/',
  //   apiService: 'http://localhost:3000/'
  // }
  apiURL : {
    tokenService: 'https://j88uh2klte.execute-api.eu-west-2.amazonaws.com/dev/',
    apiService: 'https://j88uh2klte.execute-api.eu-west-2.amazonaws.com/dev/'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
