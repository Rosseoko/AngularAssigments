import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
    dish: Dish;
    dishIds: number[];
    prev: number;
    next: number;
  
  
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      //whenever 'id' changes, ---> Observable
      //snapshot, you take one snapshot, that particular time
      //let id = +this.route.snapshot.params['id'];
      //switchmap operator: the id in now obtained by using the params. THE "+" CONVERTS STRING TO INT, getDish is a new Observable
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
      //once created, you subscribe to observable. Anytime it changes, mapped.
      //cada que cambie el dish, se reseta el next y prev. 
    }
  
  //switch into dishes, navigate into list. Por eso se necesita el arreglo de id's, solo se necesitan. 
  //given the current dish id, you can find the previous and next one
  //indexOf operator takes the value and find position on array
  //% para hacer array circular, cuando esta en 0 va a buscar al último como siguiente. El mod regresa el last
    setPrevNext(dishId: number) {
      let index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }
  
    goBack(): void {
      this.location.back();
    }
  

  }

