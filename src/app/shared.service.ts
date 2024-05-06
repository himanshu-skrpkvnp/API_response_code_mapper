import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  public formDataSubject = new Subject<any>();
  formData$: Observable<any> = this.formDataSubject.asObservable();

  constructor() { }

  updateFormData(data: any) {
    this.formDataSubject.next(data);
    
  }

  getData$(): Observable<string> {
    return this.formDataSubject.asObservable();
  }
  

}
