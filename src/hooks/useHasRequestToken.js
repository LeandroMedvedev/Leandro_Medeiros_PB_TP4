function useHasRequestToken() {
  const regex = /request_token/;
  const currentUrl = window.location.href;

  return regex.test(currentUrl);
}

export default useHasRequestToken;
