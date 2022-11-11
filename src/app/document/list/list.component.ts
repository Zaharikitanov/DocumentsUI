import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  documents: Document[];
  
  constructor(
    private service: DocumentsService
  ) {}
  
  ngOnInit() {
      this.service.getDocuments()
        .subscribe(response => {
          this.documents = response;
        });
  }

}
