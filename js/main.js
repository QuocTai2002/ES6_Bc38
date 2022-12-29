/// tạo array với list công việt
let workList = [];
const addList = function(){
    let text = document.getElementById("newTask").value;
    if (text == "") {
    alert("vui lòng nhập công việc hôm nay !")
    return}
    
    workList.push(text)
    document.getElementById("newTask").innerHTML = "";
    saveLocal ();
    renderWork ();
    
}
// lưu trữ vào local
function saveLocal (){
    var workListJason = JSON.stringify(workList);
    localStorage.setItem("SL", workListJason)
}
// đưa dữ liệu dưới local hiển thị
function getLocal (){
    var workListJason = localStorage.getItem("SL");
    if (!workListJason) return;    // chuyển từ json sang object
    var workListLocal = JSON.parse(workListJason);
    return workListLocal;
} 
//in ra công việc đã thêm 
function renderWork (){
    let html = ""
    for (let index in workList ){
        html += `<li>
        <p>${workList[index]}</p>
        <div>
         <i class=" delete fa fa-trash-alt" onclick="deleteWork (${index})"></i>
        <i class=" completed fa fa-check-circle" onclick="completedWork (${index})"></i>
        </div>
        </li>`
        document.getElementById("todo").innerHTML = html;
    } 
   
}
// xóa công việc
function deleteWork (values){
    for(let index in workList){
        if (index == values){
            workList.splice(index,1)
        }
    }
    renderWork();
    saveLocal ()
}
// lưu trữ vào local
function saveLocalComplete (){
    var workListJason = JSON.stringify(workListComplete);
    localStorage.setItem("ML", workListJason)
}
// đưa dữ liệu dưới local hiển thị
function getLocalComplete (){
    var workListCompleteJason = localStorage.getItem("ML");
    if (!workListCompleteJason) return;    // chuyển từ json sang object
    var workListCompleteLocal = JSON.parse(workListCompleteJason);
    return workListCompleteLocal;
} 
//xóa công vieevj hoàng thành
function deleteWorkComplete (values){
    for(let index in workListComplete){
        if (index == values){
            workListComplete.splice(index,1)
        }
    }
    renderWorkComplete(); 
    saveLocalComplete();
}
window.onload = function(){
    workListComplete = getLocalComplete ();
    workList = getLocal();
    renderWorkComplete();
    renderWork ();
}
var workListComplete = []
//hoàn thành công việc
function completedWork (value){
   for (let index in workList){
    if (index == value){
        workListComplete.push(workList[index])
        workList.splice(index,1)
    }
   }
   renderWork ();
   renderWorkComplete();
   saveLocal();
   saveLocalComplete();
}
//in những công việt đã hoành thành
function renderWorkComplete(){
    let html = ""
    for (let index in workListComplete){
        html += `<li>
        <p>${workListComplete[index]}</p>
        <div>
         <i class=" delete fa fa-trash-alt" onclick="deleteWorkComplete (${index})"></i>
        <i class=" completed fa fa-check-circle" onclick="completedWork (${index})"></i>
        </div>
        </li>`
        document.getElementById("completed").innerHTML = html;
    } 
}
//sap xep cong viec
function sortWorkListA_Z (){
     workList.sort();
     renderWork();
     saveLocal();
}
function sortWorkListZ_A (){
    workList.reverse();
    renderWork();
    saveLocal();
}
