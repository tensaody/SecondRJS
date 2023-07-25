import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
// import Footer from '../components/Footer'



export default function Home() {
  
     //declare variable
     const [count, setCount] = useState(0)
    //  declare variable for count
    const [products, setProducts] = useState([])
    // declare variable for store data from api, and [] dou to data from api is the array
    const [categories, setCategories] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)
    //useState(true) doing state loading

    const fetchProducts = () =>{
        fetch('https://api.escuelajs.co/api/v1/products?limit=8&offset=0')
        // limit=8&offset=0 កំណត់អោយ page =1pages
        .then(res => res.json())
        .then(resp => {
          setProducts(resp)
          setLoading(false)
          // when get data is fales.
        })
    }

    const fetchCategories = () =>{
      fetch('https://api.escuelajs.co/api/v1/categories?limit=8&offset=0')
      // limit=8&offset=0 កំណត់អោយ page =1pages
      .then(res => res.json())
      .then(resp => setCategories(resp))
  }

  const fetchUsers = () =>{
    fetch('https://api.escuelajs.co/api/v1/users?limit=8&offset=0')
    // limit=8&offset=0 កំណត់អោយ page =1pages
    .then(res => res.json())
    .then(resp => setUsers(resp))
}



    useEffect(() => {
        // call to api
        fetchProducts()
    }, [])

    useEffect(() => {
      // call to api
      fetchCategories()
    }, [])

    useEffect(() => {
      fetchUsers()
    })

  return (
    <>
      {/* <Navbar /> */}
      <main className='container'>
        {/* <h1>
            you click {count} times
        </h1> */}
        <h1 className='text-center'>Show all Products</h1>
        {/* <button onClick={() => setCount(count+1)}> click me</button> */}
        {/*  setCount(count+1) call functions*/}
    
    <div className='row g-4'>
        {
            isLoading ? 
            <>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            <div className='col-12 col-md-3'>
              <Loading />
            </div>
            </>
            
            
            
            : products.map((p) => (
              <div
              // កាត់បន្ថយ Warning
              key={p.id}

              className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card 
                  imageURL = {p.images[0]}
                  // images copy from product moc data
                  title = {p.title}
                  desc = {p.description}
                />
              </div>
          ))
        }
    </div>


          
        <h1 className='text-center'>Show all Categories</h1>
        <div className='row g-4'>
            {
                categories.map((p) => (
                    <div
                    // កាត់បន្ថយ Warning
                    key={p.id}

                    className='col-12 col-sm-6 col-md-4 col-lg-3'>
                      <Card 
                        imageURL = {p.image[0]}
                        // images copy from product moc data
                        title = {p.name}
                        // desc = {c.description}
                      />
                    </div>
                ))
            }
        </div>

        <h1 className='text-center'> Show all Users </h1>
        <div className='row g-4'>
            {
                users.map((p) => (
                    <div
                    // កាត់បន្ថយ Warning
                    key={p.id}

                    className='col-12 col-sm-6 col-md-4 col-lg-3'>
                      <Card 
                        imageURL = {p.avatar[0]}
                        // images copy from product moc data
                        title = {p.role}
                        // desc = {c.description}
                      />
                    </div>
                ))
            }
        </div>
        {/* <Footer /> */}
        </main>
    </>
  )
}
