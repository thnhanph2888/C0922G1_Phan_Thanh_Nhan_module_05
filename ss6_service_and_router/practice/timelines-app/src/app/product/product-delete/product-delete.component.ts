import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  id: number
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
    });
    this.productService.findById(this.id).subscribe((product) => {
      console.log(product.name)
      this.product = product;
    });

  }

  delete() {
    this.productService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl("/product/list");
    });
  }

  cancel() {
    this.router.navigateByUrl("/product/list");
  }
}
