import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss";

export const Header = ({setOpen}) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.headerSection}>
         <div className={styles.headerContainer}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <form className={styles.headerForm}>
               <input className={styles.formSearch}
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}/>
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
            <button onClick={() => setOpen(true)} className={styles.headerButton} >
                <MdShoppingCart size={21} />
                <span className={styles.spanCarrinho}>0</span>
            </button>
         </div>
      </header>
   );
};
