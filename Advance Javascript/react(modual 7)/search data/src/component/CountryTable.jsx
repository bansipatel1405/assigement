import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


const CountryTable = () => {
    const[countries,setcountries] = useState([]);
    const[search,setsearch]= useState("");
    const[filter,setfilter] =  useState([]);

    const getcountries = async()=>{
      try{
        const responce = await axios.get('https://restcountries.com/v2/all')
        setcountries(responce.data)
        setfilter(responce.data)
      }catch(error) {
          console.log(error);
        }
    };
    useEffect(()=>{
      getcountries()
    },[])
    useEffect(()=>{
        const result = countries.filter(country =>{
            return country.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setfilter(result)
    },[search])
  
  
    const columns = [
      {
        name:"country Name",
        selector:row=>row.name,
        sortable:true
      },
      {
        name:"country Native Name",
        selector:row=>row.nativeName
      },
      {
        name:"country capital",
        selector:row=>row.capital
      },
      {
        name:"country flag",
        selector:row=><img width={50} height={50} src={row.flag}/>
      },
      {
        name:"Action",
        cell:row => <button className='btn btn-primary' onClick={()=>alert(row.alpha2Code)}>Edit</button>
      }
    ]
  return (
    <DataTable 
    title= "country list" 
    columns = {columns}
     data={filter} 
    pagination 
    fixedHeaderScrollHeight='450px'
    fixedHeader
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    actions={
        <button className='btn-sm btn-info'>Export</button>
    }
    subHeader
    subHeaderComponent = {
        <input type="text" placeholder='search here' className='form-control w-25' value={search} onChange={(e)=> setsearch(e.target.value)}/>
    }
    subHeaderAlign='left'
    />
  )
}

export default CountryTable