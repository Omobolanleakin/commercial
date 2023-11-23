//console.log("hello world!");
//console.log(typeof "Dave");
//console.log(typeof 42);
//console.log(typeof true);
//console.log(typeof 22.3);

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch


//1. Conditions
//const num =1;

//if (num===0) {
   // console.log ("num is 0");

//} else if(num > 1 ){   // else if is used when there is still condition left
 //   console.log("num is", num)

//}else{     // the end of the condition statement 
    //console.log(" num is",num)

//}

// 2. list 
//const i = 2;

//const mylist = ["david ", 2, true, "school", ["me", "you"]]

//3. forloop

// console.log("loops")

// for(i = 0; i<5; i++){
//     console.log(i+1)


    
// }

//4. while loop the difference between for and while is that for loop the condition are inside the bracket  itself and for while the 
//condition  are inside the loop 


// var i = 0;

// while (i < 10) {

//     const BolaStartsWith = "B";

//     console.log( i , BolaStartsWith)


//     i++;
    
// }

//5. do while(since i = 0 there will be increment operator so you have to put 1++ so it wont crash)
// var i = 0; 

// do{

//     console.log( 2 + 2);
//     i++;


// } while(i == 4);


//6. do while loop

// const mylist = ["david ", 2, true, "school", ["me", "you"]]
// var i = 0;

// do{

//     console.log(mylist[i])
//     i++;

// //} while(i<mylist.length);


//7. for while loop

// const mylists = ["david ", 2, true,  "school", ["me", "you"]];


// for (let index = 0; index < mylists.length; index++) {
//     console.log(mylists[index])


    
// //8.functions

// function sumOfnum(){ 


     

//     console.log(2 + 5)

//     return 2+ 7;

// }

// const sumOfletters = () => {
//     console.log(2 + 5)

//     return 2+ 7;
// }


// console.log(sumOfletters())


// 12.Parameters ( parameters are the things to define values in a function)


// function sumOfnum(num1, num2){ 

//     data = num1 ** num2;

//     return data;
// }


// console.log(sumOfnum(12, 2))

//13. class

// class faculty {

    
//     faculty(dep = [], lec = [], stud = []){
        
//         const depts = dep;
//         const lecturers = lec;
//         const students = stud;
//         console.log("All lecturers in faculty are:")

//         for(let i = 0; i < lecturers.length ; i++ ){
//             console.log( "mr",lecturers[i], "from ",depts[i])
//         }










//     }


// }

// // you can't access an element of a class or funtion outside the class or the function

// // to access elements of another class, you have to create the instance of the class first

// const myfaculty = new faculty();

// myfaculty.faculty(["Agric", "Tech", "Science","Law"], ["Ade","sola", "dele", "Sayo"],["Bola", "Segun","David", "Femi"])




        
var popUpStatus = false;



function setstatus(id){
    var info = document.getElementById(id);

    if (popUpStatus){
        popUpStatus = false;
    }else {

        popUpStatus = true;
        
    }
    if (popUpStatus){
    info.style.display ="block";

}else{
    info.style.display ="none";

}
    

}



