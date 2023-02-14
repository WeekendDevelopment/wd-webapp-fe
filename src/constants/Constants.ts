export class Constants {
  public static isDevMode = () =>
    process.env.NODE_ENV && process.env.NODE_ENV === "development";
  public static BASE_API_URL = Constants.isDevMode()
    ? "http://localhost:8080"
    : "https://e-paratext-367610.el.r.appspot.com";
}
