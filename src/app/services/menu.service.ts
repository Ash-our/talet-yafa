import { Injectable } from '@angular/core';
import { Database, ref, push, set, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private db: Database) {}

  addMenuItem(item: any) {
    const itemsRef = ref(this.db, 'menu/');
    const newItemRef = push(itemsRef);
    return set(newItemRef, item);
  }

  getMenuItems(): Observable<any> {
    return new Observable((observer) => {
      const itemsRef = ref(this.db, 'menu/');
      onValue(itemsRef, (snapshot) => {
        observer.next(snapshot.val());
      });
    });
  }
}
