function redirectToAuthorizationService(requestToken) {
  const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/profile`;
  window.location.href = redirectUrl;
}

export default redirectToAuthorizationService;
