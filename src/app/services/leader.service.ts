import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }
//method, return array of leaders

getLeader(id: number): Leader {
  return LEADERS.filter((promo) => (promo.id === id))[0];
}

getFeaturedLeader(): Leader {
  return LEADERS.filter((leader) => leader.featured)[0];
}


}