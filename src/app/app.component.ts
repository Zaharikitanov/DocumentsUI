import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  documents: Document[];
  
  constructor(private service:DocumentsService) {}
  
  ngOnInit() {
      this.service.getDocuments()
        .subscribe(response => {
          this.documents = response;
        });
  }
}
