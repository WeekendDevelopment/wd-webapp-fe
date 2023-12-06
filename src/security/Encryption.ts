import axios from "axios";
import { JSEncrypt } from "jsencrypt";
import { Constants } from "../constants/Constants";

async function Encryption(passwd: string) {
  let encryptionKey: string;

  async function loadPublicKeyFromApi(): Promise<string> {
    try {
      if (encryptionKey === undefined || encryptionKey === "") {
        const response = await axios.get(
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
      const publicKey: string = await loadPublicKeyFromApi();
      const encrypt = new JSEncrypt();
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
