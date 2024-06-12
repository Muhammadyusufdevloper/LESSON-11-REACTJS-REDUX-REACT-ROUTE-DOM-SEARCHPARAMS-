import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import "./SingleRout.scss";

const SingleRout = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="single-product container">
            <div className="single-product__img-box">
                <img src={product.images[0]} alt="" />
            </div>
            <div className="single-product__info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <span>{product.price} руб</span>
            </div>
        </div>
    );
};

export default SingleRout;
