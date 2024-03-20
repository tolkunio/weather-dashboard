import s from './CustomSelect.module.scss';

import {ICoordination} from "@/interfaces/data-response-interface";
import {ILocation} from "@/mock/mockForLocations";

type CustomSelectProps = {
    cities: ILocation[];
    showSelect: boolean,
    toggleSelect: () => void;
    coordSelection: (coord: ICoordination) => void;
}

const CustomSelect = ({cities, coordSelection,toggleSelect,showSelect}: CustomSelectProps) => {
    const onClickHandler = (coord: ICoordination): void => {
        coordSelection(coord);
        toggleSelect();
    };

    return (
        <div className={showSelect ?s.select:s.hidden}>
            {
               showSelect && cities.map((location) => (<p key={location.id}
                                                          onClick={() => onClickHandler(location.coord)}>
                    {location.city}</p>))
            }
        </div>
    );
};

export default CustomSelect;
