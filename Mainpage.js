
// trigger của panel
var task_panel = document.getElementById("task_panel");
function open_task_panel(){
    task_panel.style.display = "block";
    task_panel.transform = "scale(1.1)"
}

// nút close của task panel
var close_panel = document.getElementsByClassName("close_panel")[0];
close_panel.onclick = function() {
    task_panel.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == this.task_panel) {
      task_panel.style.display = "none";
    }
}
//





















// let month =  [
//     {   
//         time:{
//             date: "1",
//             month: "11",
//             year: "2019"
//         },
//         weather: {
//             today:{
//                 temperate: "30°C",
//                 description: "clear"
//             },
//             tomorrow :{
//                 temperate: "20°C",
//                 description: "clear"
//             },
//             nextday :{
//                 temperate: "20°C",
//                 description: "clear"
//             }
//         },
//         task = [
//             {
//                 category: "to-do",
//                 name: "Đọc sách",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 30,
//             },
//             {
//                 category: "to-do",
//                 name: "Đi làm",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "date",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "routine",
//                 name: "gym",
//                 noti: "no",
//                 noti_moring: "no",
//                 noti_hour: 6,
//                 noti_min: 30,
//             },
//             {
//                 category: "routine",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_hour: "null",
//                 noti_min: "null"
//             },
//         ]    
        
//     },
    
//     {   
//         time:{
//             date: "2",
//             month: "11",
//             year: "2019"
//         },
//         weather: {
//             morning:{
//                 temperate: "10°C",
//                 description: "clear"
//             },
//             tomorrow:{
//                 temperate: "30°C",
//                 description: "clear"
//             },
//             nextday:{
//                 temperate: "15°C",
//                 description: "clear"
//             }
//         },
//         task = [
//             {
//                 category: "deadline",
//                 name: "Đọc sách",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 30,
//             },
//             {
//                 category: "to-do",
//                 name: "Đi làm",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "routine",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "routine",
//                 name: "gym",
//                 noti: "no",
//                 noti_moring: "no",
//                 noti_hour: 6,
//                 noti_min: 30,
//             },
//             {
//                 category: "routine",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_hour: "null",
//                 noti_min: "null"
//             },
//         ]    
        
//     },

//     {   
//         time:{
//             date: "2",
//             month: "11",
//             year: "2019"
//         },
//         weather: {
//             today:{
//                 temperate: "10°C",
//                 description: "clear"
//             },
//             tomorrow :{
//                 temperate: "30°C",
//                 description: "clear"
//             },
//             nextday :{
//                 temperate: "15°C",
//                 description: "clear"
//         },
//         task = [
//             {
//                 category: "deadline",
//                 name: "Đọc sách",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 30,
//             },
//             {
//                 category: "to-do",
//                 name: "Đi làm",
//                 noti: "yes",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "routine",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_moring: "yes",
//                 noti_hour: 10,
//                 noti_min: 35,
//             },
//             {
//                 category: "routine",
//                 name: "gym",
//                 noti: "no",
//                 noti_moring: "no",
//                 noti_hour: 6,
//                 noti_min: 30,
//             },
//             {
//                 category: "routine",
//                 name: "gặp anh huy",
//                 noti: "no",
//                 noti_hour: "null",
//                 noti_min: "null"
//             },
//         ]    
        
//     }

// }
// ];