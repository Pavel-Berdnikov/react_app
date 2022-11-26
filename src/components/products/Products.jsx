import axios from 'axios';
import React from "react";
import Card from "./card/Card"
import style from "./products.module.css"

const Products = (props) => {

  const onAddToCart = async (objCart) => {
    try {
      const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if (findCartItem) {
        axios.delete(`https://63600ac33e8f65f283c23b81.mockapi.io/cart/${findCartItem.id}`)
        props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objCart.myId))
      } else {
        const { data } = await axios.post('https://63600ac33e8f65f283c23b81.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, data]);
      }
    }
    catch {
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onAddToFavorite = async (objFavorite) => {
    try {
      const findFavotiteItem = props.favoritesItems.find(favoriteItem => favoriteItem.myId === objFavorite.myId)
      if (findFavotiteItem) {
        axios.delete(`https://63600ac33e8f65f283c23b81.mockapi.io/favorites/${findFavotiteItem.id}`)
        props.setFavoritesItems(prev => prev.filter(favItems => favItems.myId !== objFavorite.myId))
      } else {
        const { data } = await axios.post('https://63600ac33e8f65f283c23b81.mockapi.io/favorites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, data]);
      }
    }
    catch {
      alert('Не удалось добавить товар в избранное')
    }
  }

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }

  return (
    <div className={style.products_section}>

      <div className={style.search}>

        <h2>{props.search ? `Поиск по запросу: ` + props.search : 'Все телевизоры'}</h2>
        <div className={style.search_block}>
          <img src="/img/search.png" alt="search" />
          <input onChange={onSearchInput} placeholder="Поиск по товарам" />
        </div>
      </div>

      <div className={style.products}>
        {
          props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())).map((obj, index) => {
            return (
              <Card
                key={index}
                {...obj}

                onFavorite={
                  (favoritesObj) => {
                    onAddToFavorite(favoritesObj)
                  }
                }
                onPlus={
                  (cartObj) => {
                    onAddToCart(cartObj)
                  }
                }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products