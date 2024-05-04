import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  public formDataSubject = new BehaviorSubject<any>({});
  formData$: Observable<any> = this.formDataSubject.asObservable();

  constructor() { }

  updateFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getData$(): Observable<string> {
    return this.formDataSubject.asObservable();
  }

}
