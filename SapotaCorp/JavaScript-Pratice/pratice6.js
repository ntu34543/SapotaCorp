
//Mỗi tháng để dành được tiền tiết kiệm là X (kNVD) viết hàm tính toán trả lại 1 mảng mới thể hiện tích lũy qua các tháng
const profit = [
    {
      month: 'Tháng 1',
      profit: 20
    },
    {
      month: 'Tháng 2',
      profit: 5
    },
    {
      month: 'Tháng 3',
      profit: 10
    },
    {
      month: 'Tháng 4',
      profit: 20
    },
  ]
 
 
// yêu cầu trà về
const newProfit = [
  {
    month: 'Tháng 1',
    profit: 20,
    cumulative: 20
  },
  {
    month: 'Tháng 2',
    profit: 5,
    cumulative: 25
  },
  {
    month: 'Tháng 3',
    profit: 10,
    cumulative: 35
  },
  {
    month: 'Tháng 4',
    profit: 20,
    cumulative: 55
  },
]
//Bài làm:
// let tamp=0;
// let newArray = profit.map(function(item,index){
   
//     tamp = tamp + item.profit
//     console.log(tamp);
//     return {
       
//         month:item.month,
//         profit:item.profit,
//         cumulative:tamp
//     }
 
// })
 
// console.log(newArray);
 
// reduce
var newArr = profit.reduce(function(total, object){
    // TODO
    total.cumulative += object.profit;
    total.newProfit.push({ ...object, cumulative: total.cumulative });
    return total;
  },
  {
    newProfit: [],
    cumulative: 0,
  }
);
//giá trị khởi tạo của reduce là 1 object
console.log(newArr.newProfit);
