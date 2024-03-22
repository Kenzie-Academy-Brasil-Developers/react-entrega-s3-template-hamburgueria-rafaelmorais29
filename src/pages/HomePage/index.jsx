import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import "../../styles/index.scss";
import { api } from "../../services/api";
import style from "../HomePage/style.module.scss";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   useEffect(() => {
      const getProduts = async () => {
         
         const {data}= await api.get("products");
         setProductList(data);
         
      };
      getProduts();
   })
  
   const [cartList, setCartList] = useState([]);  

   useEffect(() => {
   
      const saveCartLocalS = localStorage.getItem("carrinho");
  
      if (saveCartLocalS) {
        const storageCartItems = JSON.parse(saveCartLocalS);
        setCartList(storageCartItems);
      }

   },[]);

   const [open, setOpen] = useState(false); 
   
   return (
      <>
         <Header setOpen = {setOpen}/>
         <main className={style.productList}>
            <ProductList productList={productList} setCartList={setCartList} cartList={cartList} />
            {open ? <CartModal setOpen = {setOpen} cartList={cartList} setCartList={setCartList} /> : null}
         </main>
      </>
   );
};
