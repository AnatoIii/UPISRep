import { Configuration } from "../../Configuration";
import { buildBaseHttpHeaders } from "../helpers/httpHelper";
import NewPresentation from "../models/Presentations/NewPresentation";

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

    getSlidesForPresentation(presentationId: string) {
        return fetch(`${Configuration.webApiUrl}/presentations/${presentationId}/slides`, {
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

    addSlideForPresentation(presentationId: string) {
        return fetch(`${Configuration.webApiUrl}/presentations/${presentationId}/slide`, {
            method: 'POST',
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

    removeSlideFromPresentation(presentationId: string, slideId: string) {
        return fetch(`${Configuration.webApiUrl}/presentations/${presentationId}/slide/${slideId}/delete`, {
            method: 'POST',
            headers: buildBaseHttpHeaders()
        }).then(response => {
            if (response.status === 200) {
                return response;
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