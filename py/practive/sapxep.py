# insertion_sort
def insertion_sort(list1):
    for i in range(1, len(list1)):
        value = list1[i]
        j = i - 1
        print(value,"_")
        print(list1[j],"__")
        while j >= 0 and value < list1[j]:
            print(list1[j],"___") #0
            list1[j + 1] = list1[j]
            print(list1[j + 1],"___") #-1
            print(list1[j],"___") #-1
            j = j -1
            print(list1[j],"j chua tru")
            print(list1[j - 1],"___") #-2
        list1[j + 1] = value
        print(list1[j + 1],"____")
    return list1

list1 = [10, 5, 13, 9, 2]
print("Danh sách đã sắp xếp là:", insertion_sort(list1))


# selection_sort
def selection_sort(array):
    length = len(array)
    for i in range(length-1):
        minIndex = i
        for j in range(i+1, length):
            if array[j] < array[minIndex]:
                minIndex = j
        array[i], array[minIndex] = array[minIndex], array[i]
    return array
array = [21, 6, 9, 33, 3]
print("Danh sách đã sắp xếp là: ", selection_sort(array))

# quickSort
def quicksort(x):
    if len(x) == 1 or len(x) == 0:
        return x
    else:
        pivot = x[0]
        i = 0
        for j in range(len(x)-1):
            if x[j+1] < pivot:
                x[j+1],x[i+1] = x[i+1], x[j+1]
                i += 1
        x[0],x[i] = x[i],x[0]
        first_part = quicksort(x[:i])
        second_part = quicksort(x[i+1:])
        first_part.append(x[i])
        return first_part + second_part

alist = [54,26,93,17,77,31,44,55,20]
print(quicksort(alist))

# Merge Sort
def merge_lists(left_sublist,right_sublist):
	i,j = 0,0
	result = []
	while i<len(left_sublist) and j<len(right_sublist):
		# nếu giá trị bên trái thấp hơn bên phải thì nối giá trị đó vào kết quả
		if left_sublist[i] <= right_sublist[j]:
			result.append(left_sublist[i])
			i += 1
		else:
			#nếu giá trị bên phải thấp hơn bên trái thì nối nó vào kết quả
			result.append(right_sublist[j])
			j += 1
	#nối phần còn lại của danh sách con bên trái và bên phải
	result += left_sublist[i:]
	result += right_sublist[j:]
	#Kết quả
	return result

def merge_sort(input_list):
	#nếu danh sách chỉ chứa 1 phần tử, hãy trả về nó
	if len(input_list) <= 1:
		return input_list
	else:
		#chia danh sách thành hai danh sách con và tách danh sách con một cách đệ quy
		midpoint = int(len(input_list)/2)
		left_sublist = merge_sort(input_list[:midpoint])
		right_sublist = merge_sort(input_list[midpoint:])
		#trả lại danh sách đã hợp nhất bằng cách sử dụng hàm merge_list ở trên
		return merge_lists(left_sublist,right_sublist)

number_list = [3,1,5,3,2,5,8,2,9,6,12,53,75,22,83,123,12123]
print(merge_sort(number_list))

# Heap Sort
def heapify(arr, n, i): 
    largest = i 
    l = 2 * i + 1     # trái = 2*i + 1 
    r = 2 * i + 2     # phải = 2*i + 2 
  
    # Xem liệu con bên trái của root có tồn tại và lớn hơn root hay không
    if l < n and arr[i] < arr[l]: 
        largest = l 
  
    # Xem liệu con bên phải của root có tồn tại và lớn hơn root hay không
    if r < n and arr[largest] < arr[r]: 
        largest = r 
  
    if largest != i: 
        arr[i],arr[largest] = arr[largest],arr[i]
        heapify(arr, n, largest) 
  
# The main function to sort an array of given size 
def heapSort(arr): 
    n = len(arr) 
    for i in range(n, -1, -1): 
        heapify(arr, n, i) 
    for i in range(n-1, 0, -1): 
        arr[i], arr[0] = arr[0], arr[i]   # swap 
        heapify(arr, i, 0) 
arr = [ 12, 11, 13, 5, 6, 7] 
heapSort(arr) 
n = len(arr) 
print ("Sorted array is") 
for i in range(n): 
    print ("%d" %arr[i])