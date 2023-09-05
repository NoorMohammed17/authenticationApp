import { redirect } from "react-router-dom";

export function clearLocalStorageAction(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}