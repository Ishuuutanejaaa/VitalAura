// src/ProductList.js
import React from 'react';
import './ProductList.css'; // Import CSS file

const products = [
    {
        id: 1,
        name: 'Paracetamol',
        price: '₹10.00',
        description: 'A common pain reliever and fever reducer.',
        imgSrc: 'https://tiimg.tistatic.com/fp/1/007/784/paracetamol-500mg-tablets--229.jpg'
    },
    {
        id: 2,
        name: 'Levocetirizine',
        price: '₹35.00',
        description: 'An antihistamine used to relieve allergy symptoms.',
        imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/7/SA/XN/TM/135658020/levocetirizine-hydrochloride-montelukast-sodium-tablets-ip-500x500.jpg'
    },
    {
        id: 3,
        name: 'Augmentin',
        price: '₹204.00',
        description: 'A combination antibiotic used to treat various infections.',
        imgSrc: 'https://capsula.ge/wp-content/uploads/2022/06/14395.png'
    },
    {
        id: 4,
        name: 'Combiflam',
        price: '₹45.00',
        description: 'A pain relief tablet that combines ibuprofen and paracetamol.',
        imgSrc: 'https://tiimg.tistatic.com/fp/1/007/846/combiflam-plus-tablet-726.jpg'
    },
    {
        id: 5,
        name: 'Ibugesic',
        price: '₹30.00',
        description: 'A pain relief medicine containing ibuprofen and paracetamol.',
        imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/4/410567079/HK/MD/GO/141952698/ibusuper-p-susp-1-500x500.jpg'
    },
    {
        id: 6,
        name: 'Jakavi',
        price: '₹22,778.00',
        description: 'A medication used to treat myelofibrosis and polycythemia vera.',
        imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2024/3/396810143/EN/NO/PG/18850296/5-mg-jakavi-tablet.jpg'
    },
    {
        id: 7,
        name: 'Atenolol',
        price: '₹30.00',
        description: 'A beta-blocker used to treat high blood pressure and heart conditions.',
        imgSrc: 'https://www.emeds.pk/upload/pro-imges/image-8/tenormin-50mg.webp'
    },
    {
        id: 8,
        name: 'Fenak Plus',
        price: '₹26.00',
        description: 'A combination of Diclofenac and Paracetamol used for pain relief.',
        imgSrc: 'https://images.apollo247.in/pub/media/catalog/product/F/E/FEN0016_1_1.jpg'
    },
    {
        id: 9,
        name: 'Refresh Tears Eye Drops',
        price: '₹250.00',
        description: 'Lubricating eye drops to relieve dry eyes.',
        imgSrc: 'https://www.refreshbrand.com/Content/images/refresh-tears-hero-packaging.png'
    },
    {
        id: 10,
        name: 'Benadryl',
        price: '₹180.00',
        description: 'An antihistamine used to relieve allergy symptoms.',
        imgSrc: 'https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg'
    },
    {
        id: 11,
        name: 'Betadine',
        price: '₹90.00',
        description: 'An antiseptic solution used to prevent infection in minor cuts and abrasions.',
        imgSrc: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/k6esilwkexujhgoc0j7m.jpg'
    },
    {
        id: 12,
        name: 'Aromasin',
        price: '₹400.00',
        description: 'A medication used to treat certain types of breast cancer.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlciAj4aKBF0ubV9qrMjaoyxmwPGy7Zf1bbw&s'
    }
];

const ProductList = () => {
    return (
        <div>
            <header>
                <h1>Online Medicine Store</h1>
            </header>

            <section className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.imgSrc} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <div className="buttons">
                            <button className="buy-now">Buy Now</button>
                            <button className="cart-icon">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductList;
