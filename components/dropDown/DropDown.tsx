import s from './DropDown.module.scss';
import {ILocation} from "@/mock/mockForLocations";
import {ICoordination} from "@/mock/mockForLocations";

type DropDownProps = {
    cities: ILocation[];
    showDropDown: boolean,
    toggleDropDown: () => void;
    coordSelection: (coord: ICoordination) => void;
}

const DropDown = ({cities, coordSelection,toggleDropDown,showDropDown}: DropDownProps) => {
    const onClickHandler = (coord: ICoordination): void => {
        coordSelection(coord);
        toggleDropDown();
    };

    return (
        <div className={showDropDown ?s.dropDown:s.hidden}>
            {
               showDropDown && cities.map((location) => (<p key={location.id}
                                             onClick={() => onClickHandler(location.coord)}>
                    {location.city}</p>))
            }
        </div>
    );
};

export default DropDown;
