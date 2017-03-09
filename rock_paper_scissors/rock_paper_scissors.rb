selections = ["rock", "paper", "scissors"]
$scores = {"You" => 0,
					"Computer" => 0}

def check_yes_or_no(answer)
	while answer != "yes" && answer != "no" do
		check_quit_score_or_rules(answer)
		puts "Try again. Please type 'yes' or 'no'"
		answer = gets.chomp.downcase
	end
	return answer
end

def check_selection(selection)
	while selection != "rock" && selection != "paper" && selection != "scissors"
		check_quit_score_or_rules(selection)
		puts "Sorry, your answer was not a valid move. Rock, Paper, or Scissors?"
		selection = gets.chomp.downcase
	end
	return selection
end

def check_winner(user_selection, comp_selection)
	if user_selection == comp_selection
		puts "It's a draw!"
	elsif user_selection == "rock"
		if comp_selection == "paper"
			puts "You LOSE!"
			$scores["Computer"] += 1
		elsif comp_selection == "scissors"
			puts "You WIN!"
			$scores["You"] += 1
		end
	elsif user_selection == "paper"
		if comp_selection == "scissors"
			puts "You LOSE!"
			$scores["Computer"] += 1
		elsif comp_selection == "rock"
			puts "You WIN!"
			$scores["You"] += 1
		end
	elsif user_selection == "scissors"
		if comp_selection == "rock"
			puts "You LOSE!"
			$scores["Computer"] += 1
		elsif comp_selection == "paper"
			puts "You WIN!"
			$scores["You"] += 1
		end
	end
end

def check_quit_score_or_rules(entry)
	if entry == "quit"
		exit
	elsif entry == "help"
		rules
		puts
	elsif entry == "score"
		puts
		puts "You: #{$scores["You"]}"
		puts "Computer: #{$scores["Computer"]}"
		puts
	end
end

def rules()
	puts
	puts "Ok, it's quite simple. All you have to do is select your weapon: Rock, Paper, or Scissors."
	puts "Then, the battle begins. You face a computer that is choosing from the same weapons."
	puts "Rock beats Scissors"
	puts "Scissors beats Paper."
	puts "Paper beats Rock (don't ask!)."
	puts "And that's it. It's really that simple!"
end

puts
puts "Welcome to this new and wonderful game of Rock, Paper, Scissors!"
puts "What shall I call you?"
name = gets.chomp
puts
puts "Hey #{name}! Let's play!"
puts "Would you like to see the rules before we start? (yes/no)"
rules = gets.chomp.downcase
check_yes_or_no(rules)

if rules == "yes" then
	rules()
end

puts
puts "Ok, so let's play. Type 'help' if you ever need to see the rules."
puts "Type 'quit' if you want to stop playing."
puts "Type 'score' if you want to see your score."
puts
playing = true
while playing do
	puts "Choose Rock, Paper or Scissors (by typing whichever you choose):"
	user_selection = gets.chomp.downcase
	user_selection = check_selection(user_selection)
	comp_selection = selections[rand(3)]
	puts
	puts "You chose #{user_selection}, the computer chose #{comp_selection}."
	check_winner(user_selection, comp_selection)
	puts
	puts "Would you like to play again?"
	answer = gets.chomp.downcase
	answer = check_yes_or_no(answer)
	if answer == "no"
		playing = false
	end
end