import userEvent from "@testing-library/user-event";
import { Configuration } from "../../Configuration";
import { buildBaseHttpHeaders } from "../helpers/httpHelper";
import UserModel from "../models/UserModel";

class EditUserDataService {
    editUser(user: UserModel) {
        return fetch(`${Configuration.webApiUrl}/user/data`, {
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

    
    getUserData(UserId: string) {
        return fetch(`${Configuration.webApiUrl}/user/${UserId}/data`, {
            method: 'GET',
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

const editUserDataService = new EditUserDataService();
export default editUserDataService;