# Counter

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in my_list:
    total = sum(my_list)

print(total)

# Andrei's Answer

counter = 0
for item in my_list:
    counter = counter + item

print(counter)