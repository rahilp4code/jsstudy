def twoSum( nums, target) :
    adict = { }
    for index,val in enumerate(nums):
        rem = target-val
        if rem in adict.keys():
            return [adict[rem],index]
        adict[val] = index

a = [2,7,3,15]
# a = [3,3]
print(twoSum(a,9))
# print(twoSum(a,6))
