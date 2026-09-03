function f1(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('F1 Function.');
        resolve();
        },4000);
    })

};


function f2(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('F2 Function.');
        resolve();
        },2000);
    })

};


f1().then(f2).catch((err)=>
    console.log("Error",err)
)








