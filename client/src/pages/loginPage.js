import React, { useEffect, useState } from "react";
import { getCustomers, userLogin } from "../services/customerService";
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });
    const [isShow, setIsshow] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, refreshToken, user } = await userLogin(account.username, account.password);
            localStorage.setItem("token", JSON.stringify({ accessToken: accessToken, refreshToken: refreshToken }));
            window.location.href = "/";
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert("Lỗi kết nối đến máy chủ");
            }
        }
    }
    return (
        <>
            <div className="container-fluid border-bottom" style={{ backgroundColor: '#00132d' }}>
                <div className="container d-flex align-items-center justify-content-center" style={{ width: '75%' }}>
                    <div className="card-body py-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <a href="/" className="nav-link">
                            <img className="img-fluid" src="images/logo/logo_navbar.svg" style={{ width: '50%' }}></img>
                        </a>
                        <a href="/order-tracking" type="button" className="text-secondary nav-link">
                            Bạn cần giúp đỡ ?
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ paddingTop: '100px', height: '100vh', backgroundImage: "url('/images/background/background1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container mx-auto align-items-center justify-content-center  p-0" style={{ width: '30%' }}>
                    <div className="card border rounded-0" style={{ backgroundColor: '#222222' }}>
                        <div className="card-body p-5 pb-4">
                            <h3 className="text-center" style={{ color: '#77e51f' }}>ĐĂNG NHẬP</h3>
                            {
                                account ? (
                                    <form onSubmit={handleSubmit}
                                        className="was-validated mt-4"
                                        style={{ width: '100%' }}>
                                        <div className="mt-3">
                                            <label htmlFor="username" className="form-label">Tên đăng nhập*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Tên đăng nhập"
                                                required
                                                value={account.username || ""}
                                                name="username"
                                                onChange={handleChange} />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="password" className="form-label">Mật khẩu*</label>
                                            <input
                                                type={isShow ? 'text' : 'password'}
                                                className="form-control"
                                                id="password"
                                                placeholder="Mật khẩu"
                                                required
                                                value={account.password || ""}
                                                name="password"
                                                autoComplete="admin"
                                                onChange={handleChange} />
                                        </div>
                                        <div className="form-check mt-3" style={{ fontSize: '14px', color: '#515151' }}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="role"
                                                name="remember"
                                                onChange={() => setIsshow(!isShow)} />
                                            <label className="form-check-label text-light" htmlFor="role">Hiện mật khẩu</label>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-danger rounded-0 mt-5 p-3">Đăng nhập</button>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end mt-2" style={{ gap: '5px', fontSize: '14px' }}>
                                            <span>Bạn chưa có tài khoản?</span>
                                            <a href="/register" className="text-primary nav-link"><i>Đăng ký ngay</i></a>
                                        </div>
                                    </form>
                                ) : (
                                    <form onSubmit={handleSubmit}
                                        className="was-validated mt-4"
                                        style={{ width: '100%' }}>
                                        <div className="mt-3">
                                            <label htmlFor="email" className="form-label">Email*</label>
                                            <input type="email" className="form-control" id="email" placeholder="Nhập email" required />
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="password" className="form-label">Mật khẩu*</label>
                                            <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" required />
                                        </div>
                                        <div className="form-check mt-3" style={{ fontSize: '14px', color: '#515151' }}>
                                            <input className="form-check-input" type="checkbox" id="role" name="remember" required />
                                            <label className="form-check-label text-light" htmlFor="role">Lưu thông tin</label>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit"
                                                className="btn btn-danger rounded-0 mt-5 p-3"
                                            >Đăng nhập</button>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end mt-2" style={{ gap: '5px', fontSize: '14px' }}>
                                            <span>Bạn chưa có tài khoản?</span>
                                            <a href="/register" className="text-primary nav-link"><i>Đăng ký ngay</i></a>
                                        </div>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};

export default LoginPage;