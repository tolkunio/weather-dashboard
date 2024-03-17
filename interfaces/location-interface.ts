export interface ICoordination{
    lon:string,
    lat:string
}
export interface ILocation{
    id:number,
    city:string,
    coord:ICoordination
}