import axios from "axios";
import { JSEncrypt } from "jsencrypt";
import Constants from "./Constants";

class Encryption {
  static encryptionKey;
  constructor() {
    this.loadPublicKeyFromApi = this.loadPublicKeyFromApi.bind(this);
    Encryption.encryptionKey = "";
  }

  static async loadPublicKeyFromApi() {
    try {
      if (
        Encryption.encryptionKey === undefined ||
        Encryption.encryptionKey === ""
      ) {
        let response = await axios.get(
          Constants.BASE_API_URL + "/encryptionKey"
        );
        Encryption.encryptionKey = response.data;
        return response.data;
      } else {
        return Encryption.encryptionKey;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async encryptPassword(passwd) {
    try {
      let publicKey = await Encryption.loadPublicKeyFromApi();
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      return encrypt.encrypt(passwd).toString();
    } catch (error) {
      console.log(error);
    }
  }
}

export default Encryption;
