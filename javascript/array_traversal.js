const nums =[5,8,7,2,1,6];

for(let i=0; i < nums.length; i++) {
    console.log(nums[i]);
    
}
console.log('-----------------for of loop ---------------')

for (let n of nums){
    console.log(n);
    
}
nums.forEach((b,i,c) => {
    console.log(b,i,c);
    
})
for (let n of nums){
    if(n % 2=== 0) {
        console.log(n);
        
    }
    
}
for  (let n of nums){
    console.log(n**2);
    
}
const prices =[120,3400,500,200,780,700]
  for (let p of prices){
    if( p >=500){;
    console.log(p);
    } 
 };
 ??aplly 5% discount