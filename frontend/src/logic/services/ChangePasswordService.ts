import userEvent from "@testing-library/user-event";
import { Configuration } from "../../Configuration";
import { buildBaseHttpHeaders } from "../helpers/httpHelper";
import UserModel from "../models/UserModel";

class ChangePasswordService {
    changePassword(user: UserModel) {
        return fetch(`${Configuration.webApiUrl}/user/password`, {
            method: 'POST',
            body:  JSON.stringify(user),
            headers: buildBaseHttpHeaders()
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                throw response;
            }
        },
        error => {
            console.log(error);
        });
    }
}

const changePasswordService = new ChangePasswordService();
export default changePasswordService;