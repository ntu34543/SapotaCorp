n = int(input('Enter the number: '))
arr=[]
def inputNumber():
    for i in range(n):
        nn=int(input('Enter the number '+str(i+1)+': '))
        arr.append(nn)
    return print(arr)

# def min(a):
#     min = a[0]
#     for i in a:
#         if i < min:
#             min = i
#     return print(min)

def singleInteger(a):
    s = map(str,a)
    s= "".join(s)
    s = int(s)
    return print(s)

inputNumber()
singleInteger(arr)
# min(arr)