import { NavigateFunction } from "react-router";
import { Configuration } from "../../Configuration";
import { buildBaseHttpHeaders } from "../helpers/httpHelper";
import { LoginRequest } from "../models/LoginRequest";
import { RegisterRequest } from "../models/RegisterRequest";
import "react-toastify/dist/ReactToastify.css";
import { toastify } from "../../components/Tostify/Tostify";

class AuthService {
    getToken() {
        return localStorage.getItem('token') || '';
    }

    checkToken() {
        if (!this.getToken()) {
            this.logout();
        }
    }

    isAuthentificated() {
        return this.getToken() !== null;
    }

    processLogin(token: string) {
        localStorage.setItem('token', token);
    }

    login(loginRequst: LoginRequest, navigate: NavigateFunction) {
        return fetch(`${Configuration.webApiUrl}/user/login`, {
            method: 'POST',
            body:  JSON.stringify(loginRequst),
            headers: buildBaseHttpHeaders()
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    this.processLogin(data);
                    navigate('/main');
                })
            }
            else {
                toastify("Incorrect login or password!", 'error');
                throw response;
            }
        },
        error => {
            console.log(error);
        });
    }

    register(registerRequst: RegisterRequest, navigate: NavigateFunction) {
        return fetch(`${Configuration.webApiUrl}/user/register`, {
            method: 'POST',
            body:  JSON.stringify(registerRequst),
            headers: buildBaseHttpHeaders()
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    this.processLogin(data);
                    navigate('/main');
                })
            }
            else {
                toastify("User with such email is registered already", 'error');
                throw response;
            }
        },
        error => {
            console.log(error);
        });
    }

    logout() {
        localStorage.removeItem('token');
        window.location.pathname = '/login';
    }
}

const authService = new AuthService();
export default authService;