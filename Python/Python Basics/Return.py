def sum(num1, num2):
    return num1 + num2

total = sum(4, 5)
print(sum(10, total))

# Should do one thing really well.
# Should return something

# [1, 2, 3].clear()

def sum(num1, num2):
    def another_func(n1, n2):
        return n1 + n2
    return another_func(num1, num2)
# return exits the fucntion

total = sum(10, 20)
print(total)