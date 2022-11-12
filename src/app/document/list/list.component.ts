import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';
import { DocumentFile } from '../../Dto/document';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  documents: DocumentFile[];
  
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
