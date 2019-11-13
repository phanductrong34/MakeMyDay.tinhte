
// console.log(document.getElementById('cal_day'));


// list_cal_day = document.getElementsByClassName('cal_day')
// for(let i = 0; i < list_cal_day.length; i++){
//     cal_day = list_cal_day[i]
//     cal_day.setAttribute("id", i);
//     console.log(cal_day);
// }



document.getElementById('cal_day').addEventListener('click', function () {
    document.querySelector('.bg_detailtasks_tab').style.display = 'flex';
});
document.getElementById('cal_day2').addEventListener('click', function () {
    document.querySelector('.bg_detailtasks_tab').style.display = 'flex';
});
document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg_detailtasks_tab').style.display = 'none';
});
