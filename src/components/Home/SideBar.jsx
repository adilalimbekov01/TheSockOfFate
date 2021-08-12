import {
    Radio,
    FormControl,
    Grid,
    RadioGroup,
    FormControlLabel,
    Slider,
    Container,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import { useProducts } from "../../contexts/ProductContext";
  import { useState } from "react";
  import HomeIcon from '@material-ui/icons/Home';
  import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
  import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Link } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin:'0 20px 20px 20px',
      minWidth: "170px",
      maxWidth: "300px",
      height: '100%',
      minHeight:'250px',
      color: 'black',
    },
    typographys:{
      marginTop:'20px',  
    color: 'white',
      
  },
  pages:{
    borderRadius: theme.shape.borderRadius,
    position:'reletive',
    display:'flex',
    alignItem:'flex-start',
    justifyContent:"space-around",
    border:'2px solid #ffab91',
    borderRadius:'100px',
    margin:'10px 0',
    color:'black'
  },
  }));
  
  const SideBar = () => {
    const classes = useStyles();
    const { getProductsData, history } = useProducts()
    const [type, setType] = useState(getType())
    const [price, setPrice] = useState(getPrice())
  
    function getType(){
      const search = new URLSearchParams(history.location.search)
      return search.get('type')
    }
  
    function getPrice(){
      const search = new URLSearchParams(history.location.search)
      return search.get('price_lte')
    }
  
    const handleChangeType = (e) => {
      if(e.target.value == "all"){
        const search = new URLSearchParams(history.location.search)
        search.delete('type')
        history.push(`${history.location.pathname}?${search.toString()}}`)
        getProductsData()
        setType(e.target.value)
        return
      }
      const search = new URLSearchParams(history.location.search)
      search.set('type', e.target.value)
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setType(e.target.value)
    }
  
    const handleChangePrice = (e, value) => {
      console.log(value)
      const search = new URLSearchParams(history.location.search)
      search.set('price_lte', value)
      console.log(search)
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setPrice(value)
    }
  
    const resetPrice = () => {
      const search = new URLSearchParams(history.location.search)
      search.delete('price_lte')
      history.push(`${history.location.pathname}?${search.toString()}`)
      getProductsData()
      setPrice(getPrice())
    }
  
    return (
      <Grid item md={3}  >
          <Container style={{boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',position:'fixed', width:'16%',  marginTop:'7px',marginLeft:'20px', border:"3px solid #ffab91",borderRadius:'10px', textAlign:'center', display: 'flex', flexDirection:'column', alignItems:'center'}}>

          <FormControl component="fieldset">
            <Container className={classes.typographys}>
            <Link to='/' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <div className={classes.pagesIcon}> 
              <HomeIcon/>
              </div>
              <Typography variant = 'h6'>Home</Typography>
              </div>
            </Link>
            <Link to='/aboutus' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <SupervisorAccountIcon/><Typography variant = 'h6'>About Us</Typography>
              </div>
            </Link>
            <Link to='/contacts' style ={{textDecoration: 'none', color:'black'}}>
              <div className={classes.pages}>
              <ContactSupportIcon/><Typography variant = 'h6'>Contacts</Typography>
              </div>
            </Link>
            </Container>
           
            <RadioGroup value={type} onChange={handleChangeType} style={{color:'secondary'}} >
              <Container>
              <FormControlLabel
                value="Baby"
                control={<Radio />}
                label="Baby"
              />
              <FormControlLabel
                value="Feminine"
                control={<Radio />}
                label="Feminine"
              />
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All socks"
              />
              </Container>
            </RadioGroup>
          </FormControl>
         
          <Grid>
            <Slider
            value={price}
            onChange={handleChangePrice}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            style={{color:'#d84315'}}
            min={250}
            max={999}
            />
            <button onClick={resetPrice} variant="outlined" style={{color: "#d84315", border: '2px solid #d84315', width:'200px', height:'30px', fontSize:"20px", borderRadius:'10px', marginBottom:"20px",marginLeft:"-14px", backgroundColor:'inherit'}} >Reset price</button>
          </Grid>
          </Container>
      </Grid>
    );
  };
  
  export default SideBar;