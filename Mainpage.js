///////data
let unset_lish = document.getElementById("unset_lish");
let total = document.getElementById("total");
let unset_arr = [
            `<li class="blue">mua sách</li>`,
            `<li class="red">mua sách nha mọi người</li>`,
            `<li class="blue">mua sách</li>`]
function load_unset(){
    total.innerHTML = `${unset_arr.length} total`
    unset_lish.innerHTML = unset_arr.join("");
}
load_unset()

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


             // Insert bảng dropdown giờ trong task bar

let hour_array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
let select_string_hour = [];
let insert_hour = document.getElementsByClassName("input_hour");
hour_array.map(item =>{
    let a = `<option value = "${item}">${item}</option>`
    select_string_hour.push(a);
});
console.log (select_string_hour)
insert_hour[0].innerHTML = `${select_string_hour}`;
insert_hour[1].innerHTML = `${select_string_hour}`;

                            //////////////////
let minute_array = [00,02,10,15,20,25,30,35,40,45,50,55];
let select_string_minute = [];
let insert_minute = document.getElementsByClassName("input_minute");
minute_array.map(item =>{
    let a = `<option value = "${item}">${item}</option>`
    select_string_minute.push(a);
});
insert_minute[0].innerHTML = `${select_string_minute}`;
insert_minute[1].innerHTML = `${select_string_minute}`;
                            /////////////////

let remind_array = [00,02,10,15,20,25,30,35,40,45,50,55,60];
let select_string_remind = [];
let insert_remind = document.getElementById("pick_time_remind");
remind_array.map(item =>{
    let a = `<option value = "${item}">${item}</option>`
    select_string_remind.push(a);
});
insert_remind.innerHTML = `${select_string_remind}`;

                        // XỬ LÝ CÁC TÌNH HUỐNG VỚI UNSET//
let unset_btn = document.getElementById("unset_btn");
let input_name = document.getElementById("input_name");
let noti_set = document.getElementById("noti_set")
let color = "none";
function ready_to_unset(){
    let x  = event.target;
    let category = x.innerHTML;

    switch(category){
        case "To-do":
            color = "blue";
            break;
        case "Dates":
            color = "yellow";
            break;
        case "Routine":
            color = "green";
            break;
        case "Deadline":
            color = "red";
            break;
    }
    return color
}

////////////////////// ấn nút UNSET
unset_btn.addEventListener("click", ()=>{
    let task = input_name.value
    if (color == "none"){
        noti_set.innerHTML = "You need to choose category first"
    }else if (task == "null" ||task == "undefined"){
        noti_set.innerHTML = "You need to type task name"
    } else {
        let new_unset_task = `<li class="${color}">${task}</li>`
        console.log(new_unset_task);
        unset_arr.push(new_unset_task)
        task_panel.style.display = "none";
        load_unset()
        
    }
})

let enable = document.getElementById("enable")
let set_btn = document.getElementById("set_btn")
set_btn.addEventListener("click",()=>{
    if(enable.style.display == "none"){
        enable.style.display = "" 

    } else{
        enable.style.display = "none"
    }
})













