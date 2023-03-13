import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdateForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  productUpdate: Product;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.productUpdate = this.productService.findById(id)
    })
    this.productUpdateForm = new FormGroup({
      id: new FormControl(this.productUpdate.id),
      name: new FormControl(this.productUpdate.name),
      price: new FormControl(this.productUpdate.price),
      description: new FormControl(this.productUpdate.description)
    })
  }

  submit() {
    this.productService.update(this.productUpdateForm.value);
    this.router.navigateByUrl('/product/list');
  }
}
