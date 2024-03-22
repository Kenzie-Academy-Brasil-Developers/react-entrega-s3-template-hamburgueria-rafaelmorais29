import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "../CartModal/style.module.scss";



export const CartModal = ({ cartList,setOpen,setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const ClearCarrinho = () =>{ 
      localStorage.setItem("carrinho", JSON.stringify([]));
      setCartList([])
  }

   return (
      <main className={style.containerModal} role="dialog">
         <div className={style.contentModal}>
            <div className={style.contentHeader} >
               <h2 className={style.carrinhoHeader}>Carrinho de compras</h2>
               <button className={style.carrinhoButton} onClick={() => setOpen(false)} aria-label="close" title="Fechar">
                  x
               </button>
            </div>
            <div className={style.listContent}>
               <ul className={style.listcontainer}>
                  {cartList.map((product) => (
                     <CartItemCard setCartList={setCartList} cartList={cartList} key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className={style.somaConatiner}>
               <div className={style.somaContent}>
                  <span className={style.somaTotal}>Total</span>
                  <span className={style.somaValor}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className={style.removeButton} onClick={() => ClearCarrinho()}>Remover todos</button>
            </div>
         </div>
      </main>
   );
};
