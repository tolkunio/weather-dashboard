import {JSX} from "react";

export interface WeatherConditionInterface {
    id:number,
    icon:JSX.Element,
    desc:string,
    value:string
}
export interface WeekDays{
    name:string,
    icon:JSX.Element
}