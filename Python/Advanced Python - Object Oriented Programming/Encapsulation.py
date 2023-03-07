class PlayerCharacter:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # def run(self):
    #     print('run')

    # def speak(self):
    #     print(f'my name is {self.name}, and I am {self.age}')

player1 = PlayerCharacter('Ian', 100)
print(player1.name)
print(player1.age)

player2 = {'name': 'Ian', 'age': 100 }
print(player2['name'])
print(player2['age'])