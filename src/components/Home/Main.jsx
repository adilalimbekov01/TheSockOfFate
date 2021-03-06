import React, { useState } from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import NavBar from './NavBar'
import { Container, Grid } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    marginTop:'20px'
  },
  img: {
    height: '350px',
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
    borderRadius:'20px',
    
  },
  boot:{
    marginTop:10,
    backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtMeJxofy4FcWscRxXDhivfOl5vA1Oixg4w&usqp=CAU)",
    flexWrap: 'nowrap',
    width:'100%'
  },
  carusel:{
    width:'60%',
    marginTop:'20px',
    margin :'0 auto'
  },
  blockCar:{

    borderRadius:'20px',
    color:'black'
  }, 
  types:{
    margin: 0,
    padding:0,
    maxWidth:'65%',
    flexWrap:'wrap',
    display:'flex',
    justifyContent:'center',
    marginLeft: '220px',
    maxHeight:'100%'
  },
  type:{
    width:'45%',
    height:'200px',
    backgroundColor:'red',
    margin:18,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'black',
    fontSize:'30px',
    borderRadius:'15px'
  },
  search:{
    display:'none'
  },
}));

 
const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { productsData, getProductsData } = useProducts()
  const maxSteps = productsData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <> 
    <NavBar/>
    <Grid container  spacing-md={4} spacing-sm={3} className={classes.boot}>
   
   
    <Container>
    <div className={classes.carusel}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {productsData ? (productsData.map((step, index) => (
          <div key={step.title} className={classes.blockCar}>
            <Typography variant='h4' style={{textAlign:'center'}}>{step.title}</Typography>
            {Math.abs(activeStep - index) <= 2 ? (

              <img className={classes.img} src={step.image} alt={step.title} />
            ) : null}
          </div>
         ))): <Typography>Loading...</Typography>
      }
      </AutoPlaySwipeableViews>
      </div>
      <Grid xs={12} className={classes.types}>
        
      <div className={classes.type} style={{backgroundImage:'url(data:image/jpeg;base64,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)'}}>
            <Link to="/home" style={{textDecoration:'none', color:'black'}}>All Socks</Link>
        </div>
        
        <div  className={classes.type} style={{backgroundImage:'url(data:image/jpeg;base64,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)'}}>
        <Link to="/home" style={{textDecoration:'none', color:'black'}}>For men</Link>

        </div>
        <div className={classes.type} style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09iSJLIqfnuIch-JKIoUlbl0ed6b5Spx4Ng&usqp=CAU)'}}>
            <Link to="/home" style={{textDecoration:'none', color:'black'}}>For women</Link>
            
        </div>
        <div className={classes.type} style={{backgroundImage:'url(data:image/jpeg;base64,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)'}}>
        <Link to="/home" style={{textDecoration:'none', color:'black'}}>For baby</Link>
            
        </div>
        
      </Grid>
      </Container>
    </Grid>
    
    </>
    
  );
};

export default Main;