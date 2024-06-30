import { BlogData } from "../MocData/MocData"

export const BlogControl = (id) => {
    let dates = null;

    BlogData?.map(items => {
        if(items.id === +id){
            return dates = items
        }
    })

    return [dates];
}