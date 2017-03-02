def fav_foods
	food_array = []
	3.times do
		puts "Name a favourite food"
		food_array << gets.chomp
		# OR food_array.push(gets.chomp)
	end
	puts "Your favourite foods are #{food_array.join(", ")}."
	food_array.each do |food|
		puts "I like #{food} too!"
	end
end

fav_foods

