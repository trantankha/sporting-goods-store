import color from '../../constants/colors'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Summary from './Summary';
import { useState, memo } from 'react';

const Navbar = () => {
    const location = useLocation();
    const { id } = useParams();
    const isInfoPage = location.pathname === `/information/${id}` || location.pathname === `/` || location.pathname === `/new-goods`;
    const [Cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const handleRemove = (id, size) => {
        const updatedCart = Cart.filter((item) => !(item.Id === id && item.Size === size));
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    }
    return (
        <>
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
                                <button className="btn btn-primary"><i className="fab fa-sistrix" style={{ fontSize: '15px' }}></i></button>
                            </div>

                        </form>
                        <div className="btn-group ms-4" style={{ position: 'relative' }}>
                            {isInfoPage ? (
                                <button className="btn btn-outline-dark" type="button" id="myCart" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <i className="fas fa-shopping-bag"></i>
                                </button>
                            ) : (
                                <Link to="/cart" className="btn btn-outline-dark" type="button">
                                    <i className="fas fa-shopping-bag"></i>
                                </Link>
                            )}
                            <a href="/order-tracking" className='btn btn-outline-dark' type='button'><i className="fas fa-cube"></i></a>
                            <a href="/login" className='btn btn-outline-danger'><i className="fas fa-user"></i></a>
                            <span className="badge bg-danger d-flex" style={{
                                position: 'absolute', borderRadius: '50%',
                                top: '-10px', left: '30px', zIndex: '1000',
                                width: '20px', height: '20px', alignItems: 'center', justifyContent: 'center',
                                fontSize: '12px'
                            }}>{Cart.length}</span>
                        </div>
                    </div>
                </div>
            </nav>
            <Summary data={Cart} onRemove={handleRemove} />
        </>
    );
}

export default memo(Navbar);