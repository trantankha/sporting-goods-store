import color from '../../constants/colors';

const Banner = () => {
    return (
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
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;