
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


export default function CurrentSale() {
    const classes = useStyles();
    const currentProduct = useSelector(state => state.salesProduct[0]?.item)
    console.log(currentProduct, 'estoy en current')
    // const ultCompra = currentProduct.map( img => {
    //         {
    //             img.picture_url
    //         }
    // })

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {currentProduct.map((item) => (
          <ImageListItem key={item.currentProduct} cols={item.cols || 1}>
            <img src={item.picture_url} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}