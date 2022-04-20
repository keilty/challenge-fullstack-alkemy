import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/api/categories')
            .then(response => response.json())
            .then(category => {
                // console.log('perro')
                // console.log(category.data)
                setCategories(category.data)
            }).catch(error => console.log(error))
    }, [])

    return (
        <>
            <header className="">
                <h2>All Categories</h2>
            </header>
            <section className="">
                {
                    categories.map((category, i) => {
                        return (
                            <Link to={"/category/"+category.id} key={category + i}>
                                <h2>{category.name}</h2>
                            </Link>
                        )
                    })
                }
            </section>
        </ >
    )
}

export default Categories;
