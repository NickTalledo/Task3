import products from "./Products";

const ArrayReduce = () =>{

    const totalPrice= products.reduce((accumulator, products) => {
        return accumulator + products.price;
    }, 0);

    const productNames = products.reduce((accumulator, products) => {
        return `${accumulator}${accumulator === '' ? '': ', '} ${products.name}`;
    }, '');

    return <div>
                <h3>Product Pricing: </h3>
                <p className="text-center">The totatled price of the items is ${totalPrice}.</p>
                <p className="text-center">The products by the way are {productNames}.</p>
            </div>
}

export default ArrayReduce;