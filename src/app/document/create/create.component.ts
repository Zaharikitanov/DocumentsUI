import { Component } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  documentName: string;
  version: number;
  fileName: string;
  fileSize: number;

  constructor(
    private service: DocumentsService
  ) { }


}
