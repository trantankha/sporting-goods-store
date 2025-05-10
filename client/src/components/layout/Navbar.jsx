import color from '../../constants/colors'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md p-1" style={{ backgroundColor: '#00132d', fontWeight: '500', fontSize: '14px' }}>
            <div className="container-fluid">
                <a href='/' className="navbar-brand py-2">
                    <img src="/images/logo/logo_navbar.svg" alt="Logo Store" style={{ width: '100%', height: '32px' }} />
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/new-goods">Hàng Mới</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/male">Nam
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/female">Nữ
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/children">Trẻ Em
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/accessory">Phụ Kiện
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/trademark">Thương Hiệu
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white p-3" href="/category/sport">Thể Thao
                                <i className="fas fa-angle-down ms-1"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3" href="/category/endow" style={{ color: color.green }}>Ưu đãi
                            </a>
                        </li>
                    </ul>
                    <form action="" className="d-flex">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Bạn đang tìm gì ?" style={{ backgroundColor: 'initial' }} />
                            <button className="btn btn-primary"><i className="fas fa-search" style={{ fontSize: '15px' }}></i></button>
                        </div>

                    </form>
                    <div className="btn-group ms-4">
                        <a href="/cart" className="btn btn-outline-dark" type="button"><i className="fas fa-shopping-cart"></i></a>
                        <a href="/order-tracking" className='btn btn-outline-dark' type='button'><i className="fas fa-trophy"></i></a>
                        <a href="/admin" className='btn btn-outline-danger'><i className="fas fa-user"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;