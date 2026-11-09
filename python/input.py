try:
    name = str(input("Enter your name: "))
except:
    print("Enter a valid name")

try:
    age = int(input("Enter your age: "))
except:
    print("Enter a number")

you = name + " is " + str(age)+" years old"

print(you)