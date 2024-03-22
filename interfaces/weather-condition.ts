import {JSX} from "react";

export interface WeatherCondition {
    id:number,
    icon:JSX.Element,
    desc:string,
    value:string | number
}
export interface WeekDays{
    name:string,
    icon:JSX.Element
}