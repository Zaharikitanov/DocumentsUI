import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private apiUrl = 'https://localhost:7115/api';

  constructor(private httpClient: HttpClient) { }

  getDocuments(): Observable<Document[]> {
    return this.httpClient
    .get(this.apiUrl + "/documents/getall")
    .pipe(
      map(v => {
        return <Document[]>v;
      })
    );
  }

  createDocument(document: Document): Observable<object> {
    return this.httpClient
      .post(this.apiUrl + `/documents`, document)
      .pipe(
        map(v => {
          return <object>v;
        })
      );
  }
}
