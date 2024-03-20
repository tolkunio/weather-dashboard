export interface IData {
    city: ICity,
    cnt: number,
    cod: string,
    list: IList[],
    message: number
}

export interface ICity {
    coord: ICoordination,
    country: string,
    id: number,
    name: string,
}

export interface IList {
    dt: number
    dt_txt: string,
    main:IMain,
    weather:IWeather[],
    wind:IWind
}

export interface ICoordination {
    lon: string,
    lat: string
}

export interface IMain {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number,
}
export interface IWeather{
    description:string,
    icon:string,
    id:number,
    main:string
}
export interface IWind{
    deg: number,
    gust: number,
    speed: number
}