import React, { useState, useEffect } from "react";
import Paymentcss from '../assets/css/Payment.css'

const PaymentPage = () => {
    return (
        <>
            <div className="container-fluid border-bottom" style={{ backgroundColor: '#00132d' }}>
                <div className="container d-flex align-items-center justify-content-center" style={{ width: '75%' }}>
                    <div className="card-body py-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <a href="/">
                            <img className="img-fluid" src="images/logo/logo_navbar.svg" style={{ width: '50%' }}></img>
                        </a>
                        <a href="/cart" type="button" className="btn btn-outline-warning">
                            <i className="fas fa-shopping-basket"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ width: '65%' }}>
                <div className="row">
                    <div className="col-md-7 border-end pt-5">
                        <div>
                            <form action="" className="was-validated">
                                <div className="mt-3 mb-2">
                                    <label htmlFor="email" className="form-label h4" style={{ color: 'black', fontWeight: '600' }}>Thông tin liên lạc</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                                    <div className="invalid-feedback">Nhập email hợp lệ.</div>
                                </div>
                                <div className="form-check mb-5">
                                    <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                                    <label className="form-check-label text-light" htmlFor="myCheck">Gửi cho tôi những tin tức và ưu đãi qua email.</label>
                                </div>
                                <h4 className="" style={{ color: 'black', fontWeight: '600' }}>Giao hàng</h4>
                                <p>Địa chỉ này cũng sẽ được dùng làm địa chỉ thanh toán cho đơn hàng này.</p>
                            </form>
                            <form action="">
                                <div className="form-floating">
                                    <select className="form-select" id="city">
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>Hồ Chí Minh</option>
                                    </select>
                                    <label htmlFor="city">Tỉnh/Thành phố</label>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <select className="form-select" id="district">
                                                <option>--Chọn Quận/Huyện--</option>
                                                <option>Nam Từ Liêm</option>
                                                <option>Thanh Xuân</option>
                                            </select>
                                            <label htmlFor="district">Quận/Huyện</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating">
                                            <select className="form-select" id="commune" disabled>
                                                <option>--Chọn Phường/Xã--</option>
                                                <option>Nghĩa Tân</option>
                                                <option>Trung Hòa</option>
                                            </select>
                                            <label htmlFor="commune">Phường/Xã</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mt-3">
                                    <select className="form-select" id="country">
                                        <option>Việt Nam</option>
                                    </select>
                                    <label htmlFor="country">Quốc gia/Khu vực</label>
                                </div>
                            </form>
                            <form className="was-validated">
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className="form-control" id="name" placeholder="Tên.." required />
                                        <div className="invalid-feedback">Nhập tên.</div>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" id="family" placeholder="Họ.." required />
                                        <div className="invalid-feedback">Nhập họ.</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" id="address" placeholder="Địa chỉ nhận hàng (Số nhà, đường phố, hẻm, Căn hộ,...)" name="address" required />
                                    <div className="invalid-feedback">Nhập một địa chỉ.</div>
                                </div>
                                <div className="mt-3">
                                    <input type="text" className="form-control" id="phone" placeholder="Điện thoại" name="phone" required />
                                    <div className="invalid-feedback">Nhập số điện thoại để sử dụng phương thức giao hàng này.</div>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" id="save" name="save" />
                                    <label className="form-check-label text-light" htmlFor="save">Lưu địa chỉ này.</label>
                                </div>
                            </form>
                            <div className="mt-4">
                                <h4 style={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Vận chuyển bởi Anh Tân Logistics (NTL)</h4>
                                <div className="p-2 border d-flex align-items-center" style={{ justifyContent: 'space-between', backgroundColor: '#f3f7fd' }}>
                                    <div>Phí vận chuyển</div>
                                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'black' }}>MIỄN PHÍ</div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h4 style={{ color: 'black', fontWeight: '600' }}>Thanh toán</h4>
                                <p>Địa chỉ thanh toán của phương thức thanh toán phải khớp với địa chỉ giao hàng.
                                    Toàn bộ các giao dịch được bảo mật và mã hóa.
                                </p>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" id="radio1" value="option1" name="check-payment" defaultChecked={true} />
                                                <label className="form-check-label" htmlFor="radio1" data-bs-toggle="collapse" href="#collapseOne">
                                                    Cổng OnePay - Thẻ ATM/QR/MoMo
                                                </label>
                                            </div>
                                            <div className="img-item">
                                                <img className="img-fluid" src="images/payment/payment1.svg" />
                                                <img className="img-fluid" src="images/payment/payment2.svg" />
                                                <img className="img-fluid" src="images/payment/payment3.svg" />
                                                <img className="img-fluid" src="images/payment/payment6.svg" />
                                                <img className="img-fluid" src="images/payment/payment4.svg" />
                                            </div>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" style={{ width: '50%' }}>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"
                                                            d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                        <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                    </svg>
                                                </div>
                                                <div className="mx-auto mt-3 text-center" style={{ width: '70%' }}>
                                                    Sau khi nhấp vào “Thanh toán ngay”, bạn sẽ được chuyển hướng đến Cổng OnePAY -
                                                    Thẻ ATM/QR/MoMo hoàn tất mua hàng một cách an toàn.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" id="radio2" value="option2" name="check-payment" />
                                                <label className="form-check-label" htmlFor="radio2" data-bs-toggle="collapse" href="#collapseTwo">
                                                    Trả góp 0% lãi suất qua thẻ tín dụng
                                                </label>
                                            </div>
                                            <div className="img-item">
                                                <img className="img-fluid" src="images/payment/payment3.svg" />
                                                <img className="img-fluid" src="images/payment/payment1.svg" />
                                                <img className="img-fluid" src="images/payment/payment2.svg" />
                                                <img className="img-fluid" src="images/payment/payment4.svg" />
                                            </div>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" style={{ width: '50%' }}>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"
                                                            d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                        <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                    </svg>
                                                </div>
                                                <div className="mx-auto mt-3 text-center" style={{ width: '70%' }}>
                                                    Sau khi nhấp vào “Thanh toán ngay”, bạn sẽ được chuyển hướng đến
                                                    Trả góp 0% lãi suất qua thẻ tín dụng để hoàn tất việc mua hàng một cách an toàn.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" id="radio3" value="option3" name="check-payment" />
                                                <label className="form-check-label" htmlFor="radio3" data-bs-toggle="collapse" href="#collapseThree">
                                                    Ví ZaloPay
                                                </label>
                                            </div>
                                            <div className="img-item">
                                                <img className="img-fluid" src="images/payment/payment2.svg" />
                                                <img className="img-fluid" src="images/payment/payment3.svg" />
                                                <img className="img-fluid" src="images/payment/payment1.svg" />
                                                <img className="img-fluid" src="images/payment/payment5.svg" />
                                            </div>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" style={{ width: '50%' }}>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"
                                                            d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                        <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                    </svg>
                                                </div>
                                                <div className="mx-auto mt-3 text-center" style={{ width: '70%' }}>
                                                    Sau khi nhấp vào “Thanh toán ngay”, bạn sẽ được chuyển hướng đến
                                                    Ví ZaloPay để hoàn tất việc mua hàng một cách an toàn.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" id="radio4" value="option4" name="check-payment" />
                                                <label className="form-check-label" htmlFor="radio4" data-bs-toggle="collapse" href="#collapseFour">
                                                    Thanh toán MoMo qua OnePay
                                                </label>
                                            </div>
                                            <div className="img-item">
                                                <img className="img-fluid" src="images/payment/payment6.svg" />
                                            </div>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" style={{ width: '50%' }}>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"
                                                            d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path>
                                                        <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
                                                        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path>
                                                    </svg>
                                                </div>
                                                <div className="mx-auto mt-3 text-center" style={{ width: '70%' }}>
                                                    Sau khi nhấp vào “Thanh toán ngay”, bạn sẽ được chuyển hướng đến Thanh toán
                                                    MoMo qua OnePay để hoàn tất việc mua hàng một cách an toàn.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" id="radio5" value="option5" name="check-payment" />
                                                <label className="form-check-label" htmlFor="radio5" data-bs-toggle="collapse" href="#collapseFive">
                                                    Thanh toán khi nhận hàng (COD)
                                                </label>
                                            </div>
                                        </div>
                                        <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="d-flex rounded p-2" style={{ backgroundColor: '#fff5ea', border: '1px solid darkorange' }}>
                                                    <i className="fas fa-exclamation-triangle text-warning my-1 mx-2"></i>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item" style={{ color: '#261900', fontWeight: '600' }}>Lưu ý quan trọng</li>
                                                        <li className="nav-item" style={{ color: '#261900', fontSize: '15px' }}>Để đảm bảo quyền lợi khách hàng, Quý khách vui lòng KHÔNG CHUYỂN TIỀN TRƯỚC
                                                            cho shipper khi chưa nhận được kiện hàng với bất kì lí do nào.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="order" name="option1" value="something" />
                                <label className="form-check-label" htmlFor="order">Yêu cầu xuất hóa đơn</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="agree" name="option1" value="something" />
                                <label className="form-check-label" htmlFor="agree">Tôi đồng ý với
                                    <a href="#" className="px-1 text-info">Điều khoản và Chính sách</a>
                                    quy định bởi Supersport*
                                </label>
                            </div>
                            <div className="d-grid mt-4">
                                <a href="#" type="button" className="btn rounded-0 py-3" style={{ color: 'black', fontWeight: 'bold', backgroundColor: '#12283e' }}>
                                    <i className="fas fa-hand-point-right"></i>
                                    THANH TOÁN NGAY
                                    <i className="fas fa-hand-point-left"></i>
                                </a>
                            </div>
                        </div>
                        <div className="p-3 border-top" style={{ height: '100px', marginTop: '100px' }}>
                            <a href="#">Chính sách đổi trả</a>
                            <a href="#" className="mx-3">Chính sách vận chuyển</a>
                            <a href="#">Chính sách quyền riêng tư</a><br />
                            <a href="#">Điều khoản dịch vụ</a>
                        </div>
                    </div>
                    <div className="col-md-5 border-start pt-5 px-4">
                        <nav className="navbar navbar-expand-sm navbar-dark sticky-top my-3 flex-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <div className="img-fluid">
                                        <img src="images/product/product1-1.webp" />
                                        <span className="badge">1</span>
                                    </div>
                                    <div className="content">
                                        <p className="name">Giày Clog Unisex Crocs Bayaband - Đen</p>
                                        <p className="size-color">ĐEN / M6W8</p>
                                    </div>
                                    <div className="price text-end">1.196.000đ</div>
                                </li>
                                <li className="nav-item">
                                    <div className="img-fluid">
                                        <img src="images/product/product2-1.webp" />
                                        <span className="badge">2</span>
                                    </div>
                                    <div className="content">
                                        <p className="name">Áo Thun Nữ Converse Strucker Limited - Đen</p>
                                        <p className="size-color">NÂU / XL</p>
                                    </div>
                                    <div className="price text-end">896.000đ</div>
                                </li>
                            </ul>
                            <div className="input-group my-4">
                                <input type="text" className="form-control" placeholder="Nhập mã khuyến mãi" />
                                <button className="btn btn-outline-success" type="button">Áp dụng</button>
                            </div>
                            <ul className="nav flex-column block-total" style={{ width: '100%', color: '#110a0a' }}>
                                <li className="nav-item">
                                    <div>Tổng phụ · 2 mặt hàng</div>
                                    <div>3.495.000đ</div>
                                </li>
                                <li className="nav-item">
                                    <div>Phí vận chuyển
                                        <i className="far fa-question-circle ms-1" style={{ fontSize: '13px' }}></i>
                                    </div>
                                    <h6 className="m-0">MIỄN PHÍ</h6>
                                </li>
                                <li className="nav-item">
                                    <div className="text-primary" style={{ fontSize: '22px', fontWeight: '600' }}>Tổng</div>
                                    <div>
                                        <span style={{ color: '#110a0a8f', fontSize: '13px' }}>VND</span>
                                        <span className="total ms-2" style={{ fontSize: '20px', fontWeight: '600' }}>3.495.000đ</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;