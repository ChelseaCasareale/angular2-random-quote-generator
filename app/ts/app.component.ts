import { Component, Input, OnInit,
         trigger, state, style, transition, animate, AnimationTransitionEvent
       } from '@angular/core';

import { Randomizer } from '../random.service';
import { ColorService } from '../color.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'body',
  templateUrl: 'templates/app.component.html',
  styleUrls: ['styles/app.component.css'],
  providers: [Randomizer, ColorService, QuoteService],

  animations: [
                trigger('hideShow', [
                  state('show', style({opacity: 1})),
                  state('void', style({opacity: 0})),
                  transition('void => *', animate(900)),
                  transition('* => void', animate(400))
                ])
              ]
})

export class AppComponent implements OnInit {

  constructor (private random: Randomizer) {}

  stateExpression: string;

  ngOnInit(): void {
    this.random.getQuotes();
    this.random.getInitColors();
  }

  animationStarted(event: AnimationTransitionEvent) {
    this.stateExpression = 'void';
    console.log('started');
  }

  animationDone(event: AnimationTransitionEvent) {
    this.stateExpression = 'void';
    console.log('done');
  }

}
