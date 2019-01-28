// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    tenant: '56e74a31-ee36-4fb0-b589-5485c300bc7b',
    clientId: 'ffed903a-a8cd-4f61-b869-ed537bdd4350', //application Id
    endpoints: {
      'https://graph.microsoft.com': '00000003-0000-0000-c000-000000000000',
      'http://localhost:63464': '8478492f-a128-43a7-b0fa-b2c79ce2675b'
    }
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
