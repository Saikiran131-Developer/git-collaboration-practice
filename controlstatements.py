#1
num=1
while num<=100:
    print(num)
    num+=1
#2.1
for i in range (100,0,-1):
    print(i)
#2.2    
num1=100
while num1>=1:
    print(num1)
    num1-=1

#3
i=1234
rev=0
while(i>0):
    rev=(rev*10)+i%10
    i=i//10
print(rev)
