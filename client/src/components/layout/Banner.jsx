import React, { useState, useEffect } from 'react';
import color from '../../constants/colors';
import Bannercss from '../../assets/css/Banner.css';

const BannerInit = ({ setShow }) => {
    const handleCopyCode = () => {
        const code = document.getElementById('code-item').innerHTML;
        navigator.clipboard.writeText(code).then(() => {
            alert('Mã giảm giá đã được sao chép vào bộ nhớ tạm!');
        }).catch(err => {
            console.error('Lỗi thao tác: ', err);
        });
    }
    return (
        <>
            <div className="main-content px-3">
                <div className="modal-header border-0 pb-0" style={{ position: 'relative' }}>
                    <h5 className="text-center text-title" style={{ fontSize: '25px', margin: '60px 0px 0px' }}>CHÚC MỪNG BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                        onClick={() => setShow(false)}
                    ></button>
                </div>
                <div className="text-center my-2">Nhập mã</div>
                <div className="block-code d-flex justify-content-between align-items-center rounded mb-3" style={{ padding: '15px 20px', fontSize: '25px', border: '2px dashed #969595', backgroundColor: '#01223b' }}>
                    <div id="code-item" style={{ fontSize: '26px', fontWeight: '600', color: '#ff0600' }}>SSPNEW4N2LBFT4</div>
                    <button type="button"
                        className="code-icon border rounded bg-danger"
                        style={{ padding: '5px 15px' }}
                        onClick={handleCopyCode}
                    >
                        <i className="fas fa-copy"></i>
                    </button>
                </div>
                <h1 className="text-center" style={{ fontSize: '22px', color: '#77e328' }}>Giảm 150K</h1>
                <div className="text-center" style={{ fontSize: '20px', color: '#77e328', fontWeight: '600' }}>cho đơn hàng đầu tiên từ 1.5 triệu</div>
                <div className="text-center mt-4 mx-auto" style={{ fontSize: '15px', fontWeight: '400', color: '#000000', width: '60%', fontStyle: 'italic' }}>Vui lòng kiểm tra email vừa nhập
                    để xem điều kiện sử dụng</div>
            </div >
        </>
    )
}

const Banner = () => {
    const [show, setShow] = useState(false);
    // const handleShow = () => {
    //     setShow(!show);
    // }
    return (
        <>
            <div className="container-fluid py-2" style={{ backgroundColor: '#f4f2e9', fontSize: '12px', fontWeight: '400' }}>
                <div className="container" style={{ padding: '3px 0px' }}>
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <a href="#" className="nav-link" style={{ color: color.grey }}>
                                <div className="mx-auto d-flex justify-content-center">
                                    <div className="icon-column-image me-2"><i className="fa fa-truck fa-lg"></i></div>
                                    <div className="icon-column-content">
                                        <span>Miễn phí giao hàng đơn từ 699k</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="#" className="nav-link" style={{ color: color.grey }}>
                                <div className="mx-auto d-flex justify-content-center">
                                    <div className="icon-column-image me-2"><i className="fa fa-cube fa-lg"></i></div>
                                    <div className="icon-column-content">
                                        <span>Miễn phí đổi trả đến 30 ngày</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="#" className="nav-link" style={{ color: color.grey }}>
                                <div className="mx-auto d-flex justify-content-center">
                                    <div className="icon-column-image me-2"><i className="fa fa-check fa-lg"></i></div>
                                    <div className="icon-column-content">
                                        <span>Cam kết 100% chính hãng</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a type="button" href="#" className="nav-link"
                                data-bs-toggle="modal" data-bs-target="#myModal"
                                style={{ color: color.grey }}>
                                <div className="mx-auto d-flex justify-content-center">
                                    <div className="icon-column-image me-2"><i className="fa fa-tags fa-lg"></i></div>
                                    <div className="icon-column-content">
                                        <span>Đăng ký nhận ngay 150k</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="img-fluid">
                                <img src="/images/logo/logo4.jpeg" width={'100%'} />
                            </div>
                            {show ? <BannerInit setShow={setShow} /> : (
                                <div className="main-content px-3">
                                    <div className="modal-header border-0" style={{ position: 'relative' }}>
                                        <h5 className="m-0 mx-auto mt-4 text-title">ĐĂNG KÝ NHẬN NGAY</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <h1 className="text-voucher">VOUCHER 150K</h1>
                                    <div className="text-endow">cùng nhiều ưu đãi cực hấp dẫn</div>
                                    <form className="mt-4 myform">
                                        <div className="input-group">
                                            <input type="email" id="email" className="form-control" placeholder="Nhập email thường dùng của bạn" name="email" />
                                        </div>
                                        <div className="input-group mt-3">
                                            <div className="inp-phone">
                                                <div className="img-fluid">
                                                    <img src="images/logo/logo5.svg" style={{ width: '100%' }} />
                                                </div>
                                                <div><i className="fas fa-angle-down"></i></div>
                                            </div>
                                            <input type="number" id="phone" className="form-control " placeholder="Nhập số điện thoại của bạn" name="phone" />
                                        </div>
                                        <div className="container mx-auto text-center" style={{ width: '70%' }}>
                                            <button type="submit"
                                                className="btn btn-primary my-4 rounded-0 my-2 border-0"
                                                style={{ color: '#f1f756', backgroundColor: '#ec1a1a', fontSize: '15px', padding: '13px 16px', fontWeight: 'bold' }}
                                                onClick={() => setShow(true)}
                                            >NHẬN VOUCHER NGAY!</button>
                                        </div>
                                        <div className="" style={{ fontSize: '14px', color: '#000000', fontWeight: '400' }}>Bằng việc đăng ký, bạn đồng ý nhận email từ Supersports tại địa chỉ email đã cung cấp. Bạn có thể hủy đăng ký bất cứ lúc nào.</div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;