import React from 'react';
import Product from './product';

const Store = () => {
    return(
        <>
        <div className="container">
                <div className="row">
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product01.jpg" price = "Price : 499" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product02.jpg" price = "Price : 249" />
                    </div>
                    <div className="col-5 col-sm-3 ">
                        <Product src="./assets/images/product03.jpg" price = "Price : 399" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product04.jpg" price = "Price : 619" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product05.jpg" price = "Price : 450" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product06.jpg" price = "Price : 720" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product07.jpg" price = "Price : 840" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product08.jpg" price = "Price : 590" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product09.jpg" price = "Price : 430" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product10.jpg" price = "Price : 610" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product11.jpg" price = "Price : 400" />
                    </div>
                    <div className="col-5 col-sm-3">
                        <Product src="./assets/images/product12.jpg" price = "Price : 280" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;