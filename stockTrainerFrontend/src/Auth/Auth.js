import auth0 from "auth0-js";

export default class Auth {
  accessToken;

  idToken;

  expiresAt;

  idTokenPayload;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
      audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      clientID: `${process.env.REACT_APP_AUTH0_CLIENTID}`,
      redirectUri: `${process.env.REACT_APP_URL}callback`,
      responseType: "token id_token",
      scope: "openid profile email"
    });

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getIdTokenPayload = this.getIdTokenPayload.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line consistent-return
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  getIdTokenPayload() {
    return this.idTokenPayload;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    this.idTokenPayload = authResult.idTokenPayload;
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.signOut();
        // eslint-disable-next-line no-console
        console.log(err);
        // eslint-disable-next-line no-alert
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    // Remove tokens and expiry time
    this.idToken = null;
    this.accessToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    // navigate to the home route
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    // eslint-disable-next-line prefer-destructuring
    const expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}

// const auth0Client = new Auth();

// export default auth0Client;
