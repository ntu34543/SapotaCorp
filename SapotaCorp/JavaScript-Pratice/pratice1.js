// Cho dữ liệu cứng
interns = [
  {
    ID: 1,
    question: 'Have you attended and signed onto the relevant daily pre-start / briefing',
    isAnswer: false
  },
  {
     ID: 2,
    question: 'Do you feel physically able to safely conduct your assigned tasks',
    isAnswer: true
  },
  {
    ID: 3,
    question: 'Have you attended and signed onto the relevant daily pre-start / briefing?',
    isAnswer: true
  },
  {
    ID: 4,
    question: 'Are you free from the influence/effects of drugs and/or alcohol?',
    isAnswer: true
  },
  {
    ID: 5,
    question: '',
    isAnswer: false
  },
]
/*YÊU CẦU */
// Phía trên là dánh sách checklist câu hỏi cần phải trả lời của công nhân khi vào công trường.
// Kiểm tra tất cả câu hỏi của công nhân xem đã trả lời chưa 
// nếu tất cả isAnswer là true thì in ra: "Personal Checklist: Passed" 
// nếu 1 trong những câu question có isAnswer là false:  "Personal Checklist: Failed" 
// */

/*BÀI LÀM */
var check = interns.every((item,index)=>{
    console.log(index,item.isAnswer);
    return item.isAnswer===true;
})

if(check){
    console.log('Personal Checklist: Passed');
}else{
    console.log('Personal Checklist: Failed');
}