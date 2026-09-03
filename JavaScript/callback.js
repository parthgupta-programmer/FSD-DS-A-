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

// function is_correct_password(actual_password,entered_password){
//     if (actual_password==entered_password){
//         console.log("Your Password is Correct✅.Now u can login !");
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function login(clbk,act_pass,entered_pass){
//     while(clbk(act_pass,entered_pass)!=true){
//         console.log('INCORRECT PASSWORD ⚠️!! Try Again.');
//     }
// };

// login(is_correct_password,'Hello123','Hello12');


function test1(cb){
    setTimeout(()=>{
        console.log('Test1 is done.');
        cb();
    }, 4000);
}

function test2(cb){
    setTimeout(()=>{
        console.log('Test2 is done.');
        cb();
    }, 2000);
}

function test3(){
    setTimeout(()=>{
        console.log('Task3 is done.'),
        cb();
    },200)
}

function test4(){
    setTimeout(()=>{
        console.log('Task4 is done.'),
        cb();
    },100)
}

function test5(){
    setTimeout(()=>{
        console.log('Task4 is done.'),
        cb();
    },500)
}

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4(()=>{
                test5()
            })
        });
    })
});