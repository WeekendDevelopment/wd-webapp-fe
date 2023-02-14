import axios from "axios";
import { JSEncrypt } from "jsencrypt";
import { Constants } from "../constants/Constants";

async function Encryption(passwd: string) {
  var encryptionKey: string;

  async function loadPublicKeyFromApi(): Promise<string> {
    try {
      if (encryptionKey === undefined || encryptionKey === "") {
        let response = await axios.get(
          Constants.BASE_API_URL + "/encryptionKey"
        );
        encryptionKey = response.data.encryptionKey;
        return encryptionKey;
      } else {
        return encryptionKey;
      }
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  async function encryptPassword(): Promise<string> {
    try {
      let publicKey: string = await loadPublicKeyFromApi();
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      return encrypt.encrypt(passwd).toString();
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  return await encryptPassword();
}

export default Encryption;
