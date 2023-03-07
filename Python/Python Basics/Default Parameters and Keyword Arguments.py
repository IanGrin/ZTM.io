# Parameters
# Default Parameters

def say_hello(name = 'Darth Vader', emoji = '😈'):
    print(f'hello {name}{emoji}')

# Positional Arguments
say_hello('Ian ', '😐')
say_hello('John ', '😐')
say_hello('Jane ', '😐')

# Keyword Arguments
say_hello(name = 'Bibi', emoji = '😐')
say_hello()