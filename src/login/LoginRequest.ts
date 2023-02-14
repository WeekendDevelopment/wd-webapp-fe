export class LoginRequest {
  private email!: string;
  private password!: string;

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): LoginRequest {
    this.email = email;
    return this;
  }

  public setPassword(password: string): LoginRequest {
    this.password = password;
    return this;
  }
}
