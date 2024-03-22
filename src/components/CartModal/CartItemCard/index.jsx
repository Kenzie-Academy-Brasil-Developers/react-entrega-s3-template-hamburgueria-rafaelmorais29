import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss";

export const CartItemCard = ({ product,setCartList,cartList }) => {

   const removeCarrinho = (product) =>{ 
      const filtered = cartList.filter((cartProduct) => cartProduct !== product);
       localStorage.setItem("carrinho", JSON.stringify(filtered));
      setCartList(filtered);
      }

   return (
      <li className={style.cardList} >
         <div className={style.cardListContent} >
            <img className={style.imgCard} src={product.img} alt={product.name} />
            <div className={style.nameValroContainer}>
               <h3 className={style.nameItem}>{product.name}</h3>
               <span className={style.valorCard}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button className="buttonRemove" onClick={() => removeCarrinho(product)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
}
