import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  public formDataSubject = new Subject<any>(  );
  // formData$: Observable<any> = this.formDataSubject.asObservable();

  constructor() { }

  updateFormData(data: any) {
    // const newdata = {  ...data ,  editMode : false } ;
    this.formDataSubject.next(data);
    console.log(": in the service"  , data) ;
    console.log(this.formDataSubject.forEach.length) ;
  }

  getData$(): Observable<string> {
    return this.formDataSubject.asObservable();
  }
  

}
