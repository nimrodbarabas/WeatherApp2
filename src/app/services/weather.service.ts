import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable , Subject } from 'rxjs';
import { Weather } from 'src/Weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=Targu-Mures&units=metric&APPID=4f47a4edc02cb72ac89508da08c914c5";
  private apiUrl = "https://api.openweathermap.org/data/2.5/weather?q"
  private apiKey= "&units=metric&APPID=4f47a4edc02cb72ac89508da08c914c5"
  private toggleCity : string = "";
  private subject = new Subject<any>()



  constructor(private http:HttpClient) { }
  
  
  getBaseForecast():Observable<Weather>{
    return this.http.get<Weather>(this.baseUrl);
  }

  toggleSearch(text:string): void{
    this.toggleCity = text;
      this.subject.next(this.toggleCity)
  }
  onToggle():Observable<any>{
    return this.subject.asObservable()
  }

  getDaysForecast():Observable<Weather>{
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&units=metric&appid=4f47a4edc02cb72ac89508da08c914c5`)
  }

  getSpecificForecast(city:string):Observable<Weather>{
    const url= `${this.apiUrl}=${city}&${this.apiKey}`
    return this.http.get<Weather>(url)
  }
  
}
