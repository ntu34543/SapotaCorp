//Cho đối tượng
item = {
    product: 'Bút chì',
    price: null
 }
/*YÊU CẦU */
//Viết hàm check 'price của item
// 1. Nếu item có price thì in ra : San pham {product} có giá {price} đồng
// 2. nếu item có price là null hoặc undefined thì in ra: Sản phẩm chưa nhập giá
 

/*BÀi LÀM */
function checkPrice(item){
  if(item.price || item.price == 0){
      return `Sản phẩm ${item.product} có giá ${item.price} đồng`;
  }else{
      return `Sản phẩm chưa nhập giá`;
  }
}

console.log(checkPrice(item));