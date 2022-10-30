export interface Product {
    id: number, /* Fixed Length 24 Characters. Example: "602d2149e773f2a3990b47f5"*/

    sku: string,

    name: string,

    description: string,

    price: number,

    iAvailable: boolean,

    categoryId: number,

    imageFile: string,
}
