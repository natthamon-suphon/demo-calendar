import { Observable } from "rxjs";


export function handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw 'Something bad happened; please try again later.';
}