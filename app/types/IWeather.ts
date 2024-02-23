export interface IWeather{
    city:ICity,
    lists?:Array<IList>
}
export interface ICity{
    name:string,
    timezone:number
}
export interface IList{
    main:IMain,
    wind:IWind,
    dateTime:string,
}
export interface IMain{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:string,
    humidity:string
}
export interface IWind{
    speed:string,
    dust:string
}