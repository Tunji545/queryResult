import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'sq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Lists';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  private _listFinder: string = '';
  sub!: Subscription;
  get listFinder(): string {
    return this._listFinder;
  }

  set listFinder(value: string) {
    this._listFinder = value;
    console.log('setter', this._listFinder);
    this.filteredProduct = this.performFilter(value);
  }

  filteredProduct: IProducts[] = [];

  products: IProducts[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProducts[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProducts) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProduct = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClick(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}
