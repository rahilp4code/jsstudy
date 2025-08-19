let nums = [1, 2, 3, 4];

for (i = 0; i < nums.length; i++) {
    let swap = false;
    for (j = 0; j < ((nums.length) - 1); j++) {
        if (nums[j] > nums[j + 1]) {
            let helper = nums[j]
            nums[j] = nums[j + 1]
            nums[j + 1] = helper
            swap = true
        }
    }
    if (swap == false) {
        break
    }

}
console.log(nums)