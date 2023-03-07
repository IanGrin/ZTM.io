# Scope - what variables do I have access to?\

a = 1

def parent():
    def confusion():
        return sum
    return confusion()
    

print(parent())
print(a)

#1 - start with local (vari - a is a local scope)
#2 - is there a parent local scope? (a = 10)
#3 - Global (a = 1)
#4 - built in python functions
