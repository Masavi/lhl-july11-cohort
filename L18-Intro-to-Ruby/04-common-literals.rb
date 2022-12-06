=begin

  Primitive Values in JavaScript
  - String
  - Symbol
  - Boolean
  - Number (NaN)
  - Null
  - Undefined

  Common Literals in Ruby
  - String
  - Boolean (TrueClass, FalseClass)
  - Symbol (MUCH MORE used in Ruby!!!)
  - Number
    * Integer
    * Float
  - nil

=end

puts "6 is an:"
puts 6.class

puts "3.14 is a:"
puts 3.14.class

puts "This is a Ruby expression -> #{3.14.class}"
# in JS -> ${3+4 console.log(something...)}

puts "Hello, World is a:"
puts "Hello, World".class

puts "true is a:"
puts true.class

puts "false is a:"
puts false.class

puts "nil is a:"
puts nil.class

puts ":this_is_my_symbol is a:"
puts :this_is_my_symbol.class

# EVERYTHING in Ruby belongs to classes
puts String.methods