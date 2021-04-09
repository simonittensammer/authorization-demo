import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth-config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oAuthService: OAuthService
  ) { }

  init() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidAccessToken()) {
        this.oAuthService.setupAutomaticSilentRefresh();
      }
    });
  }

  login() {
    this.oAuthService.initLoginFlow();
  }
}
