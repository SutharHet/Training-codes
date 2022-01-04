def dec_to_bin():
  while True:
    try:
      val = int(input('Enter Decimal Value : '))
      print('{} to Binary is {}'.format(val,bin(val)))
      break
    except:
      print('Invalid Input! Please Enter Decimal')
  quit()

def bin_to_dec():
  while True:
    try:
      val = input('Enter Binary Value : ')
      print('{} to Binary is {}'.format(val,int(val,2)))
      break
    except:
      print('Invalid Input! Please Enter Binary')
  quit()


while True:
  try:
    choice = int(input('Choose optins(1/2) \n\t1. Binary to Decimal \t 2 .Decimal to Binary : '))
    if choice in [1,2]:
      if choice == 1:
        bin_to_dec()
      else:
        dec_to_bin()
    break
  except:
    print('Invalid Choice')