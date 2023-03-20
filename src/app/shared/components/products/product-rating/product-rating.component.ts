import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

type Rating = 'full' | 'half' | 'none';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input() rating = 0;
  maxRating = 5;
  ratingScoreCard: Rating[] = [];

  ngOnInit(): void {
    this.ratingScoreCard = [];
    if (this.rating) {
      Array(this.maxRating)
        .fill(0)
        .forEach((_, i) => {
          const record = this.rating - i * 1;
          const result: Rating =
            record >= 1 ? 'full' : record > 0 ? 'half' : 'none';
          this.ratingScoreCard.push(result);
        });
    } else {
      this.ratingScoreCard = Array(this.maxRating).map(() => 'none');
    }
  }
}
