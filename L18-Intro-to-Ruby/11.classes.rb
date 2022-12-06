class Dog
  # this stablishes GETTERS
  # attr_reader :name, :type

  # this stablishes SETTERS
  # attr_writer :name, :type

  # this stablishes GETTERS AND SETTERS
  attr_accessor :name, :type

  def initialize name, type
    # Instance variables
    # this.name = name...
    @name = name
    @type = type
    puts bark
  end

  # Everything above is PUBLIC
  # Whatever is below this line, is now only accesible by the class itself
  private

  def bark
    "My name is #{@name} and i'm barking!!"
  end

end

my_pet = Dog.new "Nina", "Perro Salchicha"

puts my_pet.name
puts my_pet.type = "Weiner Dog"
puts my_pet.bark