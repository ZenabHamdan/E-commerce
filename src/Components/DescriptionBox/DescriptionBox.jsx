import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return ( 
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that lets you buy and sell products or services with ease. 
                   You can browse through a wide range of products, compare prices and features, and place your order with a few clicks. 
                   You can also pay securely online and get your products delivered to your doorstep.
                   An E-commerce website makes shopping convenient, fast, and fun.</p>
                <p>
                   Browse our catalog and discover our latest collections and promotions.
                   Join our newsletter and follow us on social media to get exclusive updates and discounts.
                   Shop now and enjoy the experience. 
                </p>
            </div>
        </div>
     );
}
 
export default DescriptionBox;