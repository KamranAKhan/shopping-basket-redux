export interface CartType {
    desc: string,
    id: number,
    images: Array<string>,
    name: string,
    price: number,
    quantity: number,
    rating: number,
    reviewsCount: number,
    selectedSize: number,
    sizes: Array<number>
}

export interface ShoeDetailsType {    
    desc: string,
    id: number,
    images: Array<string>,
    name: string,
    price: number,    
    rating: number,
    reviewsCount: number,    
    sizes: Array<number>
}

export interface ShoesListType {    
    id: number,
    name: string,
    price: number,            
    image: string,        
}

export interface CartRootState {
    cartCounter: {
        cart: Array<CartType>
    }
}

export interface BackdropLoaderProps {
    isLoader: boolean,
    setIsLoader: (x:boolean) => void
}
