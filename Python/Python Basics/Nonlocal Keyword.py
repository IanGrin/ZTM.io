# Scope - what variables do I have access to?\

def outer():
    x = "local"
    def inner():
        nonlocal x
        x = "nonlocal"
        print("inner:", x)
    
    inner()
    print("outer:", x)

outer()

#1 - start with local scope
#2 - is there a parent local scope?
#3 - Global 
#4 - built in python functions
