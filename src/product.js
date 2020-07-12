import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

const Product = (props) => {
    return(
    <Card className="mt-2">
        <CardImg src={props.src} />
        <CardTitle className="text-center">{props.price}</CardTitle>
    </Card>   
    );
}

export default Product;