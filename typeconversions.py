num1=56
print(int(num1))
print(type(num1)) #true
num1 =56
print(float(num1)) #true #6.0
num1 = 5+6j
print(num1)
print(type(num1)) #complex
print(bool(num1)) #true
print(str(num1))
num1= 38
 #print(list(num1))# error object is not iterable
#print(tuple(num1))
print(range(num1))
 #print(set(num1))# error
#print(dict(num1)) #error


#float conversions
num1 = 13.6589
print(type(num1)) #float
print(int(num1))
print(float(num1))
print(complex(num1))
print(bool(num1))
print(str(num1))
#print(list(num1)) error
#print(tuple(num1)) error
 #print(range(num1)) error
#print(set(num1)) error
#print(dict(num1)) error


#complex conversions
num1 = 6+8j
print(type(num1)) #complex
#print(int(num1)) #error
 #print(float(num1))
print(complex(num1))
print(bool(num1))
print(str(num1))
#print(list(num1)) error
 #print(tuple(num1)) error
#print(range(num1))error
#print(list(num1))error
#print(dict(num1)) error



#booleans

password = 7890
print(password == 7890)
print(type(password == 7890)) #class bool
print(int(password == 7890))
print(float(password ==7890))
print(complex(password == 7890))
print(bool(password == 8530))
print(bool(password == 7890))
print(str(password == 7890))
 #print(list(password == 7890)) error
 #print(tuple(password == 5640)) error
print(range(password == 7890))
 #print(set(password == 7890))error
 #print(dict(password ==7850))error


#string conversions
hello = "good morning"
print(type(hello))
 #print(int(hello)) error
 #print(float(hello)) error
#print(complex(hello))error
print(bool(hello))
print(str(hello))
print(list(hello))
print(tuple(hello))
 #print(range(hello)) error
print(set(hello))
 #print(dict(hello)) error



 #list conversions
list1 = [1, 2, 3, "strings", True, [1, 2, 3.5698]]
print(type(list1)) #list
print(list1)
 #error print(int(list1 ))
#print(float(list1)) error
 #print(complex(list1)) error
print(bool(list1))
print(str(list1))
print(list(list1))
print(tuple(list1))
 #print(range(list1)) error
#print(set(list1))error
 #print(dict(list1)) error


 #tuple conversions
tuple1 =[1, 2, 3, "animals"]
#print(int(tuple1)) error
 #print(float(tuple1)) error
 #print(complex(tuple1)) error
print(bool(tuple1))
print(list(tuple1))
print(tuple(tuple1))
print(str(tuple1))
 #print(range(tuple1)) error
print(set(tuple1))
#print(dict(tuple1))error


#range conversions
for i in range(0 ,5):
             print(i)
for j in range(1, 10):
             print(j)
             #print(int(range(1, 10))) error
              #print(float(range(1, 100))) error
#print(complex(range(1, 15))) error
print(bool(range(1, 15)))
print(str(range(1, 15)))
print(list(range(1, 100)))
print(tuple(range(1, 100)))
 #print(range(range( 0, 10))) error
print(set(range(1, 10)))
 #print(dict(range(1, 100))) 
 


 #set conversions
set1= { 1, 2, 3, 5.0, "animals"}
print(type(set1)) #set
#print(int(set1)) #error
 #print(float(set1)) error
 #print(complex(set1)) error
print(bool(set1))
print(str(set1))
print(list(set1))
print(tuple(set1))
 #print(range(set1)) error
 #print(dict(set1)) error
print(set(set1))


#dict conversions
dict1 = {1:"one", 2:"two", 3: "three",}
print(dict1)
print(type(dict1)) #dict class
 #print(int(dict1)) error
 #print(float(dict1)) error
 #print(complex(dict1)) error
print(bool(dict1))
print(str(dict1))
print(list(dict1))
 #print(range(dict1)) error
print(set(dict1))
print(dict(dict1))
