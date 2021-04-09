import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8180/auth/realm/htl',
  redirectUri: window.location.origin,
  clientId: 'demo-frontend',
  responseType: 'code',
  scope: 'openid profile email offline_access',
  showDebugInformation: true,
};
