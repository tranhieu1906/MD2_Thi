"use strict";
exports.__esModule = true;
var productManager_1 = require("../Controller/productManager");
var rl = require("readline-sync");
var Enum_1 = require("../model/Enum");
var productManagement = new productManager_1.ProductManagement();
function Menu() {
    console.log("---Quản Lý Hàng Hóa Siêu Thị---");
    console.log("1.Hiển thị danh sách hàng hóa");
    console.log("2.Tìm kiếm mặt hàng theo tên sản phẩm");
    console.log("3.Thêm mới một mặt hàng");
    console.log("4.Chỉnh sửa thông tin một mặt hàng");
    console.log("5.Xóa mặt hàng");
    console.log("6.Thoát chương trình");
    var select = 0;
    while (select < 1 || select > 6) {
        select = +rl.question("Vui lòng chọn số: ");
        if (select < 1 || select > 6) {
            console.log("Vui lòng chọn từ 1 đến 6 !");
        }
    }
    switch (select) {
        case Enum_1.SelectProduct.SHOW: {
            productManagement.showProducts();
            Menu();
            break;
        }
        case Enum_1.SelectProduct.FIND: {
            var search = rl.question("Nhập tên mặt hàng cần tìm :  ");
            productManagement.findProduct(search);
            Menu();
        }
        case Enum_1.SelectProduct.ADD: {
            productManagement.addProduct();
            Menu();
            break;
        }
        case Enum_1.SelectProduct.UPDATE: {
            var edit = +rl.question("Nhập mã hàng cần sửa :  ");
            productManagement.UpdateProduct(edit);
            Menu();
        }
        case Enum_1.SelectProduct.DELETE: {
            var deleteProduct = +rl.question("Nhập mã hàng cần xóa");
            productManagement.DeleteProduct(deleteProduct);
            Menu();
        }
        case Enum_1.SelectProduct.EXIT: {
        }
    }
}
Menu();
