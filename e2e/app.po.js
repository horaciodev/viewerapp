"use strict";
var protractor_1 = require('protractor');
var ProductManagementPage = (function () {
    function ProductManagementPage() {
    }
    ProductManagementPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ProductManagementPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ProductManagementPage;
}());
exports.ProductManagementPage = ProductManagementPage;
//# sourceMappingURL=app.po.js.map