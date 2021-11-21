import authService from "../services/AuthService"

export const buildBaseHttpHeaders = () => {
    const headers: any = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    
    const token = authService.getToken();
    if (token === null) {
        return headers;
    }

    headers['Authorization'] = `Bearer ${token}`;
    return headers
} 