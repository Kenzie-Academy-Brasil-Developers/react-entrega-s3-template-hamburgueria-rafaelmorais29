import { ProductCard } from "./ProductCard";
import style from "../ProductList/style.module.scss";

export const ProductList = ({ productList, cartList, setCartList }) => {
   return (
      <ul className={style.productListContainer}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
         ))}
      </ul>
   );
};
