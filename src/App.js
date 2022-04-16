import React from "react";
import './App.css';
import Index from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {title: "Rogue Starter Acoustic Guitar", price: 79.99, imageUrl: "/img/guitars/1.jpg"},
    {
        title: "Mitchell T333CE-BST Solid Top Mahogany Auditorium Acoustic-Electric Guitar",
        price: 399.99,
        imageUrl: "/img/guitars/2.webp"
    },
    {title: "Mitchell MS450 Modern Single-Cutaway Electric Guitar", price: 159.00, imageUrl: "/img/guitars/3.webp"},
    {title: "Rogue RA-090 Concert Cutaway Acoustic-Electric Guitar", price: 169.99, imageUrl: "/img/guitars/4.webp"},
    {title: "Kramer Assault 220 Electric Guitar", price: 379.00, imageUrl: "/img/guitars/5.webp"},
    {title: "Mitchell D120PK Acoustic Guitar Value Package", price: 179.99, imageUrl: "/img/guitars/6.jpg"},
    {title: "SIGMA SIG10 MINI Small-Bodied Travel Acoustic Guitar", price: 219.99, imageUrl: "/img/guitars/7.webp"},
    {
        title: "Rogue RA-090 Dreadnought Cutaway Acoustic-Electric Guitar",
        price: 149.99,
        imageUrl: "/img/guitars/8.webp"
    },
    {title: "Rogue RG-624 Left-Handed Dreadnought Acoustic Guitar", price: 99.99, imageUrl: "/img/guitars/9.webp"},
    {
        title: "Mitchell Terra Series T433CE-BST Auditorium-Size Cutaway Acoustic-Electric ...",
        price: 549.99,
        imageUrl: "/img/guitars/10.webp"
    },
    {
        title: "Mitchell MX430QABNAT Exotic Series Acoustic-Electric Quilted Ash Burl",
        price: 449.99,
        imageUrl: "/img/guitars/11.webp"
    },
    {title: "Mitchell O120CEWPM Auditorium Acoustic-Electric Guitar", price: 189.99, imageUrl: "/img/guitars/12.webp"},
    {
        title: "Kramer Baretta Special Maple Fingerboard Electric Guitar",
        price: 179.00,
        imageUrl: "/img/guitars/13.webp"
    },
    {
        title: "Rainsong Black Ice Series BI-WS1000N2 Graphite Acoustic-Electric Guitar",
        price: 3099.00,
        imageUrl: "/img/guitars/14.webp"
    },
    {title: "Rogue RD80PK Dreadnought Acoustic Guitar Pack", price: 139.00, imageUrl: "/img/guitars/15.webp"},
    {title: "Cort Meta Series MBM-1 Matthew Bellamy Signature Guitar", price: 699.99, imageUrl: "/img/guitars/16.webp"},
    {title: "Mitchell MS100 Short-Scale Electric Guitar", price: 149.00, imageUrl: "/img/guitars/17.webp"},
    {
        title: "B.C. Rich Warlock Extreme with Floyd Rose Electric Guitar",
        price: 1499.99,
        imageUrl: "/img/guitars/18.webp"
    },
    {
        title: "B.C. Rich Mockingbird Legacy ST with Floyd Rose Electric Guitar",
        price: 1399.99,
        imageUrl: "/img/guitars/19.webp"
    },
    {title: "Kramer Charlie Parra Vanguard Electric Guitar Outfit", price: 2222.00, imageUrl: "/img/guitars/20.webp"},


]

function App() {

    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [cartOpened, setCartOpened] = React.useState(false);
    const [totalPrice, setTotalPrice] = React.useState(0)


    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
        setTotalPrice(totalPrice + obj.price)
    }

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value);
    }
    const onRemoveItem = (obj) => {
        const filteredCartItems = cartItems.filter((item) => item.title !== obj.title);
        setCartItems(filteredCartItems);
        setTotalPrice(totalPrice - obj.price)
    }

    const onOrder = () => {
        alert("Your order has been placed.")
        setCartItems([])
        setTotalPrice(0)
    }


    return (

        <div className="wrapper ">
            {cartOpened ? <Drawer onClose={() => setCartOpened(false)}
                                  onRemove={(obj) => onRemoveItem(obj)}
                                  onOrder={onOrder}
                                  items={cartItems}
                                  totalPrice={totalPrice}/> :
                null
            }
            <Header onClickCart={() => setCartOpened(true)} totalPrice={totalPrice}/>

            <div className="content">
                <h1>{searchValue ? `Search for: "${searchValue}"` : 'All guitars'}</h1>

                <div className="search-block">

                    <input onChange={onChangeSearch} value={searchValue} placeholder="Search..."/>
                    <img onClick={() => setSearchValue('')} className="clear" style={{width: 30, height: 30}}
                         src="/img/btn.webp"/>

                </div>
                <div className="grid-container">
                    {arr
                        .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((obj, index) => (
                                <div className="grid-item">
                                    <Index
                                        key={index}
                                        obj={obj}
                                        onPlus={(obj) => onAddToCart(obj)}
                                        onMinus={(obj) => onRemoveItem(obj)}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App;