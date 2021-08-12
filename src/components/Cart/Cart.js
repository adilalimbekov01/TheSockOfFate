import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { Button, Container, Input, Modal, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCellImg: {
    width: 50,
  },
  paper: {
    position: 'absolute',
    width: 500,
    height:300,
    backgroundColor:'#ff7043',
    border: '2px solid #000',
    borderRadius:'10px',
    marginLeft:'500px',
    marginTop:'200px',
    display:"flex",
    flexDirection:'column',
    alignItems:'center'
  },
});

export default function Cart() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, buyProducts } = useProducts();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);

  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
    if (count < 1) {
      changeProductCount(count > 1, id);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    buyProducts()
  };

  return (
    <div style={{flex: '1 0 auto'}}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>IMG</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>TITLE</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>PRICE</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>COUNT</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>SUBPRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products?.length > 0 &&
            cart.products.map((product) => (
              <TableRow key={product.item.id}>
                <TableCell>
                  <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                </TableCell>
                <TableCell align="right">{product.item.title}</TableCell>
                <TableCell align="right">{product.item.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    value={product.count}
                    onChange={(e) => handleCountChange(e.target.value, product.item.id)}
                  />
                </TableCell>
                <TableCell align="right">{product.subPrice}</TableCell>
              </TableRow>
            ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>Total:</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5">{cart.totalPrice}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Container style={{display:'flex', justifyContent:'flex-end'}}>
    <Button style={{color:'white', backgroundColor:'#ffab91', marginTop:'20px'}} onClick={() => handleOpen()}>Buy</Button>
    </Container>
              {open == true ? <Modal
  disablePortal
  disableEnforceFocus
  disableAutoFocus
  open
  aria-labelledby="server-modal-title"
  aria-describedby="server-modal-description"
  className={classes.modal}
>
  <div className={classes.paper}>
    <h2 id="server-modal-title">Подтверждение покупки</h2>
    <Input placeholder="Введите ваш телефон" style={{marginBottom:'20px'}}/>
    <Input placeholder="Введите ваш адрес" style={{marginBottom:'20px'}}/>
    <Input placeholder="Введите способ оплаты"/>
    <Button style={{color:'white', backgroundColor:'#ffab91', marginTop:'40px'}} onClick={() => handleClose()}>Buy</Button>
  </div>
</Modal>: null}
    
    </div>
  );
}