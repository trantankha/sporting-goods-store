import React, { useState, useEffect } from "react";
import Cartcss from '../assets/css/Cart.css';

const CartPage = () => {
    const [Cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);
    // const [quantity, setQuantity] = useState(1);
    const handleIncrease = (id) => {
        const updatedCart = Cart.map((item) => {
            if (item.Id === id) {
                return { ...item, Quantity: item.Quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    const handleDecrease = (id) => {
        const updatedCart = Cart.map((item) => {
            if (item.Id === id) {
                return { ...item, Quantity: item.Quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    const handleDelete = (id) => {
        const updatedCart = Cart.filter((item) => item.Id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.location.reload();
    }
    useEffect(() => {
        const totalPrice = Cart.reduce((total, item) => {
            return total + (item.Price * (100 - item.Percent) / 100) * item.Quantity;
        }, 0);
        setTotal(totalPrice);
    }, [Cart]);
    return (
        <>
            <div className="bread-scrumb" style={{ backgroundColor: '#f7f7f7', padding: '8px 0px' }}>
                <div className="container d-flex align-items-center">
                    <a href="/" className="nav-link">Trang chủ</a>
                    <i className="fas fa-angle-double-right px-2"></i>
                    <a href="#" className="nav-link">Giỏ hàng</a>
                </div>
            </div>
            <div className="container mt-2">
                <div className="block-title">
                    <h1 style={{ fontWeight: '600' }}>Giỏ hàng</h1>
                    <a href="/new-goods" className="nav-link my-3" style={{ cursor: 'default' }}>
                        <span>Tiếp tục mua sắm</span>
                    </a>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="block-main card border-0">
                            <div className="card-body p-0">
                                {
                                    Cart.map((item) => {
                                        if (item.Decrease === 1) {
                                            return (
                                                <div className="card-item border-bottom" key={item.Id}>
                                                    <a href="#" className="img-item">
                                                        <img className="img-fluid" src={`http://localhost:5000/${item.Image}`} />
                                                    </a>
                                                    <div className="text-item">
                                                        <p className="trademark">{item.Trademark.toUpperCase()}</p>
                                                        <a href={`/information/${item.Id}`} className="nav-link">{item.Name} - {item.Color}</a>
                                                        <p className="size">Size / {item.Size.toUpperCase()}</p>
                                                    </div>
                                                    <div className="price-item">
                                                        <span className="price-after">{(item.Price * (100 - item.Percent) / 100).toLocaleString()}đ</span>
                                                        <span className="price-before">{item.Price.toLocaleString()}đ</span>
                                                    </div>
                                                    <div className="quantity-item text-center">
                                                        <div className="btn-group">
                                                            <button type="button"
                                                                className="btn btn-outline-danger"
                                                                onClick={() => handleDecrease(item.Id)}
                                                            >
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <input
                                                                className="form-control rounded-0 text-center border-0 bg-light"
                                                                type="text"
                                                                name="quantity"
                                                                id={item.Id}
                                                                value={item.Quantity}
                                                                style={{ width: '50px' }} readOnly />
                                                            <button type="button"
                                                                className="btn btn-outline-success"
                                                                onClick={() => handleIncrease(item.Id)}
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="total-item text-end">
                                                        <p>{((item.Price - (item.Price * item.Percent / 100)) * item.Quantity).toLocaleString()}đ</p>
                                                        <button type="button" className="text-primary"
                                                            onClick={() => handleDelete(item.Id)}
                                                        >Xóa</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div className="card-item border-bottom" key={item.Id}>
                                                <a href="#" className="img-item">
                                                    <img className="img-fluid" src={`http://localhost:5000/${item.Image}`} />
                                                </a>
                                                <div className="text-item">
                                                    <p className="trademark">{item.Trademark.toUpperCase()}</p>
                                                    <a href={`/information/${item.Id}`} className="nav-link">{item.Name} - {item.Color}</a>
                                                    <p className="size">Size / {item.Size.toUpperCase()}</p>
                                                </div>
                                                <div className="price-item">
                                                    <span className="price-after" style={{ textDecoration: 'none', fontSize: '17px', color: '#01223b' }}>{item.Price.toLocaleString()}đ</span>
                                                </div>
                                                <div className="quantity-item text-center">
                                                    <div className="btn-group">
                                                        <button type="button"
                                                            className="btn btn-outline-danger"
                                                            onClick={() => handleDecrease(item.Id)}
                                                        >
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                        <input
                                                            className="form-control rounded-0 text-center border-0 bg-light"
                                                            type="text"
                                                            name="quantity"
                                                            id={item.Id}
                                                            value={item.Quantity}
                                                            style={{ width: '50px' }} readOnly />
                                                        <button type="button"
                                                            className="btn btn-outline-success"
                                                            onClick={() => handleIncrease(item.Id)}
                                                        >
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="total-item text-end">
                                                    <p>{((item.Price - (item.Price * item.Percent / 100)) * item.Quantity).toLocaleString()}đ</p>
                                                    <button type="button" className="text-primary"
                                                        onClick={() => handleDelete(item.Id)}
                                                    >Xóa</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="form-floating mt-3">
                            <textarea className="form-control" id="comment" name="text" placeholder="Ghi chú tại đây.."></textarea>
                            <label htmlFor="comment">Bạn cần ghi chú gì cho Supersports ?</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border rounded-0">
                            <div className="card-header text-center" style={{ backgroundColor: '#13283f' }}>
                                <h5 style={{ fontSize: '19px', margin: '0px 0px 25px 0px' }}>
                                    <a href="#" className="text-light">ĐĂNG KÝ NGAY</a> |
                                    <span style={{ color: '#77e51f' }}> NHẬN NGAY VOUCHER 150.000 VNĐ </span>
                                    CHO ĐƠN HÀNG ĐẦU TIÊN
                                </h5>
                            </div>
                            <div className="card-body" style={{ height: '360px' }}>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <div className="quantity">({Cart.length}) sản phẩm</div>
                                        <div className="total">{total.toLocaleString()}đ</div>
                                    </li>
                                    <li className="nav-item border border-start-0 border-end-0">
                                        <div>Giảm giá</div>
                                        <div className="text-secondary">Áp dụng tại trang thanh toán</div>
                                    </li>
                                    <li className="nav-item">
                                        <div>Phí vận chuyển</div>
                                        <div className="text-secondary">Phí ship được tính tại trang thanh toán</div>
                                    </li>
                                </ul>
                                <div className="total-amount">
                                    <div>Thành tiền: </div>
                                    <div className="sum">{total.toLocaleString()}đ</div>
                                </div>
                                <div className="d-grid mt-4">
                                    <a href="/payment" type="button" className="btn rounded-0 py-3 text-light" style={{ backgroundColor: '#fb6e2e', fontWeight: '600' }}>THANH TOÁN</a>
                                </div>
                                <div className="text-center mt-2" style={{ color: '#bc0000', fontSize: '14px' }}>
                                    *Phí ship và coupon áp dụng vào trang thanh toán
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-2 text-center" style={{ color: 'black' }}>Thanh toán nhanh chóng với:</div>
                            <img className="img-fluid" src="images/logo/logo2.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage;