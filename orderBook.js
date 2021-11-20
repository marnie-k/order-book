
function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook.length === 0) { updatedBook.push(incomingOrder)

    return updatedBook }
  for (var i = 0; i < existingBook.length; i++) {
    if (existingBook[i].type === incomingOrder.type) { updatedBook.push(existingBook[i]) }

    else {
      if (existingBook[i].price !== incomingOrder.price) {
        updatedBook.push(incomingOrder)
      }
      if (existingBook[i].price === incomingOrder.price) {
        if (existingBook[i].quantity !== incomingOrder.quantity) {

        }
      }

    }
  }
}

/*
if existingBook == empty -> add to updatedBook
if existingBook !== empty -> compare incomingOrder.type to existingBook.type



      if existingBook.type == incomingOrder.type -> add to updatedBook
      if existingBook.type !== incomingOrder.type -> compare price

            if existingBook.price !== incomingOrder.price -> add to updatedBook
            if existingBook.price == incomingOrder.price -> compare quantity

                  if existingBook.quantity == incomingOrder.quantit

*/
module.exports = reconcileOrder
