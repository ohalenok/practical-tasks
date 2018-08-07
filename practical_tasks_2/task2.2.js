console.log(`1 step`);
console.log(`2 step`);

let p1 = new Promise((resolve, reject) =>
setTimeout(() => {
    console.log(`3 step`);
    resolve(`ready`);
}, 4000));
/*
p1.then(() => {
    console.log(`4 step`);
});
*/
async function test(promise){
    let s1 = await promise;
        console.log(`4 step`);
        console.log(s1);

        return `It is function`;
}

async function func(){
    let f1 = await test(p1);
    console.log(`----------`);
    console.log(f1);
}

func();
