from unittest import result


result=""
for row in range(0,6):
    for column in range(0,6):
        if (((column==0 or column==5)and row==0)or ((row==0 or row==3)and (column>1 and column<5))):
            result=result+"*"
        else:
            result=result+""
    result+"\n"
print(result)