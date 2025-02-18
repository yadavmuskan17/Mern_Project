import { useEffect, useState } from "react";
import BASE_URL from "../../config";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import axios from "axios";




const UpdatProduct=()=>{
 const [mydata,setMydata]=useState([]);

 const loadData=async()=>{
    const api=`${BASE_URL}/admin/productdisplay`;
    try{
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    catch(error){
        console.log(error);
    }
 }
 useEffect(()=>{
    loadData();
 },[])
   
 const handlePrimary= async(e,id)=>{
    e.preventDefault();
    const api=`${BASE_URL}/admin/productmakeprimary`;
    try{
        const response= await axios.post(api,{id:id});
        console.log(response.data);
    }catch(error) {
        console.log(error);
    }
    loadData();
 }
 const handleNormal= async(e,id)=>{
    e.preventDefault();
    const api=`${BASE_URL}/admin/productmakenormal`;
    try{
        const response= await axios.post(api,{id:id});
        console.log(response.data);
    }catch(error) {
        console.log(error);
    }
    loadData();
 }
const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 50, height: 50 }} alt="Uploaded File" />
            </td>
            <td>{key.name}</td>
            <td>{key.brand}</td>
            <td>{key.price}</td>
            <td>{key.description}</td>
            <td>{key.category}</td>
            <td>{key.ratings}</td>
            <td>
                {key.status=="normal"?
                (<>
                    <Button  variant="warning" onClick={(e)=>{handlePrimary(e,key._id)}}>Primary</Button>
                </>):(
                <>
                  <Button  variant="success"  onClick={(e)=>{handleNormal(e,key._id)}}>Normal</Button>
                </>)}
              
            </td>
        </tr>
        </>
    )
})


    return(
        <>
       <div>
        <h1>UPDATE PRODUCT</h1>
     
       <Table striped bordered hover style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Status</th>
          <th>Rating</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
      </div>

        </>
    )
}
export default UpdatProduct;