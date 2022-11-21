import axios from "axios";
import { JSEncrypt } from "jsencrypt";
import Constants from "./Constants";

async function Encryption(passwd) {
  var encryptionKey;

  async function loadPublicKeyFromApi() {
    try {
      if (encryptionKey === undefined || encryptionKey === "") {
        let response = await axios.get(
          Constants.BASE_API_URL + "/encryptionKey"
        );
        encryptionKey = response.data;
        return response.data;
      } else {
        return encryptionKey;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function encryptPassword() {
    try {
      let publicKey = await loadPublicKeyFromApi();
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      return encrypt.encrypt(passwd).toString();
    } catch (error) {
      console.log(error);
    }
  }
  return await encryptPassword();
}

export default Encryption;
