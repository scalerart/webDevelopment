import '../assets/style/ProductDetails.css'
import { useParams } from 'react-router';
import fakeData from '../fakeData';
import Product from './Product';

const ProductDetails = () => {
    const { productKey } = useParams()

    const product = fakeData.find(product => product.key === productKey)
    return (
        <section className='productDetails'>
            <Product
                showStock={true}
                showDetails={true}
                product={product}>
            </Product>
        </section>
    );
};

export default ProductDetails;