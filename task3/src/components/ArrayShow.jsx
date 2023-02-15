import products from "./Products";

const ArrayShow = () => {
    
    return <div>
            <h3>Product List: </h3>
        <ol>
            {
                products.map(({id, name})=> <li key={id}>{name}</li>)
            }
        </ol>
    </div>
}

export default ArrayShow;