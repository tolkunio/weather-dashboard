export interface IWeather{
    cityName:string,
    weatherDesc:string,
    lists:Array<IList>
}
export interface IList{
    dateTime:string,
    temp:string,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:string,
    humidity:string,
    wind:IWind
}
export interface IWind{
    speed:string,
    dust:string
}