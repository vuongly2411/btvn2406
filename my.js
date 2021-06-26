let arr = new Array();
//let arrSum = new Array();
let sum=0;
for (let i=0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 21));
    sum += arr[i];

}
document.write("<h3>Dãy là: " + arr + " </h3>");

arr.sort(function(a,b) { // sort tăng dần
    return a-b; 
});

// let max = arr[1] + arr[2] + arr[3] + arr[4];
// let min = arr[0] + arr[1] + arr[2] + arr[3];

//document.write("Max: " + max + " Min: " + min);

document.write("Max: " + (sum - arr[0]) + "<br>");
document.write("Min: " + (sum - arr[arr.length-1]));




// arrSum = sumOf4Number(arr, arrSum);
// //console.log(sumOf4Number(arr, arrSum));
// document.write("<h3>Max: " + findMax(arrSum) + "</h3>");

// function sumArray(arr) {
//     let sum=0;
//     for (let i=0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function sumOf4Number(arr, arrSum) {
//     let sum = sumArray(arr);
//     for (let i=0; i < arr.length; i++) {
//         arrSum.push(sum - arr[i]);
//     }
//     return arrSum;
// }

// function findMax(a) {
//     let max = a[0];
//     for (let i=1; i <= a.length; i++) {
//         if (max < a[i]) max = a[i];
//     }
//     return max;
// }