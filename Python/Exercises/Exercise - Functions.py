# def highest_even(li):
#     evens = []
#     for item in li:
#         if item % 2 == 0:
#             evens.append(item)
#     return max(evens)

def highest_odd(li):
    odds = []
    for item in li:
        if item % 1 == 0:
            odds.append(item)
    return max(odds)

print(highest_odd([10, 2, 3, 4, 8, 11, 13]))