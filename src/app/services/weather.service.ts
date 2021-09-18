import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable  } from 'rxjs';
import { Weather } from 'src/Weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Targu-Mures&units=metric&APPID=4f47a4edc02cb72ac89508da08c914c5";
  constructor(private http:HttpClient) { }
  getBaseForecast():Observable<Weather>{
    return this.http.get<Weather>(this.apiUrl);
  }
}
