import React, { useState, useEffect, useRef } from 'react';
import { cocktailService } from '@/_services'
import Card from '@/components/public/Card';

const Home = () => {
    const [cocktails, setCocktails] = useState([])
    const flag = useRef(false)

    useEffect(() => {
        if (flag.current === false) {
            cocktailService.getAllCocktails()
                .then(res => setCocktails(res.data.data))
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])

    return (
        <div className='home'>
            {
                cocktails.map((ckt, id) => (
                    <Card key={id} marcel={ckt} image='https://picsum.photos/1200/800?random='/>
                ))
            }
        </div>
    );
};

export default Home;