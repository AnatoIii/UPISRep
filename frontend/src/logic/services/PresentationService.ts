import { NavigateFunction } from "react-router";
import { Configuration } from "../../Configuration";
import { buildBaseHttpHeaders } from "../helpers/httpHelper";
import { LoginRequest } from "../models/LoginRequest";
import NewPresentation from "../models/Presentations/NewPresentation";
import { RegisterRequest } from "../models/RegisterRequest";

class PresentationsService {
    createPresentation(presentation: NewPresentation) {
        return fetch(`${Configuration.webApiUrl}/presentations`, {
            method: 'POST',
            body:  JSON.stringify(presentation),
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

const presentationsService = new PresentationsService();
export default presentationsService;