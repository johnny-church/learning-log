##import random
##number = random.randint(1, 100)
##print(number)
## t1
##name = input("Enter student name: ").strip()
##while not name.replace(" ", "").isalpha():
 ##print("Invalid name. Please enter letters only.")
##name = input("Enter student name: ").strip()
##marks = float(input("Enter marks: "))
##if marks >= 80:
## grade = "A"
##elif marks >= 70:
 ##grade = "B"
##elif marks >= 60:
 ##grade = "C"
##elif marks >= 50:
 ##grade = "D"
##else:
## grade = "F"
##print("Student:", name)
##print("Marks:", marks)
##print("Grade:", grade)}
##t2

name = input("Enter student name: ")
mark1 = float(input("Enter mark 1: "))
mark2 = float(input("Enter mark 2: "))
mark3 = float(input("Enter mark 3: "))
average = (mark1 + mark2 + mark3) / 3
print(f"\nStudent: {name}")
print(f"Average: {average:.2f}")
if average >= 70:
 print("Grade: A")
elif average >= 60:
 print("Grade: B")
elif average >= 50:
 print("Grade: C")
else:
 print("Grade: Fail")