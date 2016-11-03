import { Injectable } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { ColorService } from './color.service';
import { QuoteService } from './quote.service';
import { Quote }        from './quote';

@Injectable()
export class Randomizer {
  quotes: Quote[];
  selectedQuote: Quote;
  colors: Array<string>;
  selectedColor: SafeStyle;

  constructor(private sanitizer: DomSanitizer,
              private colorService: ColorService,
              private quoteService: QuoteService ) { }

  getRandom(arr: Array<any>) {
    var index = Math.floor(Math.random() * arr.length);
    return index;
  }

  getInitColors(): void {
    this.colorService.getColors().then(colors => {
      this.colors = colors;
      this.selectColor();
    });
  }

  selectColor(): void {
    let index = this.getRandom(this.colors);
    this.selectedColor = this.sanitizer.bypassSecurityTrustStyle(this.colors[index]);
  }

  getQuotes(): void {
    this.quoteService.getQuotes().then(quotes => {
      this.quotes = quotes;
      this.randomQuote();
    });
  }

  randomQuote(): void {
    let index = this.getRandom(this.quotes);
    this.selectedQuote = this.quotes[index];
  }

  onClick(): void {
    this.selectColor();
    this.randomQuote();
  }

}
