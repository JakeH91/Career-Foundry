class Pet
	attr_reader :colour, :breed
	attr_accessor :name
	
	def initialize(colour, breed)
		@colour = colour
		@breed = breed
		@hungry = true
	end
	
	def feed(food)
		puts "Mmmmm, " + food + "!"
		@hungry = false
	end
	
	def hungry?
		if @hungry
			puts "I'm hungry"
		else
			puts "I'm full"
		end
		@hungry
	end

end

class Cat < Pet
	def speak
		puts "Meow!"
	end
end

class Dog < Pet
	def speak
		puts "Woof!"
	end
end

kitty = Cat.new("grey", "Persian")
doggo = Dog.new("black", "Labrodor")


puts "Let's inspect our new cat:"
puts kitty.inspect
puts "What class does our cat belong to?"
puts kitty.class
puts "Is our new cat an object?"
puts kitty.is_a?(Object)
puts "What colour is our cat?"
puts kitty.colour
puts "Let's give our cat a name"
kitty.name = gets.chomp
puts "The cats name is now " + kitty.name
puts "Is " + kitty.name + " hungry?"
kitty.hungry?
puts "Let's feed " + kitty.name
kitty.feed("tuna")
puts "Is " + kitty.name + " hungry?"
kitty.hungry?
puts kitty.name + " can make noise"
kitty.speak
puts
puts "And what about our dog as well? What's his name?"
doggo.name = gets.chomp
puts "Hey " + doggo.name + "!"
puts "Are YOU hungry too?"
doggo.hungry?
puts "Well then, let's get you fed!"
doggo.feed("bones")
puts "Still hungry?"
doggo.hungry?
puts "Perfect :)"
doggo.speak
