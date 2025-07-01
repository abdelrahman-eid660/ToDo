let todo = document.querySelector('.todo')
let big_list = document.querySelector('.big_list')
let change_mood = document.getElementById('change_mood')
let todo_input = document.getElementById("todo_input");
let todo_btn = document.getElementById("todo_btn");
let list_todo = document.querySelector(".list-todo");
let alert_empty = document.getElementById("alert_empty");
let total_todo = document.querySelector(".total");
let form_group = document.querySelector('.form-group');
let message = document.getElementById('message')
let clear = document.getElementById('clear')
let total_done = document.querySelector('.total_done')
// ================= Dark Mood ===========================
let mood = 'dark'
function change_theem(){
    if(mood == 'dark'){
        todo.style.cssText = 'background-color:#333;color:white;';
        change_mood.classList.replace('fa-moon','fa-sun');
        mood = 'light';
    }
    else{
        todo.style.cssText = null;
        change_mood.classList.replace('fa-sun','fa-moon');
        mood = 'dark';
    }
}
change_mood.addEventListener("click",change_theem);
// ================= check alert in List =================
function check_alert(){
    if(list_todo.childElementCount > 0){
        alert_empty.classList.add('none');
    }
    else{
        alert_empty.classList.remove('none');
    }
}
// ===================== Add TO List =======================
function add_todo(){
    let all_alert = document.querySelectorAll('.alert');
    let input_value = todo_input.value;
    let randNumber1 = Math.round(Math.random() * 255);
    let randNumber2 = Math.round(Math.random() * 255);
    let randNumber3 = Math.round(Math.random() * 255);
    
    if(input_value.length < 3 || input_value.length > 10){
            message.innerHTML = `Enter at least 3 to a maximum of 10 characters.`
            return;}
    else{
        for(item of all_alert){
        if(item.textContent.trim() === input_value.trim()){
            message.innerHTML = `This ${input_value} is Alredy In Your List`
            return;}
            }
        if(list_todo.childElementCount == 5){
            message.innerHTML = `Finish Your Mission In List First`
            return;}
            }
            message.innerHTML = ""
            list_todo.innerHTML += `<div class = "alert" style='color: white; background: #ffb200;'>
            ${input_value}
            <i class="fa-solid fa-trash-can float-end delete" style="color:red;"></i>
            <i class="fa-solid fa-check float-end mx-3 check" style="color:#04ff00;"></i>
            </div>`
            big_list.style.background = `rgb(${randNumber1},${randNumber2},${randNumber3})`
            input_value = ""
            total_todo.innerHTML =`Total Todo : ${list_todo.childElementCount}`
            check_alert()
        }
//======================== ADD Button ===============================
todo_btn.addEventListener('click',add_todo)
//======================== delete and done Button ===================
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
        total_todo.innerHTML =`Total Todo : ${list_todo.childElementCount}`
        total_done.innerHTML = `Total Done : ${document.querySelectorAll('.done').length}`
        check_alert()
    }
    if(event.target.classList.contains('check')){
        event.target.parentElement.classList.toggle('done');
        total_done.innerHTML = `Total Done : ${document.querySelectorAll('.done').length}`
    }
})
//======================== Clear All Button ===========================
clear.addEventListener("click",()=>{
    let result = confirm('Are You Sure')
    if(result == true){
        list_todo.innerHTML = ""
        total_todo.innerHTML =`Total Todo : ${list_todo.childElementCount}`
        total_done.innerHTML = `Total Done : ${document.querySelectorAll('.done').length}`
        check_alert()
    }
})
