
const OrdertrackingPage = () => {
    return (
        <div className="container" style={{ width: '64%', height: '90vh', justifyContent: 'center', alignItems: 'center' }}>
            <div className="d-flex align-items-center justify-content-center" style={{ gap: '50px', justifyContent: 'space-between', height: '680px' }}>
                <div className="card border border-dark">
                    <form className="card-body py-5 px-4 was-validated" style={{ color: '#13283f' }}>
                        <div className="text-center">
                            <h3 style={{ fontWeight: '600' }}>TRA CỨU ĐƠN HÀNG</h3>
                            <p>Luôn cập nhật trạng thái đơn hàng của bạn mọi lúc, mọi nơi.</p>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="email" placeholder="Email hoặc Số ĐT" name="email" required />
                            <label htmlFor="email">Số điện thoại / Email *</label>
                            <div className="invalid-feedback">Định dạng không hợp lệ.</div>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="code" placeholder="Enter email" name="Id_Invoice" required />
                            <label htmlFor="code">Mã đơn hàng *</label>
                            <div className="invalid-feedback">Mã đơn hàng không hợp lệ.</div>
                        </div>
                        <div className="d-grid mt-5">
                            <a href="#" type="button" className="btn py-3 border border-dark rounded-0 btn-dark">TRA CỨU</a>
                        </div>
                    </form>
                </div>
                <img className="img-fluid" src="images/logo/logo3.webp" style={{ width: '50%' }} />
            </div>
        </div >
    )
}

export default OrdertrackingPage;