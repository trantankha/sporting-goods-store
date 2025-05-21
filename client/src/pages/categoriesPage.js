import React, { useState, useEffect } from "react";
import Categorycss from '../assets/css/Category.css';
import { getTypeProducts } from "../services/typeproductService";
import { getDiscounts } from "../services/discountService";

const CategoriesPage = () => {
    const [type, setType] = useState([]);
    const [discount, setDiscount] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        getTypeProducts()
            .then((res) => {
                setType(res);
            })
            .catch((err) => { console.log('Error fetching type product:', err); });
        getDiscounts()
            .then((res) => {
                const response = res[0];
                const fixedPath = response.map(item => ({
                    ...item,
                    Price: parseInt(item.Price),
                    Image: JSON.parse(item.Image)
                }))
                setDiscount(fixedPath);
            })
            .catch((err) => { console.log('Error fetching discount:', err); });

    }, [])
    const filteredDiscounts = discount.filter(item => {
        const nameMatch = item.Name.toLowerCase().includes(search.toLowerCase());
        const trademarkMatch = item.Trademark.toLowerCase().includes(search.toLowerCase());
        return nameMatch || trademarkMatch
    });
    const sortDiscounts = (order) => {
        const sortedDiscounts = [...filteredDiscounts].sort((a, b) => {
            if (order === "asc") {
                return a.Price - b.Price;
            } else if (order === "desc") {
                return b.Price - a.Price;
            } else if (order === "az") {
                return a.Name.localeCompare(b.Name);
            } else if (order === "za") {
                return b.Name.localeCompare(a.Name);
            } else if (order === "new") {
                return new Date(b.CreatedAt) - new Date(a.CreatedAt);
            }
            return 0;
        });
        setDiscount(sortedDiscounts);
    };
    return (
        <>
            <div className="bread-scrumb" style={{ backgroundColor: '#f7f7f7', padding: '8px 0px' }}>
                <div className="container d-flex align-items-center">
                    <a href="/" className="nav-link">Trang chủ</a>
                    <i className="fas fa-angle-double-right px-2"></i>
                    <a href="#" className="nav-link">Danh mục sản phẩm</a>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 pt-5">
                        <div className="card border-0">
                            <div className="card-header d-grid p-0">
                                <a href="#sex" className="btn btn-warning rounded-0 d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    style={{ justifyContent: 'space-between' }}>
                                    <span className="float-start">GIỚI TÍNH</span>
                                    <i className="fas fa-caret-down float-end"></i>
                                </a>
                            </div>
                            <div className="collapse show" id="sex">
                                <div className="card-body px-0">
                                    <div className="block-item">
                                        <ul className="nav flex-column">
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="male" />
                                                <label htmlFor="male" className="form-label m-0">NAM</label>
                                                <span className="float-end type-quantity">(47)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="female" />
                                                <label htmlFor="female" className="form-label m-0">NỮ</label>
                                                <span className="float-end type-quantity">(36)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="boy" />
                                                <label htmlFor="boy" className="form-label m-0">BÉ TRAI</label>
                                                <span className="float-end type-quantity">(55)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="girl" />
                                                <label htmlFor="girl" className="form-label m-0">BÉ GÁI</label>
                                                <span className="float-end type-quantity">(21)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-header d-grid p-0">
                                <a href="#trademark" className="btn btn-warning rounded-0 d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    style={{ justifyContent: 'space-between' }}>
                                    <span className="float-start">THƯƠNG HIỆU</span>
                                    <i className="fas fa-caret-down float-end"></i>
                                </a>
                            </div>
                            <div className="collapse show" id="trademark">
                                <div className="card-body px-0">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Tùy chọn tìm kiếm..." />
                                        <span className="input-group-text">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <div className="block-item">
                                        <ul className="nav flex-column">
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="2xu" />
                                                <label htmlFor="2xu" className="form-label m-0">2XU</label>
                                                <span className="float-end type-quantity">(15)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="adidas" />
                                                <label htmlFor="adidas" className="form-label m-0">ADIDAS</label>
                                                <span className="float-end type-quantity">(40)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="columbia" />
                                                <label htmlFor="columbia" className="form-label m-0">COLUMBIA</label>
                                                <span className="float-end type-quantity">(83)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="converse" />
                                                <label htmlFor="converse" className="form-label m-0">CONVERSE</label>
                                                <span className="float-end type-quantity">(11)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="crocs" />
                                                <label htmlFor="crocs" className="form-label m-0">CROCS</label>
                                                <span className="float-end type-quantity">(123)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="fila" />
                                                <label htmlFor="fila" className="form-label m-0">FILA</label>
                                                <span className="float-end type-quantity">(9)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="hoka" />
                                                <label htmlFor="hoka" className="form-label m-0">HOKA</label>
                                                <span className="float-end type-quantity">(24)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="nike" />
                                                <label htmlFor="nike" className="form-label m-0">NIKE</label>
                                                <span className="float-end type-quantity">(33)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="running" />
                                                <label htmlFor="running" className="form-label m-0">ON RUNNING</label>
                                                <span className="float-end type-quantity">(10)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-header d-grid p-0">
                                <a href="#typeproduct" className="btn btn-warning rounded-0 d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    style={{ justifyContent: 'space-between' }}>
                                    <span className="float-start">LOẠI SẢN PHẨM</span>
                                    <i className="fas fa-caret-down float-end"></i>
                                </a>
                            </div>
                            <div className="collapse" id="typeproduct">
                                <div className="card-body px-0">
                                    <div className="block-item">
                                        <ul className="nav flex-column">
                                            {type.map((item) => (
                                                <li className="nav-item pb-3" key={item.Id}>
                                                    <input type="checkbox" className="form-check-input me-2" id={item.Name} />
                                                    <label htmlFor={item.Name} className="form-label m-0">{item.Name.toUpperCase()}</label>
                                                    <span className="float-end type-quantity">({item.Quantity})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-header d-grid p-0">
                                <a href="#color" className="btn btn-warning rounded-0 d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    style={{ justifyContent: 'space-between' }}>
                                    <span className="float-start">MÀU SẮC</span>
                                    <i className="fas fa-caret-down float-end"></i>
                                </a>
                            </div>
                            <div className="collapse show" id="color">
                                <div className="card-body px-0">
                                    <div className="block-item">
                                        <ul className="nav flex-column">
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="xanh-duong"
                                                        style={{ backgroundColor: 'blue' }} />
                                                    <label htmlFor="xanh-duong" className="form-label m-0">XANH DƯƠNG</label>
                                                </div>
                                                <span className="type-quantity text-end">(38)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="cam-san-ho"
                                                        style={{ backgroundColor: '#ff7f50' }} />
                                                    <label htmlFor="cam-san-ho" className="form-label m-0">CAM SAN HÔ</label>
                                                </div>
                                                <span className="type-quantity text-end">(17)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="den"
                                                        style={{ backgroundColor: '#000000' }} />
                                                    <label htmlFor="den" className="form-label m-0">ĐEN</label>
                                                </div>
                                                <span className="type-quantity text-end">(162)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="nau"
                                                        style={{ backgroundColor: '#993300' }} />
                                                    <label htmlFor="nau" className="form-label m-0">NÂU</label>
                                                </div>
                                                <span className="type-quantity text-end">(69)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="tim"
                                                        style={{ backgroundColor: '#b086ca' }} />
                                                    <label htmlFor="tim" className="form-label m-0">TÍM</label>
                                                </div>
                                                <span className="type-quantity text-end">(92)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="vang"
                                                        style={{ backgroundColor: '#ffff00' }} />
                                                    <label htmlFor="vang" className="form-label m-0">VÀNG</label>
                                                </div>
                                                <span className="type-quantity text-end">(136)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="vang-chanh"
                                                        style={{ backgroundColor: '#d9fd49' }} />
                                                    <label htmlFor="vang-chanh" className="form-label m-0">VÀNG CHANH</label>
                                                </div>
                                                <span className="type-quantity text-end">(23)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="xam"
                                                        style={{ backgroundColor: '#808080' }} />
                                                    <label htmlFor="xam" className="form-label m-0">XÁM</label>
                                                </div>
                                                <span className="type-quantity text-end">(228)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="xanh-la"
                                                        style={{ backgroundColor: '#008000' }} />
                                                    <label htmlFor="xanh-la" className="form-label m-0">XANH LÁ</label>
                                                </div>
                                                <span className="type-quantity text-end">(181)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="form-check-input m-0 me-2"
                                                        id="xanh-quan-doi"
                                                        style={{ backgroundColor: '#4b5320' }} />
                                                    <label htmlFor="xanh-quan-doi" className="form-label m-0">XANH QUÂN ĐỘI</label>
                                                </div>
                                                <span className="type-quantity text-end">(66)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0">
                            <div className="card-header d-grid p-0">
                                <a href="#sex" className="btn btn-warning rounded-0 d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    style={{ justifyContent: 'space-between' }}>
                                    <span className="float-start">GIÁ</span>
                                    <i className="fas fa-caret-down float-end"></i>
                                </a>
                            </div>
                            <div className="collapse show" id="sex">
                                <div className="card-body px-0">
                                    <div className="block-item">
                                        <ul className="nav flex-column">
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-500k" />
                                                <label htmlFor="under-500k" className="form-label m-0">Dưới 500.000đ</label>
                                                <span className="float-end type-quantity">(151)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-1000k" />
                                                <label htmlFor="under-1000k" className="form-label m-0">500.000đ - 1.000.000đ</label>
                                                <span className="float-end type-quantity">(777)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-2000k" />
                                                <label htmlFor="under-2000k" className="form-label m-0">1.000.000đ - 2.000.000đ</label>
                                                <span className="float-end type-quantity">(527)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-3000k" />
                                                <label htmlFor="under-3000k" className="form-label m-0">2.000.000đ - 3.000.000đ</label>
                                                <span className="float-end type-quantity">(324)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-4000k" />
                                                <label htmlFor="under-4000k" className="form-label m-0">3.000.000đ - 4.000.000đ</label>
                                                <span className="float-end type-quantity">(221)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="under-5000k" />
                                                <label htmlFor="under-5000k" className="form-label m-0">4.000.000đ - 5.000.000đ</label>
                                                <span className="float-end type-quantity">(62)</span>
                                            </li>
                                            <li className="nav-item pb-3">
                                                <input type="checkbox" className="form-check-input me-2" id="over-5000k" />
                                                <label htmlFor="over-5000k" className="form-label m-0">Trên 5.000.000đ</label>
                                                <span className="float-end type-quantity">(62)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="head-block">
                            <div className="input-group input-group-md pb-3">
                                <input type="text" className="form-control"
                                    placeholder="Tìm kiếm sản phẩm bạn muốn trong này..."
                                    style={{ padding: '8px', fontSize: '16px' }}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} />
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </div>
                            <ul className="nav d-flex align-items-center justify-content-between border-bottom py-2">
                                <li className="nav-item" style={{ fontSize: '16px', fontWeight: '500px' }}>{discount.length} sản phẩm</li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a href="#" className="btn btn-dark dropdown-toggle" type="button"
                                            style={{ fontSize: '14px' }}
                                            data-bs-toggle="dropdown"
                                        >
                                            Sắp Xếp
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a href="#" className="dropdown-item text-danger">Liên quan</a></li>
                                            <li><a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={() => sortDiscounts("new")}
                                            >Mới nhất
                                                <i className="far fa-star"></i>
                                            </a></li>
                                            <li><a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={() => sortDiscounts("desc")}
                                            >Giá giảm dần
                                                <i className="fas fas fa-sort-amount-down"></i>
                                            </a></li>
                                            <li><a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={() => sortDiscounts("asc")}
                                            >Giá tăng dần
                                                <i className="fas fa-sort-amount-up"></i>
                                            </a></li>
                                            <li><a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={() => sortDiscounts("az")}
                                            >A đến Z
                                                <i className="fas fa-sort-alpha-down"></i>
                                            </a></li>
                                            <li><a
                                                href="#"
                                                className="dropdown-item"
                                                onClick={() => sortDiscounts("za")}
                                            >Z đến A
                                                <i className="fas fa-sort-alpha-up"></i>
                                            </a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-block mt-4">
                            <div className="block-item row align-items-center">
                                {filteredDiscounts.map((item) => {
                                    if (item.Percent !== 0) {
                                        return <div className="col-md-3 pb-3" key={item.Id}>
                                            <div className="card border-0">
                                                <a href={`http://localhost:3000/information/${item.Id}`} className="img-fluid">
                                                    <img className="card-img-top frame-picture" src="/images/frame/frame1.webp" />
                                                    <div className="block-picture">
                                                        <img className="card-img-top picture-1" src={`http://localhost:5000/${item.Image[0]}`} />
                                                        <img className="card-img-top picture-2" src={`http://localhost:5000/${item.Image[1]}`} />
                                                    </div>
                                                    <div className="block-badge">
                                                        <span className="badge bg-danger">{`-${item.Percent}%`}</span>
                                                    </div>
                                                </a>
                                                <div className="card-body px-0">
                                                    <div className="link-text">
                                                        <a href={`http://localhost:3000/information/${item.Id}`} className="nav-link">{`${item.Name} - ${item.Color}`}</a>
                                                    </div>
                                                    <div className="trademark">{item.Trademark.toUpperCase()}</div>
                                                    <div className="price">
                                                        <span className="price-after">{(item.Price * (100 - item.Percent) / 100).toLocaleString()}đ</span>
                                                        <span className="price-before">{item.Price.toLocaleString()}đ</span>
                                                    </div>
                                                    <div className="evaluate">
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="far fa-star-half-alt text-warning"></i>
                                                        <i>{item.Viewer} Reviewer</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    return (
                                        <div className="col-md-3 pb-3" key={item.Id}>
                                            <div className="card border-0">
                                                <a href={`http://localhost:3000/information/${item.Id}`} className="img-fluid">
                                                    <img className="card-img-top frame-picture" src="/images/frame/frame2.webp" />
                                                    <div className="block-picture">
                                                        <img className="card-img-top picture-1" src={`http://localhost:5000/${item.Image[0]}`} />
                                                        <img className="card-img-top picture-2" src={`http://localhost:5000/${item.Image[1]}`} />
                                                    </div>
                                                    <div className="block-badge">
                                                        <span className="badge">MỚI</span>
                                                    </div>
                                                </a>
                                                <div className="card-body px-0">
                                                    <div className="link-text">
                                                        <a href={`http://localhost:3000/information/${item.Id}`} className="nav-link">{`${item.Name} - ${item.Color}`}</a>
                                                    </div>
                                                    <div className="trademark">{item.Trademark.toUpperCase()}</div>
                                                    <div className="price">
                                                        <span className="price-after text-light">{(item.Price).toLocaleString()}đ</span>
                                                    </div>
                                                    <div className="evaluate">
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="fas fa-star text-warning"></i>
                                                        <i className="far fa-star text-warning"></i>
                                                        <i>{item.Viewer} Reviewer</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CategoriesPage;