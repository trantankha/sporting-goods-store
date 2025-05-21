import React, { useState } from "react";
import { insertCustomer } from "../services/customerService";

const RegisterPage = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        password1: "",
        name: "",
        family: "",
    });
    const [isShowPassword, setShowPassword] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!isShowPassword);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.username || !user.password || !user.password1 || !user.name || !user.family) {
            alert('Thông tin không được để trống!');
            return;
        }
        if (user.password !== user.password1) {
            alert('Mật khẩu xác nhận không chính xác !');
            return;
        }
        insertCustomer(user)
            .then((response) => {
                alert("Tạo tài khoản thành công! Hãy đăng nhập để tiếp tục.");
                window.location.href = "/login";
            })
            .catch((error) => {
                console.error("Lỗi khi đăng ký tài khoản:", error);
                alert("Đăng ký tài khoản không thành công !");
            });
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
            <div className="container-fluid">
                <div className="container mx-auto align-items-center justify-content-center border p-0" style={{ width: '32%', margin: '50px 0px' }}>
                    <div className="card border-0 rounded-0" style={{ backgroundColor: '#01223b', position: 'relative' }}>
                        <button type="button"
                            className="py-1 px-2 border-0"
                            style={{ position: 'absolute', right: '10px', top: '272px', backgroundColor: 'inherit', color: '#3d4246' }}
                            onClick={togglePasswordVisibility}
                        >
                            <i className="fas fa-eye"></i>
                        </button>
                        <div className="card-body p-5 pb-4">
                            <h3 className="text-center">TẠO TÀI KHOẢN</h3>
                            <div className="d-flex mx-auto align-items-center justify-content-center" style={{ width: '50%', gap: '15px', fontSize: '38px' }}>
                                <i className="fab fa-facebook-square text-primary"></i>
                                <i className="fab fa-google-plus-square text-warning"></i>
                                <i className="fab fa-twitter-square text-info"></i>
                                <i className="fab fa-github-square text-dark"></i>
                            </div>
                            <form onSubmit={handleSubmit} className="was-validated mt-4" style={{ width: '100%' }}>
                                <div className="">
                                    <label htmlFor="username" className="form-label">Tên đăng nhập*</label>
                                    <input type="text"
                                        className="form-control"
                                        name="username"
                                        id="username"
                                        placeholder="Nhập tên đăng nhập (tùy chọn)"
                                        required
                                        value={user.username}
                                        onChange={handleChange} />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="password" className="form-label">Mật khẩu*</label>
                                    <input type={isShowPassword ? "text" : "password"}
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        placeholder="Nhập mật khẩu của bạn"
                                        required
                                        value={user.password}
                                        onChange={handleChange} />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="password1" className="form-label">Nhập lại mật khẩu*</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password1"
                                        id="password1"
                                        placeholder="Mật khẩu"
                                        required
                                        value={user.password1}
                                        onChange={handleChange} />
                                </div>
                                <div className="mt-5"><a href="#" className="nav-link" style={{ fontWeight: '600' }}>THÔNG TIN KHÁC</a></div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="name" className="form-label">Tên</label>
                                        <input type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Nhập tên"
                                            required
                                            value={user.name}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="family" className="form-label">Họ</label>
                                        <input type="text"
                                            className="form-control"
                                            name="family"
                                            id="family"
                                            placeholder="Nhập họ"
                                            required
                                            value={user.family}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-check mt-4" style={{ fontSize: '14px', color: '#515151' }}>
                                    <input className="form-check-input" type="checkbox" id="role" name="remember" />
                                    <label className="form-check-label text-light" htmlFor="role">Tôi muốn nhận các đặc quyền, ưu đãi và cập nhật của mình từ CRC Sports Co., Ltd., Central Group và các đối tác được nêu rõ trong Chính sách quyền riêng tư</label>
                                </div>
                                <div className="form-check mt-3" style={{ fontSize: '14px' }}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="auto"
                                        name="remember"
                                        onChange={() => setChecked(!isChecked)} />
                                    <label className="form-check-label text-light" htmlFor="auto">Tự động đăng nhập lần sau</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-danger rounded-0 mt-5 p-3">Xác nhận</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-end mt-2" style={{ gap: '5px', fontSize: '14px' }}>
                                    <span>Bạn đã có tài khoản?</span>
                                    <a href="/login" className="text-success nav-link"><i>Đăng nhập ngay</i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;