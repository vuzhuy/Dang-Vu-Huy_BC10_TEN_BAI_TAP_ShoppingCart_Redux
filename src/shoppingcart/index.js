import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
import {connect} from "react-redux";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: data,
            detailProduct: data[0],
            listCart: [],
        };
    }

    // handleGetProduct = (product) => {
    //     this.setState({
    //         detailProduct: product,
    //     });
    // };

    // _findIndex = (maSP) => {
    //     return this.state.listCart.findIndex((item) => {
    //         return item.maSP === maSP;
    //     });
    // };

    // handleAddProductCart = (product) => {
    //     let listCart = [...this.state.listCart];
    //     const index = this._findIndex(product.maSP);

    //     if (index !== -1) {
    //         //Tìm thấy SP => Update số lượng
    //         listCart[index].soLuong += 1;
    //     } else {
    //         //Thêm SP vào mảng giỏ hàng
    //         const productCart = {
    //             maSP: product.maSP,
    //             tenSP: product.tenSP,
    //             hinhAnh: product.hinhAnh,
    //             soLuong: 1,
    //             dongGia: product.giaBan,
    //         };

    //         //copy this.state.listCart => mảng mới listCart
    //         listCart = [...this.state.listCart, productCart];
    //     }

    //     this.setState({
    //         listCart: listCart,
    //     });
    // };

    // handleDelete = (product) => {
    //     console.log(product);
    //     let listCart = [...this.state.listCart];
    //     const index = this._findIndex(product.maSP);

    //     if (index !== -1) {
    //         //Tim thay => Xoa
    //         listCart.splice(index, 1);
    //         this.setState({
    //             listCart,
    //         });
    //     }
    // };

    // handleUpdateSL = (product, status) => {
    //     let listCart = [...this.state.listCart];
    //     const index = this._findIndex(product.maSP);

    //     if (index !== -1) {
    //         if (status) {
    //             //Tăng SL
    //             listCart[index].soLuong += 1;
    //         } else {
    //             //Giảm SL
    //             if (listCart[index].soLuong > 1) {
    //                 listCart[index].soLuong -= 1;
    //             }
    //         }
    //         //Update state
    //         this.setState({
    //             listCart,
    //         });
    //     }
    // };

    total = () => {
        // let sum = 0;
        // this.state.listCart.forEach((item) => {
        //     sum += item.soLuong;
        // });
        // return sum;

        return this.state.listCart.reduce((sum, item) => {
            return (sum += item.soLuong);
        }, 0);
    };

    render() {
        const { detailProduct } = this.props;
    
        return (
            <div>
                <h3 className="title">Bài tập giỏ hàng</h3>
                <div className="container">
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng ({this.total()})
                    </button>
                </div>
                <DanhSachSanPham
                    // listProduct={listProduct}
                    // getDetailProduct={this.handleGetProduct}
                    // getProductAddCart={this.handleAddProductCart}
                />
                <Modal
                    // listCart={listCart}
                    // getProdutDelete={this.handleDelete}
                    // getProductUpdate={this.handleUpdateSL}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <img
                                className="img-fluid"
                                src={detailProduct.hinhAnh}
                                alt=""
                            />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{detailProduct.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{detailProduct.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{detailProduct.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{detailProduct.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{detailProduct.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{detailProduct.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detailProduct: state.productReducer.detailProduct,
        listCart: state.productReducer.listCart,
    };
};

export default connect(mapStateToProps, null) (ShoppingCart);