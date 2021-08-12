import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { useProducts } from '../../contexts/ProductContext';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarIcon from '@material-ui/icons/Star';



const useStyles = makeStyles((theme) => ({
  root: {
    width: 340,
    height: 450,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    borderRadius:'15px',
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardActionsContainer: {},
  icons:{
    display:'flex',
    justifyContent: 'space-around',
    height: 50,
  }
}));

const ProductCard = ({ item }) => {

  const classes = useStyles();

  const { deleteProduct, history, addProductToCart, cart, addProductToFavorites } = useProducts();

  const [expanded, setExpanded] = React.useState(false);

  const checkItemInCart = (id) => {
    const foundItem = cart?.products?.find((product) => product.item.id === id);
    return foundItem ? 'secondary' : 'default';
  };

  const checkItemInFav = (id) => {
    const foundItem = cart?.products?.find((product) => product.item.id === id);
    return foundItem ? 'yellow' : 'default';
  };

  return (
    <Card className={classes.root} >
      <CardHeader
        title={item.title}/>
          <Container>
            <Typography >{item.type}</Typography>
            </Container>
      <NavLink to={`/details/${item.id}`}>
        <CardMedia className={classes.media} image={item.image} title="Paella dish" />
      </NavLink>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Container>
          <Box component="span" m={1} style={{color:'#ff8a65', fontSize:'20px'}}>
            {item.price}с
          </Box>
        </Container>
        <Container className={classes.icons}>
          <IconButton
          onClick={()=> addProductToFavorites(item)}
          color={checkItemInFav(item.id)}>
          
            <StarIcon/>
          </IconButton>
          <IconButton
            color={checkItemInCart(item.id)}
            onClick={() => addProductToCart(item)}
            aria-label="add to favorites"
          >
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton onClick={() => history.push(`/edit/${item.id}`)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={() => deleteProduct(item.id)}>
            <DeleteIcon style={{color:'#e64a19'}} />
          </IconButton>
        </Container>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
