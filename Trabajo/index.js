class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts = () =>{
        return this.products
    }
    addProducts = (title, description, price, thumbnail, code, stock)=>{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if(this.products.length === 0){
            product.id = 0
        }else{
            product.id = this.products.length
        }
        let codes = this.products.map(product => product.code)
        if (codes.includes(code)) {
            console.log('El código ya ha sido utilizado')
        }else{ 
            this.products.push(product)
        } 

    }
    getProductsById = (id) =>{
        if(this.products[id]){
        return this.products[id]
        }else{
            console.log('not found')
        }
    }
}
let instancia = new ProductManager()
console.log(instancia.addProducts('manzana', 'es literalmente una manzana', 'yo no tengo preio, bitch', 'ultra secreto', '123abc', 2))
console.log(instancia.addProducts('banana', 'es literalmente una banana', 'yo no tengo preio, bitch x2', 'no te hagas el banana.png', '123abd', 10))
console.log(instancia.getProductsById(0))



