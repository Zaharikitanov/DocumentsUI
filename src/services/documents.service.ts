import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { DocumentFile } from '../app/Dto/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private apiUrl = 'https://localhost:7115/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getDocuments(): Observable<DocumentFile[]> {
    return this.httpClient
    .get(this.apiUrl + "/documents/getall")
    .pipe(
      map(v => {
        return <DocumentFile[]>v;
      })
    );
  }

  createDocument(document: DocumentFile): Observable<object> {
    return this.httpClient
      .post(this.apiUrl + `/documents`, document)
      .pipe(
        map(v => {
          return <object>v;
        })
      );
  }
}
