import Homecss from '../assets/css/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PrevArrow from '../components/ui/PrevArrow';
import NextArrow from '../components/ui/NextArrow';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/categoryService';
import { getProducts } from '../services/productService';

const HomePage = () => {
    const settings = {
        centerMode: true,
        centerPadding: "160px",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getCategories()
            .then((response) => {
                const fixedPath = response.map(item => {
                    return {
                        ...item,
                        Image: item.Image.replace(/\\/g, '/'),
                    };
                })
                setCategory(fixedPath);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
        getProducts()
            .then((res) => {
                const response = res[0];
                const fixedPath = response.map(item => ({
                    ...item,
                    Size: JSON.parse(item.Size),
                    Parameter: JSON.parse(item.Parameter),
                    Image: JSON.parse(item.Image)
                }))
                setProduct(fixedPath);
            })
            .catch((err) => { console.log("Error fetching products:", err); });

    }, [])
    return (
        <>
            <div className="carousel slide" id="slider-main" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider-main" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#slider-main" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#slider-main" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#slider-main" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#slider-main" data-bs-slide-to="4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="#"><img className="img-fluid" src="images/slide/slide1.webp" alt="Hình ảnh 1" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="#"><img className="img-fluid" src="images/slide/slide2.webp" alt="Hình ảnh 2" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="#"><img className="img-fluid" src="images/slide/slide3.webp" alt="Hình ảnh 3" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="#"><img className="img-fluid" src="images/slide/slide4.webp" alt="Hình ảnh 4" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="#"><img className="img-fluid" src="images/slide/slide5.webp" alt="Hình ảnh 4" /></a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider-main" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider-main" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                {category && category.length > 0 && (
                    <div className="category-block mt-5">
                        <div className="category-head">
                            <h4 className="text-center my-4" style={{ fontWeight: '500' }}>DANH MỤC SẢN PHẨM</h4>
                        </div>
                        <div className="category-main">
                            {category.map((item) => (
                                <div className="card border-0" key={item.Id}>
                                    <div className="card-body">
                                        <a href="#" className="nav-link">
                                            <div className="img-fluid">
                                                <img className="img-thumbnail" src={`http://localhost:5000/${item.Image}`} alt={item.Name} width="100%" />
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center">{item.Name}</div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="collection-block mt-5">
                    <div className="collection-head clearfit" style={{ height: '40px' }}>
                        <h4 className="float-start" style={{ fontWeight: '500', color: 'light' }}>BỘ SƯU TẬP MỚI</h4>
                        <a href="/category/new-goods" className="float-end nav-link text-danger mt-2">XEM TẤT CẢ</a>
                    </div>
                    <div className="collection-main">
                        <Slider {...settings}>
                            <div className="collection-item p-2">
                                <a href="#" className="img-fluid">
                                    <img src="images/collection/collection1.webp" alt="Sản phẩm 1" width="100%" />
                                </a>
                            </div>
                            <div className="collection-item p-2">
                                <a href="#" className="img-fluid">
                                    <img src="images/collection/collection2.webp" alt="Sản phẩm 2" width="100%" />
                                </a>
                            </div>
                            <div className="collection-item p-2">
                                <a href="#" className="img-fluid">
                                    <img src="images/collection/collection3.webp" alt="Sản phẩm 3" width="100%" />
                                </a>
                            </div>
                            <div className="collection-item p-2">
                                <a href="#" className="img-fluid">
                                    <img src="images/collection/collection4.webp" alt="Sản phẩm 4" width="100%" />
                                </a>
                            </div>
                            <div className="collection-item p-2">
                                <a href="#" className="img-fluid">
                                    <img src="images/collection/collection5.webp" alt="Sản phẩm 5" width="100%" />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
                {product && product.length > 0 && (
                    <div className="product-block mt-5">
                        <div className="product-head clearfit" style={{ height: '40px' }}>
                            <h4 className="float-start" style={{ fontWeight: '500', color: 'light' }}>SẢN PHẨM MỚI</h4>
                            <a href="/category/new-goods" className="float-end nav-link text-danger mt-2">XEM TẤT CẢ</a>
                        </div>
                        <div className="product-main">
                            <Slider {...settings2}>
                                {product.map((item) => (
                                    <div className="product-item">
                                        <div className="card border-0">
                                            <div className="img-fluid">
                                                <img className="card-img-top" src={`http://localhost:5000/${item.Image[0]}`} alt={`Sản phẩm ${item.Id}`} />
                                                <div className="block-badge">
                                                    <span className="badge">MỚI</span>
                                                </div>
                                            </div>
                                            <div className="card-body p-0">
                                                <p className="trademark">{item.Trademark.toUpperCase()}</p>
                                                <a href="#" className="nav-link"><div className="link-text">{`${item.Name} - ${item.Color}`}</div></a>
                                                <div className="card-price">
                                                    <span className="price-after">{(parseInt(item.Price) * 0.6).toLocaleString()}đ</span>
                                                    <span className="price-before">{parseInt(item.Price).toLocaleString()}đ</span>
                                                </div>
                                                <div className="btn-group d-flex justify-content-center align-items-center mt-3">
                                                    <a href="#" type="button" className="btn btn-success rounded-0">THÊM GIỎ HÀNG</a>
                                                    <a href="#" type="button" className="btn btn-outline-warning rounded-0">MUA NGAY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}
                <div className="shopify-block mt-5">
                    <div className="shopify-head">
                        <img className="img-fluid" src="images/logo/logo1.webp" />
                    </div>
                    <div className="shopify-main">
                        <div className="shopify-item pt-3 row align-items-center">
                            <div className="col-md-3">
                                <a href="#">
                                    <img className="img-fluid" src="images/collection/collection6.webp" alt="Đồ chạy bộ" />
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="#">
                                    <img className="img-fluid" src="images/collection/collection7.webp" alt="Đồ tập luyện" />
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="#">
                                    <img className="img-fluid" src="images/collection/collection8.webp" alt="Đồ thời trang" />
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="#">
                                    <img className="img-fluid" src="images/collection/collection9.webp" alt="Đồ hoạt động ngoài trời" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trademark-block mt-5">
                    <div className="trademark-head">
                        <h4 style={{ fontWeight: '500' }}>THƯƠNG HIỆU NỔI BẬT</h4>
                    </div>
                    <div className="trademark-main">
                        <div className="trademark-item pt-2">
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/adidas.webp" alt="Thương hiệu 1" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/under_armour.webp" alt="Thương hiệu 2" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/hoka.avif" alt="Thương hiệu 3" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/fila.avif" alt="Thương hiệu 4" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/on_running.avif" alt="Thương hiệu 5" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/speedo.avif" alt="Thương hiệu 6" />
                            </a>
                        </div>
                        <div className="trademark-item">
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/nike.webp" alt="Thương hiệu 1" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/columbia.avif" alt="Thương hiệu 2" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/teva.avif" alt="Thương hiệu 3" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/skechers.avif" alt="Thương hiệu 4" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/crocs.avif" alt="Thương hiệu 5" />
                            </a>
                            <a href="#" className="img-fluid">
                                <img src="images/trademark/30_trademark.webp" alt="Thương hiệu 6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="news-block mt-5">
                    <div className="news-head">
                        <h4 className="text-center" style={{ fontWeight: '500' }}>TIN TỨC THỜI TRANG & THỂ THAO</h4>
                        <div className="d-flex justify-content-center" style={{ margin: '18px 0px' }}>
                            <ul className="nav nav-pills nav-justified" role="tablist" style={{ width: '50%', gap: '50px' }}>
                                <li className="nav-item">
                                    <a href="#noibat" className="nav-link active border text-danger" data-bs-toggle="pill">
                                        <span className="">TIN NỔI BẬT</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#khuyenmai" className="nav-link border text-danger" data-bs-toggle="pill">
                                        <span className="">TIN KHUYẾN MÃI</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#thoitrang" className="nav-link border text-danger" data-bs-toggle="pill">
                                        <span className="">MẸO THỜI TRANG</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-main tab-content mt-4">
                        <div className="tab-pane active" id="noibat">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news1.webp" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>HOKA Clifton 10 – Siêu Phẩm Chạy Bộ Êm Ái, Bền Bỉ Cho Mọi Cung Đường</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news2.webp" alt="Tin mới 2" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Khám Phá HOKA Bondi 9: Cải Tiến Đột Phá, Êm Ái Tối Đa</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news3.webp" alt="Tin mới 3" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Mặc Gì Chạy Trail Đầu Năm: Chọn Đồ Hoàn Hảo, Khởi Động Mùa Mới</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news4.webp" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Top 5 Môn Thể Thao Dự Báo Tạo Nên Cơn Sốt Trong Năm 2025</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="khuyenmai">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news5.webp" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Double Day 4.4: Đón Hè Rực Rỡ, Deal Đỉnh Bất Ngờ - Giảm Đến 50%</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news6.webp" alt="Tin mới 2" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Double Day 3.3: Siêu Sale Thể Thao, Khao Deal Đến 50%</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news7.webp" alt="Tin mới 3" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>NĂM MỚI DEAL TỚI  - SẮM TẾT SIÊU HỜI: ƯU ĐÃI ĐẾN 50%</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news8.webp" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Double Day 12.12: Siêu Sale Cuối Năm, Deal Xịn Quà Chất</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="thoitrang">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news9.webp" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Đón Giáng Sinh, Thả Dáng Xinh - Mẹo Phối Đồ Cùng Áo Hoodie Nữ</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news10.webp" alt="Tin mới 2" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Giày Đá Bóng Có Mấy Loại? Cách Chọn Giày Đá Bóng Theo Mặt Sân</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news11.webp" alt="Tin mới 3" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Mách bạn tips diện đồ sành điệu với gam màu hot trend 2024</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="img-fluid">
                                            <img className="card-img-top" src="images/news/news12.jpg" alt="Tin mới 1" style={{ height: '263px' }} />
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="nav-link" style={{ fontWeight: '500' }}>Tips phối đồ với chân váy giúp nàng “nổi bần bật” trong ngày lễ Giáng Sinh</a>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="nav-link" style={{ fontStyle: 'italic' }}>Xem thêm
                                                <i className="	fas fa-hand-point-right p-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-footer mt-4 text-center">
                        <a href="#" type="button" className="btn btn-warning rounded-0 px-4" style={{ fontWeight: '500', fontSize: '17px' }}>Xem tất cả</a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default HomePage;