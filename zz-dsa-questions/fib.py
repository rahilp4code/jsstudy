# This is my mentor's python file in which he explained 

def twoSum( nums, target) :
    adict = { }
    for index,val in enumerate(nums):
        rem = target-val
        if rem in adict.keys():
            return [adict[rem],index]
        adict[val] = index

def palindrome(string,length=''):
    if len(string)<=0:
        print(length,'hi')
        return length + string
    elif string[0] != string[-1]:
        return length + string
    else:
        length = length + string
        return palindrome(string[1:-1],length)
a = {}
string = 'bab'
for i in range(len(string)):
    print(string[:i])
    s = palindrome(string[:i])
    print(s)  


