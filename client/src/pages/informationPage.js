import React, { useState, useEffect } from 'react'
import Informationcss from '../assets/css/Information.css'
import { getProductById } from '../services/informationService';
import { useParams } from 'react-router-dom';

const Information = () => {
    const [product, setProduct] = useState();
    const [indexImg, setIndexImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState();
    let Cart = JSON.parse(localStorage.getItem('cart')) || [];
    const { id } = useParams();
    const handleSelect = (index) => {
        setIndexImg(index);
    }
    const handleIncrease = () => {
        setQuantity((item) => item + 1);
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((item) => item - 1);
        }
    }
    const handleSelectSize = (item) => {
        setSize(item);
    }
    const handleAddToCart = (item) => {
        if (!size) {
            alert("Vui lòng chọn kích thước sản phẩm !");
            return;
        }
        const newproduct = {
            Id: product[0].Id,
            Name: product[0].Name,
            Color: product[0].Color,
            Price: product[0].Price,
            Quantity: quantity,
            Size: size,
            Trademark: product[0].Trademark,
            Decrease: product[0].Decrease,
            Percent: product[0].Percent,
            Image: product[0].Image[0]
        }
        const index = Cart.findIndex((item) => item.Id === newproduct.Id && item.Size === newproduct.Size);
        if (index !== -1) {
            Cart[index].Quantity += newproduct.Quantity;
        } else {
            Cart.push(newproduct);
        }
        localStorage.setItem('cart', JSON.stringify(Cart));
        alert('Thêm vào giỏ hàng thành công');
        window.location.reload();
    };

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                const response = res[0];
                const fixedPath = response.map(item => ({
                    ...item,
                    Price: parseInt(item.Price),
                    Size: JSON.parse(item.Size),
                    Parameter: JSON.parse(item.Parameter),
                    Image: JSON.parse(item.Image)
                }))
                setProduct(fixedPath);
            })
            .catch((err) => { console.log('Error fetching information product:', err); })
    }, []);
    if (!product || product.length === 0) {
        return <h1 className="d-flex justify-content-center align-item-center mt-5">Đang tải tài nguyên. Vui lòng đợi!</h1>
    }
    return (
        <>
            <div className="bread-scrumb" style={{ backgroundColor: '#f7f7f7', padding: '8px 0px' }}>
                <div className="container d-flex align-items-center">
                    <a href="/" className="nav-link">Trang chủ</a>
                    <i className="fas fa-angle-double-right px-2"></i>
                    <a href="#" className="nav-link">{product[0].TypeName}</a>
                    <i className="fas fa-angle-double-right px-2"></i>
                    <a href="#" className="nav-link">{product[0].Name}</a>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="carousel slide" id="slider-main" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {product[0].Image.map((item, index) => (
                                    <div key={index}
                                        className={`carousel-item ${index === indexImg ? 'active' : ''}`} >
                                        <a href="#" className="img-fluid">
                                            <img src={`http://localhost:5000/${item}`} style={{ width: '100%', objectFit: 'contain' }} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#slider-main" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#slider-main" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="row justtify-content-center">
                                {product[0].Image.map((item, index) => (
                                    <div className="col-2" key={index}>
                                        <div style={{ cursor: 'pointer' }}
                                            className={`card mt-3 ${index === indexImg ? 'border border-4' : ''}`}
                                            onClick={() => handleSelect(index)}>
                                            <img src={`http://localhost:5000/${item}`}
                                                className="card-img-top rounded-0"
                                                style={{ height: '100px', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="block-info mt-5">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#describe">MÔ TẢ SẢN PHẨM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#regulation">QUY ĐINH ĐỔI TRẢ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#preserve">HƯỚNG DẪN BẢO QUẢN</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="describe" className="container tab-pane active p-3">
                                    <h4 style={{ fontWeight: '600', margin: '0px 0px 15px 0px' }}>{product[0].Name}</h4>
                                    <p>{product[0].Describe}</p>
                                    <h4 style={{ fontWeight: '600', margin: '0px 0px 15px 0px' }}>THÔNG SỐ</h4>
                                    <ul>
                                        {product[0].Parameter.map(((item, index) => (
                                            <li key={index}>{item}</li>
                                        )))}
                                    </ul>
                                </div>
                                <div id="regulation" className="container tab-pane fade p-3">
                                    <h4>CHÍNH SÁCH BẢO HÀNH</h4>
                                    <ul>
                                        <li>Áp dụng đối với các sản phẩm thuộc thương hiệu Johnson, Matrix, Horizon được mua tại website</li>
                                        <li>Thời gian bảo hành sản phẩm kể từ ngày hoàn tất lắp đặt dựa trên biên bản/chứng từ giao nhận</li>
                                        <li>Xem chi tiết tại: <a href="#" className="text-warning">Chính sách và điều khoản bảo hành các sản phẩm Johnson Fitness & Wellness</a></li>
                                    </ul>
                                    <h5 style={{ color: '#e25041', fontStyle: 'italic', textDecoration: 'underline' }}>Lưu ý:</h5>
                                    <ul>
                                        <li>Các sản phẩm thuộc thương hiệu Johnson, Matrix, Horizon, Synca chỉ áp dụng <strong>GIAO HÀNG </strong>
                                            tại 2 thành phố Hồ Chí Minh và Hà Nội. Đối với các khu vực khác, bộ phận CSKH sẽ liên
                                            hệ đến Quý khách để thông báo hủy đơn hàng.</li>
                                        <li>Các sản phẩm thuộc thương hiệu Johnson, Matrix, Horizon, Synca<strong> KHÔNG ĐƯỢC</strong> áp dụng bất
                                            kỳ chương trình khuyến mãi nào trên website Supersports.</li>
                                        <li>Các sản phẩm thuộc thương hiệu Johnson, Matrix, Horizon, Synca, Matrix, Horizon, Synca
                                            <strong> CHỈ ÁP DỤNG</strong> hình thức Thanh toán ONLINE, <strong>KHÔNG ÁP DỤNG</strong> Thanh toán khi nhận hàng (COD).</li>
                                    </ul>
                                    <div className="img-fluid">
                                        <img src="/images/logo/logo_introduction.webp" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div id="preserve" className="container tab-pane fade p-3">
                                    <h4>Đối với chất liệu da (Leather)</h4>
                                    <ul>
                                        <li>Lau sạch bụi bẩn bằng khăn mềm</li>
                                        <li>Sử dụng sáp đánh bóng da để giữ độ bóng và mềm mại</li>
                                        <li>Tránh tiếp xúc với nước để ngăn chất liệu da bị nứt và bong tróc</li>
                                    </ul>
                                    <h4>Đối với chất liệu lưới hoặc canvas (Mesh & Canvas)</h4>
                                    <ul>
                                        <li>Lau sạch bụi và vết bẩn nhỏ bằng khăn ẩm</li>
                                        <li>Sử dụng nước ấm kết hợp xà phòng dịu nhẹ để làm sạch vết bẩn lớn</li>
                                        <li>Phơi khô dưới bóng râm</li>
                                    </ul>
                                    <h4>Đối với chất liệu da lộn hoặc da động vật (Suede & Suede)</h4>
                                    <ul>
                                        <li>Sử dụng cọ mềm làm sạch bụi bẩn (đánh bàn chải theo một chiều đến khi vết bẩn được hoàn toàn loại bỏ)</li>
                                        <li>Lấy khăn sạch chấm nhẹ lên sản phẩm nhằm hút ẩm và đảm bảo da lộn không bị xù bề mặt</li>
                                        <li>Giặt khô là phương pháp tối ưu giúp bảo quản sản phẩm da lộn tốt hơn</li>
                                        <li>Sử dụng xịt chống nước để bảo vệ chất liệu suede</li>
                                        <li>Phơi khô dưới bóng râm (không phơi trực tiếp dưới ánh nắng mặt trời)</li>
                                    </ul>
                                    <h4>Đối với chất liệu tổng hợp</h4>
                                    <ul>
                                        <li>Lau sạch bụi bẩn bằng khăn ẩm hoặc bàn chải mềm</li>
                                        <li>Không sử dụng các chất giặt tẩy mạnh</li>
                                        <li>Phơi khô dưới bóng râm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-0">
                            <div className="card-body p-2">
                                <p className="trademark">
                                    <a href="#" className="nav-link">{product[0].Trademark.toUpperCase()}</a>
                                </p>
                                <h3 className="name-product">
                                    {product[0].Name} - {product[0].Color}
                                </h3>
                                <div className="detail-product">
                                    <a href="#" className="type-product text-success">{product[0].TypeName}</a>
                                    <span className="id-product">SKU 09012025{product[0].Id}-DNP</span>
                                </div>
                                <div className="comment-product">
                                    <div className="d-flex align-items-center" style={{ gap: '3px' }}>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star-half-alt text-warning"></i>
                                        <div className="viewer-product">
                                            <span>(4.75/5)</span>
                                            <a href="#" className="nav-link">Xem {product[0].Viewer} đánh giá</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-product">
                                    {product[0].Percent !== 0 ? (<>
                                        <div className="price-after">{(product[0].Price * (100 - product[0].Percent) / 100).toLocaleString()}đ</div>
                                        <div className="price-before">{product[0].Price.toLocaleString()}đ</div>
                                        <div className="price-percent">-{product[0].Percent}%</div>
                                    </>) : <div className="price-after">{(product[0].Price).toLocaleString()}đ</div>}
                                </div>
                                <div className="color-product">
                                    <label htmlFor="colors">
                                        Màu sắc:
                                        <span style={{ color: '#515151' }}> --Sản phẩm--</span>
                                    </label>
                                    <div className="colors-item py-2">
                                        <a href="#" className="img-fluid">
                                            <img className="img-thumbnail" src={`http://localhost:5000/${product[0].Image[0]}`} />
                                        </a>
                                    </div>
                                </div>
                                <div className="size-product">
                                    <div className="size-head">
                                        <label htmlFor="size">Kích thước:</label>
                                        <a href="#" className="img-fluid" style={{ color: '#969595' }}>
                                            <img src="/images/icon/icon1.png" style={{ width: '13%', padding: '5px' }} />
                                            Hướng dẫn chọn kích thước
                                        </a>
                                    </div>
                                    <div className="sizes-item">
                                        {product[0].Size.map((item, index) => (
                                            <button type="button" className="nav-link" key={index}
                                                onClick={() => handleSelectSize(item)}
                                                style={{ color: size === item ? '#ffffff' : '', backgroundColor: size === item ? '#77e51f' : '' }}
                                            ><span>{item.toUpperCase()}</span></button>
                                        ))}

                                    </div>
                                </div>
                                <div className="quantity-product">
                                    <label htmlFor="quantity">Số lượng:</label>
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-outline-success"
                                            onClick={handleIncrease}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                        <input
                                            className="form-control rounded-0 text-center border-0 bg-light"
                                            type="text"
                                            name="quantity"
                                            id="quantity"
                                            value={quantity}
                                            defaultValue="1"
                                            style={{ width: '50px' }} readOnly />
                                        <button type="button"
                                            className="btn btn-outline-danger"
                                            onClick={handleDecrease}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="toggle-product">
                                    <button type="button" className="btn btn-buy"
                                        onClick={() => handleAddToCart(product[0])}
                                    >
                                        <span>MUA NGAY</span></button>
                                    <button type="button" className="btn btn-add"
                                        onClick={() => handleAddToCart(product[0])}
                                    ><span>THÊM VÀO GIỎ HÀNG</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-0 mt-3" style={{ border: '1px solid' }}>
                            <div className="card-body">
                                <ul className="nav flex-column">
                                    <h6 style={{ color: 'red', marginBottom: '20px' }}>ƯU ĐÃI GIỮA MÙA</h6>
                                    <p className="mb-2">🔥 GIẢM ĐẾN 40% </p>
                                    <p className="mb-2">⏳ Áp dụng từ: <span style={{ color: '#ff0000' }}><strong>25.04 - 04.05</strong></span></p>
                                    <p className="m-0">️👉 Xem Thêm <a href="#" style={{ color: '#78e723', textDecoration: 'none,', fontSize: '15px' }}>TẠI ĐÂY</a>.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="card rounded-0 mt-3" style={{ border: '1px solid' }}>
                            <div className="card-body">
                                <ul className="nav flex-column" id="scrumb">
                                    <li className="nav-item">
                                        <i className="fas fa-shuttle-van"></i>
                                        <span>Miễn phí giao hàng đơn từ 699k
                                            <a href="#"><i>Xem chi tiết</i></a>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-history"></i>
                                        <span>Đổi trả miễn phí đến 30 ngày
                                            <a href="#"><i>Xem chi tiết</i></a>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fab fa-btc"></i>
                                        <span>Trả góp 0% lãi suất từ 3.000.000 VNĐ
                                            <a href="#"><i>Xem chi tiết</i></a>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-money-check-alt"></i>
                                        <span>Thanh toán trực tuyến nhanh chóng và an toàn.</span>
                                    </li>
                                    <li className="nav-item">
                                        <i className="far fa-check-circle"></i>
                                        <span>Sản phẩm chính hãng 100%.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Information;