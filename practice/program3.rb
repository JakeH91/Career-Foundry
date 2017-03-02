def choose
	puts "Do you like programming? Yes, no or maybe please"
	choice = gets.chomp.downcase
	case choice
	when "yes"
		puts "Awesome! It\'s fun, right?"
	when "no"
		puts "Then why are you taking this course?"
	when "maybe"
		puts "Glad you\'re giving it a chance, at least."
	else
		puts "I have no idea what you\'re trying to say to me."
	end
end

choose