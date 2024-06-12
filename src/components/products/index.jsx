import { useCallback, useEffect, useState } from "react";
import "./Products.scss";
import axios from "../../api";
import { Link, useSearchParams } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import Modal from "../model";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Products = () => {
    const [categoryData, setCategoryData] = useState(null);
    const [productData, setProductData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [limitParam, setLimitParam] = useState(parseInt(searchParams.get('limit')) || 6);
    const [limitLoading, setLimitLoading] = useState(false);
    const [singleModal, setSingleModal] = useState(null);
    const id = searchParams.get("single");

    useEffect(() => {
        axios
            .get(`/products/categories`)
            .then(response => {
                setCategoryData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const category = selectedCategory !== 'all' ? `/category/${selectedCategory}` : '';
        setLimitLoading(true);
        axios
            .get(`/products${category}?limit=${limitParam}`)
            .then(response => {
                setProductData(response.data.products);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setLimitLoading(false));
    }, [selectedCategory, limitParam]);

    useEffect(() => {
        setSearchParams({ category: selectedCategory, limit: limitParam, single: id });
    }, [selectedCategory, limitParam, id, setSearchParams]);

    useEffect(() => {
        if (id) {
            axios
                .get(`/products/${id}`)
                .then(res => setSingleModal(res.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    const closeSingleModal = useCallback(() => {
        setSearchParams({});
        setSingleModal(null);
    }, [setSearchParams]);

    const handleClick = (category) => {
        const formattedCategory = category.toLowerCase().split(" ").join("-");
        setSelectedCategory(formattedCategory);
    };

    const categoryElements = categoryData?.map(category => (
        <data
            className={` ${selectedCategory === category.name.toLowerCase().split(" ").join("-") ? "products__data" : ""}`}
            key={category.id}
            onClick={() => handleClick(category.name)}
        >
            {category.name}
        </data>
    ));

    const products = productData?.map(product => (
        <div key={product.id} className="products__card">
            <div className="products__img-boxes" onClick={() => setSearchParams({ single: product.id })}>
                <img src={product.images[0]} alt={`${product.title} images`} />
            </div>
            <div className="products__info-boxes">
                <Link to={`/single-rout?id=${product.id}`} className="products__info-title">{product.title}</Link>
                <p className="products__info-text">{product.description}</p>
            </div>
            <div className="products__buttons">
                <span className="products__buttons__price-text">
                    {product.price} руб
                </span>
                <button className="products__buttons__cart-btn">
                    <BsCart />
                    <span>В корзину</span>
                </button>
            </div>
        </div>
    ));
    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="products__top-card">
                        <span className="products__top-text">
                            Главная &gt; Каталог &gt; <span>Готовые наборы</span>
                        </span>
                        <h1 className="products__title">Готовые наборы</h1>
                    </div>
                    <div className="products__categories">
                        <data
                            className={` ${selectedCategory === 'all' ? "products__data" : ""}`}
                            onClick={() => handleClick('all')}
                        >
                            All
                        </data>
                        {categoryElements}
                    </div>
                    <div className="products__cards">
                        {products}
                    </div>
                    <button disabled={limitLoading} onClick={() => setLimitParam(prevLimit => prevLimit + 6)} className="products__see-more">Показать ещё</button>
                </div>
            </section>
            {singleModal ?
                <Modal close={closeSingleModal}>
                    <div className="modal__img-box">
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCube, Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={singleModal?.images[0]} alt={`Product img`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={singleModal?.images[1]} alt={`Product img`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={singleModal?.images[2]} alt={`Product img`} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="modal__info">
                        <h3>{singleModal?.title}</h3>
                        <p>{singleModal?.description}</p>
                        <span>{singleModal?.price} руб</span>
                    </div>
                    <button onClick={closeSingleModal} className="modal__close-btn"><IoMdCloseCircleOutline /></button>
                </Modal>
                : <></>}
        </>
    );
}

export default Products;
