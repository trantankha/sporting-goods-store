import React from 'react';
import Summarycss from '../../assets/css/Summary.css';

const Summary = ({ data, onRemove }) => {

    return (
        <div className="offcanvas offcanvas-end" id="demo">
            <div className="offcanvas-header">
                <h1 className="offcanvas-title">Giỏ hàng</h1>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body pt-0">
                <div className="list-block" style={{
                    height: '470px', overflow: 'auto', paddingBottom: '10px'
                }}>
                    <ul className="nav flex-column">
                        {data.map((item) => {
                            if (item.Percent !== 0) {
                                return (
                                    <li className="nav-item" key={item.Id}>
                                        <img className="img-fluid" src={`http://localhost:5000/${item.Image}`} />
                                        <div className="content">
                                            <div className="text-trademark">{item.Trademark.toUpperCase()}</div>
                                            <a href="#" className="text-name">
                                                <div className="name">
                                                    {item.Name}
                                                </div>
                                            </a>
                                            <div className="text-size">{item.Color} / {item.Size.toUpperCase()}</div>
                                            <div className="text-price d-flex align-items-center" style={{ gap: '6px' }}>
                                                <span className="price-after">{(item.Price * (100 - item.Percent) / 100).toLocaleString()}đ</span>
                                                <span className="price-before">{item.Price.toLocaleString()}đ</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-quantity">Số lượng: {item.Quantity}</div>
                                                <div className="text-delete"
                                                    onClick={() => onRemove(item.Id, item.Size)}><i className="fas fa-trash text-primary"></i></div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                <li className="nav-item" key={item.Id}>
                                    <img className="img-fluid" src={`http://localhost:5000/${item.Image}`} />
                                    <div className="content">
                                        <div className="text-trademark">{item.Trademark.toUpperCase()}</div>
                                        <a href="#" className="text-name">
                                            <div className="name">
                                                {item.Name}
                                            </div>
                                        </a>
                                        <div className="text-size">{item.Color} / {item.Size.toUpperCase()}</div>
                                        <div className="text-price d-flex align-items-center" style={{ gap: '6px' }}>
                                            <span className="price-after" style={{ color: '#000000' }}>{item.Price.toLocaleString()}đ</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-quantity">Số lượng: {item.Quantity}</div>
                                            <div className="text-delete"
                                                onClick={() => onRemove(item.Id, item.Size)}><i className="fas fa-trash text-primary"></i></div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className="total-price d-flex justify-content-between align-items-center py-2">
                    <div className="text-total">Tạm tính</div>
                    <div className="text-price" style={{ fontSize: '18px', fontWeight: '500' }}>{data.reduce((total, item) => total + (item.Price * (100 - item.Percent) / 100) * item.Quantity, 0).toLocaleString()}đ</div>
                </div>
                <div className="d-grid">
                    <a href="/payment" type="button" className="btn btn-danger  rounded-0">THANH TOÁN</a>
                    <a href="/cart" type="button" className="btn btn-dark rounded-0 mt-2">Giỏ hàng</a>
                </div>
            </div >
        </div>
    )
}
export default Summary;