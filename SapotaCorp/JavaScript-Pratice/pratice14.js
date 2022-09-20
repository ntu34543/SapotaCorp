/*Viết hàm chuyển đổi số thập phân sang giờ phút (input là số giờ nhỏ hơn 24)
 Ví dụ: 
 1 => 1 hour(s)
 1.75 => 1 hour(s) 45 minute(s)
*/


function converHour(number){
    let hour = Math.floor(number);
    if(hour>24){
        console.log("Số giờ vượi quá 24 !");
        return
    }else{
        let tamp = number-hour;
        let minute = tamp.toFixed(2)*60;
        console.log( `${hour} hour(s) ${minute} minute(s)`);
        
    }
    
}

converHour(1.65)