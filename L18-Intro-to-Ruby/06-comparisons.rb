# In JavaScript we have "==" "==="
# true == 1

p "-- BOOLEANS --"
p true == true
p true == false
p "true" == true

p "-- NUMBERS --"
p 3 == 3
p "3" == 3
p 3 == 3.00

p "-- OPERATORS --"
p 3 + 5
# we are actually doing something like this -> p 3.+(5)
# p 3.methods

p "-- INPUT FROM USER --"
user_input = gets.chomp.to_i
p user_input

p "-- IF STATEMENTS --"

if user_input > 10
  puts "number is bigger than 10"
elsif user_input < 5
  puts "number is less than 5"
else
  puts "num is between 5 and 10"
end

puts "This is a huge number!!!" if user_input > 100

snowing = false
puts "Put away the shovel and enjoy the sun!" unless snowing

p "-- SWITCH CASES --"

message_type = "goodbye"

case message_type
  when "hello"
    puts "Greetings!"
  when "goodbye"
    puts "See you later!"
  else
    puts "Invalid message type :/"
end