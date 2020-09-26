puts "Enter the max number of students in a group"
max_students = gets.chomp
max_students = max_students.to_i
puts "Enter the number of students in the class"
tot_students = gets.chomp
tot_students = tot_students.to_i
result = tot_students/max_students
puts "the number of students in each group is #{result}"