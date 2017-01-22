import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  //selector: 'selector',
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _router: Router,
              private _route: ActivatedRoute) {
    //console.log(this._route.snapshot.params['id']);
  }


  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']; //plus sign converts to numeric
    this.pageTitle += `:${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
