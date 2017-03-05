import { Component, OnInit } from '@angular/core';

import { IErrorVM } from './errorVM';

import { ErrorReaderService } from './errorReader.service';

@Component({
  moduleId: module.id,
  templateUrl: 'error-list.component.html',
    styleUrls: ['../products/product-list.component.css']
})
export class ErrorListComponent implements OnInit {
  constructor(private _errorReaderService: ErrorReaderService) {
  }

  pageTitle: string = "Error List";
  listFilter: string;
  errorList: IErrorVM[];
  componentErrorMessage: string;

  ngOnInit(): void {
    this._errorReaderService.getErrors()
    .subscribe(errors => this.errorList = errors,
    error => this.componentErrorMessage = <any>error);
  }

}
