def block_friendly_method
  puts "Starting..."
  yield # how do connect with other methods? (like callbacks in JS)
  puts "Finished!"
end

block_friendly_method do
  puts "Hello from anon block!!!"
end

block_friendly_method do
  message = gets.chomp
  puts "message: #{message}"
end