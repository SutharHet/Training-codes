import random
import os

clear = lambda: os.system('clear')

suits = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
ranks = ('Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace')
values = {'Two':2, 'Three':3, 'Four':4, 'Five':5, 'Six':6, 'Seven':7, 'Eight':8, 'Nine':9, 'Ten':10, 'Jack':10, 'Queen':10, 'King':10, 'Ace':1}

class Card:
  def __init__(self,suits,rank):
      self.suits = suits
      self.rank = rank
      self.value = values[rank]

  def __str__(self) -> str:
      return self.rank + " of " + self.suits

class Deck:
  
  new_deck = []

  def __init__(self):
    for suit in suits:
      for rank in ranks:
        card = Card(suit,rank)
        self.new_deck.append(card)
  
  def shuffle(self):
    random.shuffle(self.new_deck)
  
  def first_card(self):
    return self.new_deck.pop(0)


def display(player_score,player_cards,dealer_cards,dealer_score,result=False):
  if not result:
    if dealer_score != 0 and player_score != 0:
      clear()
      print("Dealer Score : " + str(dealer_score - dealer_cards[0].value))
      print("dealer_Cards : ")
      print('\t 1 Card Hidden')
      for i in range(1,len(dealer_cards)):
        print("\t" + str(dealer_cards[i]) + " : " + str(dealer_cards[i].value))

      print("\nPlayer_Cards : ")
      for i in range(len(player_cards)):
        print("\t" + str(player_cards[i]) + " : " + str(player_cards[i].value))
      print("Player Score : " + str(player_score))
  else:
    clear()
    print('\nGame End\n')
    print("Dealer Score : " + str(dealer_score))
    print("dealer_Cards : ")
    for i in range(len(dealer_cards)):
      print("\t" + str(dealer_cards[i]) + " : " + str(dealer_cards[i].value))
    
    print("\n")

    print("Player_Cards : ")
    for i in range(len(player_cards)):
      print("\t" + str(player_cards[i]) + " : " + str(player_cards[i].value))
    print("Player Score : " + str(player_score))

def dealer_hit(player_score,player_cards, dealer_cards, dealer_score, deck):
  while dealer_score <= 17:
    card = deck.first_card()
    dealer_cards.append(card)
    dealer_score += card.value
    display(player_score,player_cards,dealer_cards,dealer_score)
    print('\nDealer Hit')
    input()
    player_input(player_score,player_cards,dealer_cards,dealer_score, deck)

def who_won(player_score,player_cards, dealer_cards, dealer_score, deck):
  if len(player_cards) >= 2 and len(dealer_cards) >= 2:
    if player_score > 21:
      display(player_score,player_cards,dealer_cards,dealer_score,True)
      print('\nBUST!!!')
      quit()
    elif player_score > 21:
      display(player_score,player_cards,dealer_cards,dealer_score,True)
      print('\nDealer BUST!!!')
      quit()
    elif player_score == 21 and dealer_score >= 17:
      display(player_score,player_cards,dealer_cards,dealer_score,True)
      print('\nPlayer is BLACKJACK!!!')
      quit()
    elif player_score < dealer_score and dealer_score >= 17:
      display(player_score,player_cards,dealer_cards,dealer_score,True)
      print('\nBUST')
      quit()

def player_input(player_score,player_cards, dealer_cards, dealer_score, deck):
  while player_score < 21:
    choice = input('\nEnter H for Hit and S for Stand : ').upper()

    # if choice != "H" or choice != "S":
    #   print('Invalid Input')
    if choice == "H":
      card = deck.first_card()
      player_cards.append(card)
      player_score += card.value
      display(player_score,player_cards,dealer_cards,dealer_score)
      print('\nPlayer Chose Hit')
      input()
      dealer_hit(player_score,player_cards,dealer_cards,dealer_score, deck)

    elif choice == "S":
      print('Player chose Stand')
      input()
      dealer_hit(player_score,player_cards,dealer_cards,dealer_score, deck)
      break
  else:
    if dealer_score <= 17:
      dealer_hit(player_score,player_cards,dealer_cards,dealer_score, deck)
    who_won(player_score,player_cards, dealer_cards, dealer_score, deck)

def blackjack():

  player_cards = []
  dealer_cards = []

  player_score = 0
  dealer_score = 0

  deck = Deck()
  deck.shuffle()

  while len(player_cards) < 2:

    card = deck.first_card()
    player_cards.append(card)
    player_score += card.value

    card = deck.first_card()
    dealer_cards.append(card)
    dealer_score += card.value

    display(player_score,player_cards,dealer_cards,dealer_score,'First Turn')
    input()
  
  who_won(player_score,player_cards, dealer_cards, dealer_score, deck)
  player_input(player_score,player_cards, dealer_cards, dealer_score, deck)
  
  

blackjack()