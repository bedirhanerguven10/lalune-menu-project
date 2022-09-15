import React from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Menus from '../components/menus/Menus';
import './Home.css';
import data from '../helper/data';
import { useState } from 'react';
import AnimatedText from '../components/AnimatedText';


 const categ = ['Tüm Ürünler', ...new Set(data.map((item) => item.category ))];

 const Home = () => {

    const [menuItems, setmenuItems] = useState(data);
    const filterItems = (categoryItem) => {
        if (categoryItem === 'Tüm Ürünler') {
            setmenuItems(data);
        }else {
            const filtered = data.filter((item) => item.category === categoryItem)
            setmenuItems(filtered);
        }
    }
   
    return (
        <div>
            <Header />
            <AnimatedText/>
            <Categories categ={categ} filterItems={filterItems} />
            <Menus menuItems={menuItems} />
        </div>
    );
};

export default Home;