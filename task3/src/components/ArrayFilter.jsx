import products from "./Products";

const ArrayFilter = () => {

    return <div>
            <h3>Products on Sale: </h3>
            <ol>
                {products.filter(({onSale}) => onSale === true).map(({id, name})=> <li key={id}>{name}</li>)}
            </ol>
        </div>
}

export default ArrayFilter;