
import CommonPractise from "./reactExercises/CommonPractise"
import Exercise1 from "./reactExercises/Exercise1"
import { Exercise2Blog } from "./reactExercises/Exercise2Blog"
import UserCard from "./reactExercises/exercise3";
import Exercise4 from "./reactExercises/Exercise4"
import Exercise5 from "./reactExercises/Exercise5"
import Exercise6 from "./reactExercises/Exercise6"
import Exercise7 from "./reactExercises/Exercise7"
import Exercise8 from "./reactExercises/Exercise8"
import Exercise9 from "./reactExercises/Exercise9"
import Exercise10 from "./reactExercises/Exercise10"    
import LoginForm from "./reactExercises/Exercise11"
import Exercise12 from "./reactExercises/Exercise12"
import Exercise13 from "./reactExercises/Exercise13"
import {GreetingExercise15 } from "./reactExercises/GreetingExercise15";
import languageContext from "./reactExercises/LanguageContext";
import Exercise16 from "./reactExercises/Exercise16/CartSummary"
import ProductItem from "./reactExercises/Exercise16/ProductItem"
import cartContext from "./reactExercises/Exercise16/CartContext"


import { useState ,useReducer} from "react";


function App() {

    const [isVisible, setIsVisible] = useState(true)
    const [islogin, setIsLogin] = useState(true)
    const [user,setUSer]= useState({name:'ismail',age:25, city:'hargeisa'})
    
    

    const togable = () => {
        setIsVisible(!isVisible)
    }

    const [language,setLanguage]= useState('en');
   const togableLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));

  };

  const [cartItems,setCartItems] = useState([]);
   const addToCart=(item)=>{
    setCartItems([...cartItems,item]);

   }

   const removeFromCart=(itemId)=>{
    setCartItems(cartItems.filter((item)=> item.id !== itemId));
   }

   const value = {cartItems,addToCart,removeFromCart}

 

    return (

        <>  

        <cartContext.Provider value={value}>
            <ProductItem itemId={1} itemName="widget" price={19.99}/>
            <ProductItem itemId={2} itemName="wadget" price={29.99}/>
            <Exercise16/>
        </cartContext.Provider>
        
        
          <languageContext.Provider value={{language,togableLanguage}}>
            <button onClick={togableLanguage}>
                switch to {language === 'en' ? 'Spanish': 'English' }
           
            </button>
        
              <GreetingExercise15/>
          </languageContext.Provider>

            <CommonPractise/>
            <Exercise13/>
            <Exercise12/>
            <LoginForm />
            <Exercise10 id={101} name={'ismail'} email={'imsialmire2@gmail.com'} />
            <Exercise9 />
            <Exercise8 />
            <Exercise7 />
            <Exercise6 />
            <Exercise5 />
            <Exercise1 />
            <Exercise4 />
            <Exercise2Blog />
            <UserCard
                UserName={"ismail"}
                Email={"ismailmire2@gmail.com"}
            />
            <button onClick={togable}>{isVisible ? 'hide' : 'show'}turn</button>
            {isVisible && <p>the button is</p>}

        </>

    )
}

export default App;




