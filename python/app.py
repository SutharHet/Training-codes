def through_recusion(num):
  if num == 0:
    return 1
  return num*through_recusion(num-1)

def through_loop(num):
  ans = 1
  for n in range(1,num+1):
    ans *= n
  return ans

def choice(num):
  ans = 0
  while True:
    try:
      user_choice = int(input('choose\n\t1.Through Recursion\t2.Through Loop : '))
      if user_choice in [1,2]:
        if user_choice == 1:
          ans = through_recusion(num)
          break
        else:
          ans = through_loop(num)
          break
      else:
        print('Invalid NUmber')
    except:
      print('Invalid Input! Enter a Number')
  
  print('Factorial of {} is {}'.format(num,ans))


while True:
  try:
    num = int(input('Enter num for factorial : '))
    choice(num)
    break
  except:
    print('Invlid Input')