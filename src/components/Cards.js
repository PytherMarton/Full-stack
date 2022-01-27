import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./cardsStyles";

const Product = ( {product} ) => {
  const classes = useStyles();
 

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">
          {product.manaCost}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton  aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
        <Typography variant="h6">{` ${product.price}`}</Typography>
      </CardActions>
    </Card>
  );
};

export default Product;
