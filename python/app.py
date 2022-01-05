class Inventory:
  def __init__(self):
    pass
  products = []
  def list_inventory(self):
    print()
    print('Product name : quantity')
    for product in self.products:
      print(product['name'] + " : "+ str(product['quantity']))
  
  def add_product(self,product_dict):
    self.products.append(product_dict)

  def total_products(self):
    total = 0
    for product in self.products:
      total +=  product['quantity']
    print('Total number of product is : ' + str(total))

inventory = Inventory()


class Product():
  def __init__(self,name,price,id,quantity):
    self.name = name
    self.price = price
    self.id = id
    self.quantity = quantity
    inventory.add_product({'name' : self.name,'id': self.id, 'price': self.price, 'quantity' : self.quantity})
  
  def __str__(self):
    return 'Product id ' + str(self.id) + ' has ' + str(self.price) + '$ price and ' +str(self.quantity)+ ' are left.'
  
  def print_product_dict(self):
    print({'name' : self.name,'id': self.id, 'price': self.price, 'quantity' : self.quantity})

food = Product('Food',100,1,10)
drinks = Product('Drinks',20,2,20)

inventory.list_inventory()
inventory.total_products()