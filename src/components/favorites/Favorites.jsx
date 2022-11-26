import React from "react";
import axios from "axios";
import style from "./favorites.module.css";
import FavoritesCard from "./favoritesCard/favoritesCard";
import { AppContext } from "../../App"; 

const Favorites = (props) => {

    const context = React.useContext(AppContext);

    const onAddToCart = async (objCart) => {
      try {
        const findCartItem = context.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
        if (findCartItem) {
          // удаление с бэкенда
          axios.delete(`https://63600ac33e8f65f283c23b81.mockapi.io/cart/${findCartItem.id}`)
          // удаление с фронтенда
          context.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objCart.myId))
        } else {
          const { data } = await axios.post('https://63600ac33e8f65f283c23b81.mockapi.io/cart', objCart)
          context.setCartItems([...context.cartItems, data])
        }
      } catch {
        alert('Не удалось добавить товар в корзину')
      }
    }
  
    const onRemoveFavorites = (id) => {
        axios.delete(`https://63600ac33e8f65f283c23b81.mockapi.io/favorites/${id}`)
        context.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    }

    return(
        <div className={style.products_section}>

          <div className={style.search}>
            <h2>Избранные товары</h2> 
          </div>
                
          <div className={style.products}> 
            
            {
              context.favoritesItems.map( obj => {
                return(
                  <FavoritesCard 
                    key={obj.id} 
                    id={obj.id}
                    title={obj.title} 
                    description={obj.description} 
                    price={obj.price} 
                    img={obj.img}
                    onFavorite={
                      (id) => {
                        onRemoveFavorites(id)
                      }
                    }
                    onPlus={
                      (cartObj) => {
                        onAddToCart(cartObj)
                      }
                    }
                  />
                )
              } )
            }

          </div>
      </div>
    )
}

export default Favorites