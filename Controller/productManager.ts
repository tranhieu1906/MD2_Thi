import { Product } from "../model/product";
import * as rl from "readline-sync";
export class ProductManagement {
  products: Product[] = [];
  showProducts() {
    if (this.products.length <= 0) {
      console.log("--------------Không có dữ liệu--------------");
    }
    console.table(this.products);
  }
  findProduct(name: string) {
    let flags = 0;
    this.products.forEach((product) => {
      if (product.getName().includes(name)) {
        console.table(this.products);
        flags++;
      }
    });
    if (flags === 0) {
      console.log("---------Không có dữ liệu phù hợp------------");
    }
  }
  addProduct() {
    let input = this.inputProduct();
    this.products.push(input);
    console.log("----------------Thêm sản phẩm thành công------------");
  }
  UpdateProduct(id: number) {
    if (!this.checkProductId(id)) {
      console.log("Không tồn tại mặt hàng cần update");
    } else {
      let newProduct = this.inputProduct();
      this.products.forEach((product, index) => {
        if (product.getId() === id) {
          this.products[index] = newProduct;
          console.log("--------------Đã sửa thành công------------");
          console.table(newProduct);
        }
      });
    }
  }
  DeleteProduct(id: number) {
    if (!this.checkProductId(id)) {
      console.log("Không tồn tại mặt hàng cần xóa");
    } else {
      this.products.forEach((product, index) => {
        if (product.getId() === id) {
          this.products.splice(index, 1);
        }
      });
      console.log("---------------Đã xóa thành công--------------");
    }
  }
  checkProductId(id: number): boolean {
    let flag = false;
    this.products.forEach((product) => {
      if (product.getId() === id) {
        flag = true;
      }
    });
    return flag;
  }
  checkProductName(name: string): boolean {
    let flag = false;
    this.products.forEach((product) => {
      if (product.getName() === name) {
        flag = true;
      }
    });
    return flag;
  }
  inputProduct() {
    let id = +rl.question("Nhập ID : ");
    while (!id) {
      id = +rl.question("Nhập lại ID : ");
    }
    let name = rl.question("Nhập tên mặt hàng : ");
    while (!name) {
      name = rl.question("Nhập lại tên mặt hàng : ");
    }
    let type = rl.question("Nhập loại hàng : ");
    while (!type) {
      type = rl.question("Nhập lại loại hàng : ");
    }
    let price = +rl.question("Nhập giá : ");
    while (!price) {
      price = +rl.question("Nhập lại giá : ");
    }
    let amount = +rl.question("Nhập số lượng : ");
    while (!amount) {
      amount = +rl.question("Nhập lại số lượng : ");
    }
    let date = new Date().toLocaleDateString();
    let describe = rl.question("Nhập mô tả mặt hàng : ");
    while (!describe) {
      describe = rl.question("Nhập lại mô tả mặt hàng : ");
    }
    return new Product(id, name, type, price, amount, date, describe);
  }
}
