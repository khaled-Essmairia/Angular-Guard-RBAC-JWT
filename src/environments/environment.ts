// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  //REST API server
  Api_Endpoint: 'https://localhost:44378/api/v1',
  //Api_Endpoint: 'https://cat-netcore-api.azurewebsites.net/api/v1',
  Api_Mock_Endpoint: 'https://angular-datatables-demo-server.herokuapp.com',

  //IdentityServer/OIDC Configuration
  Oidc_Issuer: 'https://localhost:44310', //this is for IdentityServer4 Admin UI running on localhost https://github.com/workcontrolgit/TokenProject.AdminUI
  //Oidc_Issuer: 'https://cat-token-identity.azurewebsites.net', //demo identityserver4 in Azure
  Oidc_ClientId: 'AngularStarterKit', // client id setup in IdentityServer4
  Oidc_responseType: 'code', //code flow PKCE, https://github.com/workcontrolgit/TokenProject.AdminUI
  Oidc_redirectUri: window.location.origin + '/auth-callback',
  Oidc_postLogoutRedirectUri: window.location.origin,
  Oidc_silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  Oidc_scope: 'openid profile email roles app.api.employeeprofile.read', // Ask offline_access to support refresh token refreshes
  Oidc_useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  Oidc_silentRefreshTimeout: 50000, // For faster testing
  Oidc_timeoutFactor: 0.25, // For faster testing
  Oidc_sessionChecksEnabled: true,
  Oidc_showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  Oidc_clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  Oidc_nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by IdentityServer's URI encoding
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.