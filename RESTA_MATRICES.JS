var a = [[1,2,3],[4,5,6],[7,8,9]];
var b = [[-1,22,-3],[34,75,66],[-777,-888,900]];
var c = [[0,0,0],[0,0,0],[0,0,0]];  
console.log(a);
console.log(b);
for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
   c[i][j] = a[i][j] - b[i][j];
   }
}
console.log(c);
