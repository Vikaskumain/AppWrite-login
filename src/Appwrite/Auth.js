import Configr from "../Conf/Configr";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(Configr.appWriteUrl).setProject(
      Configr.appWriteProjecturl
    );
    this.account = new Account(this.Client);
  }
  async CreateAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.Createlogin({ email, password });
      } else {
        userAccount;
      }
    } catch (error) {
      throw console.error(error);
    }
  }
  async Createlogin({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw console.error("email is not proper login ");
    }
  }
  async GetUserdetails() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("not get a account to previous one ");
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw console.error("page will be logout ");
    }
  }
}

const authService = new AuthService();
export default authService;
