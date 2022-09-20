# n = int(input("Nhap n: "))
# list=[]
# for i in range(n):
#     n = int(input("Nhap phan tu so " + str(i+1) + " : "))
#     list.append(n)
# print(list)

# def soNguyenTo(addsa):
#     newlist = []
#     for i in range(len(addsa)):
#         n = list[i]
#         count = 0
#         for i in range(1,n+1):
#             if n % i == 0:
#                 count += 1
#         if count == 2:
#             newlist.append(n)
#     return print(newlist)
# soNguyenTo(list)

# list = [2,5,7,1,6,8,9]

# def sap_xep(list):
#     for i in range(0,len(list)-1):
#         for j in range(i+1,len(list)):
#              if list[i]>list[j]:
#                 trunggian=list[i]
#                 list[i]=list[j]
#                 list[j]=trunggian
#                 print(list)*m
#     return print(list)
           
    
# sap_xep(list)
# str1 = "abcd"
# str2 = "xyz"
# for i in range(len(str1)):
#     a = i
# print(a)

# print("1: Khối trụ")
# print("2: Khối lăng trụ")
# chon = int(input("Chon khoi ban muon tinh: "))
# if chon == 1:
#     n = int(input("Nhập bán kính: "))
#     m = int(input("Nhập chiều cao: "))
#     def tt_KT(r,h):
#         pi = 3.14
#         V = pi*r**2*h
#         return print(V)
#     tt_KT(n,m)
# else:
#     n = int(input("Nhập diện tích đáy: "))
#     m = int(input("Nhập chiều cao: "))
#     def tt_KLT(B,h):
#         V = B*h
#         return print(V)
#     tt_KLT(n,m)

# str1 = "abcd"
# str2 = "xyz"
# j = 0
# i = len(str2)-1
# while (j <= len(str1) and (i >= 0)):
#     print(str1[j] + str2[i],end="")
#     j += 1
#     i -= 1

# list = [1,2,3]
# var = ''
# for i in list:
#     var += str(i)
# print(var)

list = [11, 18, 19, 45, 67, 78]

n = int(input("Nhap do dai muon cat: "))

length = len(list)

middle_index = length // n

first_half = list[middle_index:]
second_half = list[:middle_index]

print(first_half)
print(second_half)