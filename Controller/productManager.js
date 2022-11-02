"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var product_1 = require("../model/product");
var rl = require("readline-sync");
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this.products = [];
    }
    ProductManagement.prototype.showProducts = function () {
        if (this.products.length <= 0) {
            console.log("--------------Không có dữ liệu--------------");
        }
        console.table(this.products);
    };
    ProductManagement.prototype.findProduct = function (name) {
        var _this = this;
        var flags = 0;
        this.products.forEach(function (product) {
            if (product.getName().includes(name)) {
                console.table(_this.products);
                flags++;
            }
            //   if (product.getName() === name) {
            //     console.table(this.products);
            //     flags++;
            //   }
        });
        if (flags === 0) {
            console.log("---------Không có dữ liệu phù hợp------------");
        }
    };
    ProductManagement.prototype.addProduct = function () {
        var input = this.inputProduct();
        this.products.push(input);
        console.log("----------------Thêm sản phẩm thành công------------");
    };
    ProductManagement.prototype.UpdateProduct = function (id) {
        var _this = this;
        if (!this.checkProductId(id)) {
            console.log("Không tồn tại mặt hàng cần update");
        }
        else {
            var newProduct_1 = this.inputProduct();
            this.products.forEach(function (product, index) {
                if (product.getId() === id) {
                    _this.products[index] = newProduct_1;
                    console.log("--------------Đã sửa thành công------------");
                    console.table(newProduct_1);
                }
            });
        }
    };
    ProductManagement.prototype.DeleteProduct = function (id) {
        var _this = this;
        if (!this.checkProductId(id)) {
            console.log("Không tồn tại mặt hàng cần xóa");
        }
        else {
            this.products.forEach(function (product, index) {
                if (product.getId() === id) {
                    _this.products.splice(index, 1);
                }
            });
            console.log("---------------Đã xóa thành công--------------");
        }
    };
    ProductManagement.prototype.checkProductId = function (id) {
        var flag = false;
        this.products.forEach(function (product) {
            if (product.getId() === id) {
                flag = true;
            }
        });
        return flag;
    };
    ProductManagement.prototype.checkProductName = function (name) {
        var flag = false;
        this.products.forEach(function (product) {
            if (product.getName() === name) {
                flag = true;
            }
        });
        return flag;
    };
    ProductManagement.prototype.inputProduct = function () {
        var id = +rl.question("Nhập ID : ");
        while (!id) {
            id = +rl.question("Nhập lại ID : ");
        }
        var name = rl.question("Nhập tên mặt hàng : ");
        while (!name) {
            name = rl.question("Nhập lại tên mặt hàng : ");
        }
        var type = rl.question("Nhập loại hàng : ");
        while (!type) {
            type = rl.question("Nhập lại loại hàng : ");
        }
        var price = +rl.question("Nhập giá : ");
        while (!price) {
            price = +rl.question("Nhập lại giá : ");
        }
        var amount = +rl.question("Nhập số lượng : ");
        while (!amount) {
            amount = +rl.question("Nhập lại số lượng : ");
        }
        var date = new Date().toLocaleDateString();
        var describe = rl.question("Nhập mô tả mặt hàng : ");
        while (!describe) {
            describe = rl.question("Nhập lại mô tả mặt hàng : ");
        }
        return new product_1.Product(id, name, type, price, amount, date, describe);
    };
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
