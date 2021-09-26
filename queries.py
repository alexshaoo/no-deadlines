file = open("courses.txt", 'r')

to_list = lambda s : s.split("\n")

print(to_list(file.read()))