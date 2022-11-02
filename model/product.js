"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, type, price, amount, date, describe) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._describe = describe;
    }
    Product.prototype.getId = function () {
        return this._id;
    };
    Product.prototype.setId = function (value) {
        this._id = value;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.getType = function () {
        return this._type;
    };
    Product.prototype.setType = function (value) {
        this._type = value;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    Product.prototype.getAmount = function () {
        return this._amount;
    };
    Product.prototype.setAmount = function (value) {
        this._amount = value;
    };
    Product.prototype.getDate = function () {
        return this._date;
    };
    Product.prototype.setDate = function (value) {
        this._date = value;
    };
    Product.prototype.getDescribe = function () {
        return this._describe;
    };
    Product.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    return Product;
}());
exports.Product = Product;
