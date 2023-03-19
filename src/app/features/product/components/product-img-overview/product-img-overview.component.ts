import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-overview',
  templateUrl: './product-img-overview.component.html',
  styleUrls: ['./product-img-overview.component.scss'],
})
export class ProductImgOverviewComponent implements OnInit {
  productImagList = Array(4).fill(
    'https://ih1.redbubble.net/image.755961974.7153/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.jpg'
  );
  constructor() {}

  ngOnInit(): void {}
}
