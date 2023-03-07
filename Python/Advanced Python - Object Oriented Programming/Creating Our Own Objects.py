# OOP

class PlayerCharacter:
    # Class Object Attribute
    membership = True
    def __init__(self, name='anonymous', age='0'):
        if (age > 18):
            self.name = name #attributes
            self.age = age

    def shout(self):
        print(f'My name is {self.name}')

    @classmethod
    def adding_things(cls, num1, num2):
        return cls('Teddy', num1 + num2)
    
    @staticmethod 
    def adding_things2(num1, num2):
        return num1 + num2

# player1 = PlayerCharacter('Tom', 10)
player3 = PlayerCharacter.adding_things(2, 3)

print(PlayerCharacter.adding_things(2, 3))
