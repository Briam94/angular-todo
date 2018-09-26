// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	firebaseConfig : {
		apiKey: "AIzaSyA7_NZ2oEelQeDk_zZVpvCR3s3oRzk0evA",
		authDomain: "tecnibike-c63af.firebaseapp.com",
		databaseURL: "https://tecnibike-c63af.firebaseio.com",
		projectId: "tecnibike-c63af",
		storageBucket: "tecnibike-c63af.appspot.com",
		messagingSenderId: "635285477499"
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
