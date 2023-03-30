import axios from 'axios';
import React, { useEffect , useState} from 'react';
import { Header } from '../partials/Header';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export const IdariHakedis = () => {
  const [products, setProducts] = useState([]);
  const [allProducts , setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() =>{
    axios.get("https://64221a5886992901b2c22f19.mockapi.io/products")
    .then((response) =>{
      setProducts(response.data);
      setAllProducts(response.data);
      
    });
  }, []);

  const handleSelect = (date) =>{

    let filtered = allProducts.filter((product)=>{
      let productDate = new Date(product["createdAt"]);
      return productDate >=date.selection.startDate && productDate <= date.selection.endDate 
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  return (
    <div>
        <Header/>
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {products.map((product)=>{
            let date = new Date(product["createdAt"])
            return (
            <tr key= {product["id"]}>
              <td>{product["id"]}</td>
              <td>{product["name"]}</td>
              <td>{date.toLocaleDateString()}</td>
            </tr>
            );
          })}
        </tr>
      </tbody>
    </table>
        
   
   
   
   
    </div>
  )
}
