import Phone1 from '../images/PHONE1.jpg'
import Phone2 from '../images/PHONE2.jpg'
import Phone3 from '../images/PHONE3.jpg'
import Phone4 from '../images/PHONE4.jpg'

const createData = (customer, orderId, photo, product, total, is5G) => {
  return {
    customer,
    orderId,
    photo,
    product,
    total,
    is5G,
  }
}

const rows = [
  createData('Emmanuel Macron', '#81412314', Phone1, 'Moto G5', 10, true),
  createData('Joe Biden', '#68457898', Phone2, 'iPhone 8', 16, false),
  createData('Charles III', '#45457898', Phone3, 'Redmi 4', 20, false),
  createData('Alberto Ángel Fernández', '#62446232', Phone4, 'Jio', 15, false),
  createData('Jair Bolsonaro', '#62446232', Phone4, 'Jio', 15, false),
  createData('Frank-Walter Steinmeier', '#62446232', Phone4, 'Jio', 13, false),
  createData('Willem-Alexander', '#62446998', Phone4, 'Jio', 11, true),
  createData('Vladimir Putin', '#62446974', Phone4, 'Jio', 15, true),
  createData('Uhuru Kenyatta', '#62446716', Phone4, 'Jio', 25, true),
  createData('Alassane Ouattara', '#62446802', Phone4, 'Jio', 35, false),
  createData('Michael Higgins', '#62446208', Phone4, 'Jio', 10, false),
  createData('Reuven Rivlin', '#62446111', Phone4, 'Jio', 8, false),
  createData('Tsai Ing-wen', '#62446309', Phone4, 'Jio', 22, false),
]

export default rows
