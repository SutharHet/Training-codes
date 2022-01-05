import math

def e_with_precision(n):
  return '%.*f' % (n, math.e)

if __name__ == '__main__':
  correct_input = False
  while True:
      print('Precision must be between 1 and 20')
      precision = int(input('Number of decimal places: '))
      if precision > 0 and precision < 20:
        print(e_with_precision(precision))
        break