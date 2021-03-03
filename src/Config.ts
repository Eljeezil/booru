export interface BooruConfiguration {
  /**
   * Specify the address of a proxy server, which adds CORS headers to the proxied request.
   * This way a cross-origin error can be avoided and the module is usable in any browser.
   *
   * The address will be the prefix for search requests like so: `proxyAddress/requestUri`
   *
   * An example would be the following: `http://localhost:8080/https://rule34.xxx/some/path`
   *
   * This options is designed for "cors-anywhere" but can be used with any custom proxy server.
   * @see <a>https://github.com/Rob--W/cors-anywhere</a>
   */
  proxyAddress: string | undefined;
}

export const booruConfig: BooruConfiguration = {
  proxyAddress: undefined,
};
