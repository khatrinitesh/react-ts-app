import { FILTER_CATEGORIES } from "../../../constants/constants";
import { Item } from "../../../types";

export const FilterItem = (items:Item[],category:string):Item[] => {
    if(category === FILTER_CATEGORIES.ALL){
        return items;
    }
    return items.filter(item => item.category === category);
}