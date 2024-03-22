import style from "../ProductCard/style.module.scss";



export const ProductCard = ({ product, setCartList, cartList }) => {
   
    const addCarrinho = (product) =>{ 

        const filtered = cartList.find((cartProduct) => cartProduct.id === product.id) ;
        
        if(!filtered){  
            const value = [...cartList, product]         
        
            localStorage.setItem("carrinho", JSON.stringify(value));

        setCartList(value);
        }
    }
    return(
        <li className="containerProdutItem">
            <img className="img" src={product.img} alt={product.name} />
            <div className="containerContent">
                <h3 className="productName">{product.name}</h3>
                <span className="productCategory">{product.category}</span>
                <span className= "valor">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="button" onClick={() => {                   
                    addCarrinho(product)}}>Adicionar</button>
            </div>
        </li>
    )
}