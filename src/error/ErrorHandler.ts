export class ErrorHandler {
  private constructor() {}
  public static getErrorMessage(error: any): string {
    if (error.response == null) {
      return "Failed to Connect";
    } else {
      let errorString =
        "{ status: " +
        error.response.status +
        ",\n message: " +
        error.response.data +
        " }";
      return errorString;
    }
  }
}
