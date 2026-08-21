// function sum(a,b){
//     return a+b;
// }
// function multiply(x,y){
//     return x*y;
// }
// console.log(multiply(sum(5,6),7));

// function sumWithMsg(clbk1,clbk2,msg){
//     const result=clbk1(clbk2(5,6),7);
//     const fresult='Hello'+msg+'Your score is: '+result;
//     console.log(fresult);

// }


// sumWithMsg(multiply,sum,', How are you ??');

function is_correct_password(actual_password,entered_password){
    if (actual_password==entered_password){
        console.log("Your Password is Correct✅.Now u can login !");
        return true;
    }
    else{
        return false;
    }
}

function login(clbk,act_pass,entered_pass){
    while(clbk(act_pass,entered_pass)!=true){
        console.log('INCORRECT PASSWORD ⚠️!! Try Again.');
    }
};

login(is_correct_password,'Hello123','Hello12');
