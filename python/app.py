# Tax Calculator - Asks the user to enter a cost and either a country or state tax. It then returns the tax plus the total cost with tax.

def country_tax(cost,tax):
  tax = tax/100
  return cost*tax

def total_cost(cost,tax):
  tax = country_tax(cost,tax)
  cost = cost + tax
  print('Total cost is '+str(cost)+'$ including tax '+str(tax)+'$')

cost = int(input('Enter cost : '))
tax = int(input('Enter country or state cost in % : '))
total_cost(cost,tax)