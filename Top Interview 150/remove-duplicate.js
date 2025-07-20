var removeDuplicates = function(nums) {
    
   let position = 0;
    let checker = 1;
    let k = 1;  


    for(let counter = 1; counter < nums.length; counter++) {

        // If the elements are unique 
        if(nums[position] != nums[counter]) {

            nums[position + 1] = nums[counter];
            position++;
            k++;
        } 
    }

    return k;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums);
console.log("k =", k);
console.log("Updated nums =", nums.slice(0, k));
