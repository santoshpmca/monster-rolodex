
var pr = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello timer'), 2500);
});

pr.then((val) => console.log(val));