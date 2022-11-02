import { ProductManagement } from "../Controller/productManager";
import * as rl from "readline-sync";
import { SelectProduct } from "../model/Enum";
let productManagement = new ProductManagement();
function Menu() {
  console.log("---Quản Lý Hàng Hóa Siêu Thị---");
  console.log("1.Hiển thị danh sách hàng hóa");
  console.log("2.Tìm kiếm mặt hàng theo tên sản phẩm");
  console.log("3.Thêm mới một mặt hàng");
  console.log("4.Chỉnh sửa thông tin một mặt hàng");
  console.log("5.Xóa mặt hàng");
  console.log("6.Thoát chương trình");

  let select: number = 0;
  while (select < 1 || select > 6) {
    select = +rl.question("Vui lòng chọn số: ");
    if (select < 1 || select > 6) {
      console.log("Vui lòng chọn từ 1 đến 6 !");
    }
  }
  switch (select) {
    case SelectProduct.SHOW: {
      productManagement.showProducts();
      Menu();
      break;
    }
    case SelectProduct.FIND: {
      let search = rl.question("Nhập tên mặt hàng cần tìm :  ");
      productManagement.findProduct(search);
      Menu();
    }
    case SelectProduct.ADD: {
      productManagement.addProduct();
      Menu();
      break;
    }
    case SelectProduct.UPDATE: {
        let edit = +rl.question("Nhập mã hàng cần sửa :  ");
        productManagement.UpdateProduct(edit)
        Menu();
    }
    case SelectProduct.DELETE: {
        let deleteProduct = +rl.question("Nhập mã hàng cần xóa");
        productManagement.DeleteProduct(deleteProduct);
        Menu();
    }
    case SelectProduct.EXIT: {
    }
  }
}

Menu();
