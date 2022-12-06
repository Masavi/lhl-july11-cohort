=begin
  In JavaScript we have...
  1) for (iterator; condition; iteration)
  2) for (item of iterable)
  3) for (item in iterable)
  4) while... something
=end

# Ruby Loop
iterator_loop_count = 0;

loop do
  puts "Current LOOP iteration: #{iterator_loop_count}"
  iterator_loop_count += 1
  break if iterator_loop_count > 10
end

another_iterator = 0;

# While Loop
while another_iterator < 10 do
  puts "Current WHILE iteration: #{another_iterator}"
  another_iterator += 2
end

# Array Loop
animals = ["Dog", "Cat", "Crocodile", "Bird", "Beaver"]

animals.each do |animal|
  puts "#{animal}"
end

animals.each_with_index do |animal, index|
  puts "#{index}: #{animal}"
end

# How do i run a block of code 50 times?
50.times do
  puts "I'm running!"
end

# Number ranges (INCLUSIVE)
(30..40).each do |number|
  puts ("I'm inside the range!!! #{number}")
end

# Number ranges (EXCLUSIVE)
(30...40).each do |number|
  puts ("I'm inside the range!!! #{number}")
end