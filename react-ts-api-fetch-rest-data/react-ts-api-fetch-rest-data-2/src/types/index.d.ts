// define the type for the product data
type ProductsOne = {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate: number;
        count: number;;
    }
}