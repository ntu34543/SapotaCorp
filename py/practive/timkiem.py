# Tìm kiếm tuyến tính dùng vòng while
def linear_search(list,n):
    i = 0
    while i < len(list):
        if list[i] == int(n):
            globals()['pos'] = i
            return True
        i = i + 1
    return False

pos = -1

list = [21,33,45,9,24,9,34,7,88,96,54,35,66,77]

n =input("Input The Number You Searching For = ")

if linear_search(list,int(n)):
    print("The Number Is Found At: ", pos+1)
else:
    print("Not Found")

# Tìm kiếm tuyến tính dùng vòng for
def linear_search(list,n):
    i = 0
    for i in range(len(list)):
        if list[i] == int(n):
            globals()['pos'] = i
            return True
    return False

pos = -1

list = [21,33,45,9,24,9,34,7,88,96,54,35,66,77]

n =input("Input The Number You Searching For = ")

if linear_search(list,int(n)):
    print("The Number Is Found At: ", pos+1)
else:
    print("Not Found")


