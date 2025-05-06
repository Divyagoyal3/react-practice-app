import { createContext, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";



export const DataContext = createContext(null);


export const DataProvider = ({children}) => { 
  const [data, setData] = useState();
    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
           const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
           console.log(res);
           const productsData = res.data.products
           setData(productsData)
           
        } catch (error) {
            console.log(error);

        }
    }

     const getUniqueCategory = (data, property) =>{
            let newVal = data?.map((curElem) =>{
                return curElem[property];
    
            }) 
            return newVal = ["All",...new Set(newVal)];
        }
        
        const categoryOnlyData = getUniqueCategory(data, "category");
        const brandOnlyData = getUniqueCategory(data, "brand");
        const priceOnlyData = getUniqueCategory(data, "price");
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData, priceOnlyData }}>
      {children}
    </DataContext.Provider>
  );
}    

export const getData = ()=> useContext(DataContext)