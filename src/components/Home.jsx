import About from "./about/About"
import Products from "./products/Products"
import TestSlider from "./banner/Slider"

const Home = (props) => {
    return(
        <>  
            <TestSlider />
            <About />
            <Products 
                items={props.items} 
                cartItems={props.cartItems} 
                setCartItems={props.setCartItems}
                setSearch={props.setSearch} 
                search={props.search}
                favoritesItems={props.favoritesItems}
                setFavoritesItems={props.setFavoritesItems}
            />
        </>
    )
}

export default Home