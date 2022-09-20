# Bài toán tính n giai thừa
# Định nghĩa giai thừa: giai thừa của 1 số là tích các số liên tiếp từ 1 đến số đó. 
# Trường hợp đặc biệt, giai thừa của 0 và 1 là 1.
# Ví dụ, n = 8 thì kết quả đầu ra phải là 1*2*3*4*5*6*7*8 = 40320.

n = int(input("Nhập số cần tính giai thừa: "))
 
def giaiThua(n):
    if n == 0:
        return 1
    return n * giaiThua(n - 1)
 
print (giaiThua(n))

# Bài toán dãy số Fibonacci
# Quy luật của dãy số Fibonacci: số tiếp theo bằng tổng của 2 số trước, 
# 2 số đầu tiên của dãy số là 0, 1. Ví dụ: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

def fibonacci(n):
    if (n < 0):
        return -1
    elif (n == 0 or n == 1):
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
 
print("10 số đầu tiên của dãy số fibonacci: ")
sb = ""
for i in range(0, 10):
    sb = sb + str(fibonacci(i)) + ", "
print(sb)