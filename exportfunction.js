"use strict";
exports.__esModule = true;
function vehicalDetails(type) {
    console.log("Vechical Detail");
    console.log("Vechical Name = " + type.name + ",Whells= " + type.wheels + ", model is = " + type.model);
}
exports.vehicalDetails = vehicalDetails;
function OwnerDetail(detail) {
    console.log("Owner Detail");
    console.log("Owner Name= " + detail.name + " phone no= " + detail.pno + " and City = " + detail.city + " ");
}
exports.OwnerDetail = OwnerDetail;
