import OktaAuth from '@okta/okta-auth-js';


const isBrowser = typeof window !== 'undefined';

class Auth {
  constructor() {
    const authConfig = {
      issuer: process.env.GATSBY_OKTA_ISSUER || "https://rlhloyalty.okta.com/oauth2/default",
      url: process.env.GATSBY_OKTA_URL || "https://rlhloyalty.okta.com",
      clientId: process.env.GATSBY_OKTA_CLIENTID || "0oa1ra0pt9Dcme2hE2p7",
      redirectUri: isBrowser ? window.location.origin : '',
      authParams: {
        responseType: ['id_token', 'token'],
        scopes: ['openid', 'email', 'profile', 'address']
      }
    };
    this.authClient = isBrowser ? new OktaAuth(authConfig) : {};
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.logout = this.logout.bind(this);
    this.sessionRereshTimer = null;
  }
  async handleAuthentication(response) {
    let tokens = await this.authClient.token.getWithoutPrompt({
      sessionToken: response.sessionToken,
      responseType: ['id_token', 'token'],
      scopes: [
        'openid',
        'email',
        'profile',
        'address'
      ]
    });
    tokens = Array.isArray(tokens) ? tokens : [tokens];
    for (let token of tokens) {
      if (token.idToken) {
        this.authClient.tokenManager.add('idToken', token);
      } else if (token.accessToken) {
        this.authClient.tokenManager.add('accessToken', token);
      }
    }
    const guest = {
      id: response.user.id,
      firstName: response.user.profile.firstName,
      lastName: response.user.profile.lastName,
      email: response.user.profile.login,
      sessionToken: response.sessionToken
    };
    return guest;
  }

  async isAuthenticated() {
    //return !!(await this.getAccessToken()) || !!(await this.getIdToken());
    return !!(await this.getIdToken());
  }

  async getIdToken() {
    try {
      const idToken = await this.authClient.tokenManager.get('idToken');
      return idToken.idToken;
    } catch (err) {
      // The user no longer has an existing SSO session in the browser.
      // (OIDC error `login_required`)
      // Ask the user to authenticate again.
      return undefined;
    }
  }

  async getAccessToken() {
    try {
      const accessToken = await this.authClient.tokenManager.get('accessToken');
      return accessToken.accessToken;
    } catch (err) {
      // The user no longer has an existing SSO session in the browser.
      // (OIDC error `login_required`)
      // Ask the user to authenticate again.
      return undefined;
    }
  }

  async logout() {
    this.authClient.tokenManager.clear();
    await this.authClient.signOut();
  }

  async refreshToken() {
    try {
      let refreshResponse = await this.authClient.session.refresh();
      return refreshResponse;
    } catch (err) {
      return false;
    }
  }

  startRefreshSessionTimer() {
    this.sessionRereshTimer = setInterval(() => {
      (async () => {
        let isTokenRefreshed = await auth.refreshToken();
        if (!isTokenRefreshed) {
          clearInterval(this.sessionRereshTimer);
          auth.logout();
        }
      })();
    }, 300000);
  }
}
// create a singleton
export const auth = new Auth();
