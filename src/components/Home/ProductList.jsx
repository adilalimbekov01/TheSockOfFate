import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';
import { getCurrentPage } from '../../helpers/functions';

const ProductList = () => {

    const { productsData, getProductsData,pages, history } = useProducts();

    const [page, setPage] = useState(getCurrentPage());
    useEffect(() => {
      getProductsData();
    }, []);

    const handlePage = (e, page) => {
        const search = new URLSearchParams(window.location.search);
        search.set('_page', page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProductsData();
        setPage(page);
      };

  return (

    <Grid container spacing={10} >
      {productsData ? (
        productsData.map((item) => (
          <Grid item>
            <ProductCard item={item}/>
          </Grid>
        ))
      ) : (
        <>
          <h1>...loading</h1>
        </>
      )},

        <Container style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <Pagination 
        count={pages} 
        page={+page} 
        onChange={handlePage}
        variant="outlined" color="secondary"
        showFirstButton={true}
        showLastButton={true}
        />
      </Container>
    </Grid>
  );
};

export default ProductList;