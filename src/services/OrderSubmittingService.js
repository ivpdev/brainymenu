import axios from 'axios'
import _ from 'lodash'
import utils from './utils'

const appConfig = window.appConfig

const orderEmailTemplate = _.template(`
    <table width='750px'>
                   <tr><th colspan='2'>Bestellungsdaten</th></tr>
                   <tr><td>Firma:</td><td><%= firma %></td></tr>
                   <tr><td>Abteilung:</td><td><%= department %></td></tr>
                   <tr><td>Familienname:</td><td><%= lastname %></td></tr>
                   <tr><td>Vorname:</td><td><%= firstname %></td></tr>
                   <tr><td>Telefonnummer:</td><td><%= phone %></td></tr>
                   <tr><td>Addresse:</td><td><%= address %></td></tr>
                   <tr><td>Etage:</td><td><%= floor %></td></tr>
                   <tr><td>PLZ:</td><td><%= zip %></td></tr>
                   <tr><td>Ort:</td><td><%= place %></td></tr>
                   <tr><td>Email-Adresse:</td><td><%= email %></td></tr>
                   <tr><td>Bemerkung</td><td><%= note %></td></tr>
                   <tr><td valign="top">Bestellung:</td>
                       <td><%= order %></td></tr>
   </table>`)

const orderTemplate = _.template(`<table width="500px">
          <%= rows %>
          <tr>
              <td style="text-align:right">Gesamtbetrag: </td>
              <td style="text-align:right" width="12%"><%= totalSum %> &euro;</td>
          </tr>
      </table>`)

const orderRowTemplate = _.template(`<tr>
      <td><%= quantity %> x <%= name %><br/></td>
      <td style="text-align:right"><%= totalPrice %> &euro;</td>
  </tr>`);

const OrderSubmittingService = {
    getAddress: function(checkoutForm) {
        const zip = checkoutForm.zip.value
        const street = checkoutForm.street.value
        const houseNumber = checkoutForm.houseNumber.value || ""

        return `${zip} ${street} ${houseNumber}`
    },

    getPlace: function(checkoutForm) {
        const zip = checkoutForm.zip.value

        const zipData = appConfig.supportedZipCodes.find(z => z.zip == zip)

        return zipData.place
    },

    buildOrderMessage: function(cartData, checkoutForm) {
        const email = checkoutForm.email.value
        const firma = checkoutForm.firma.value
        const department = checkoutForm.department.value
        const firstname = checkoutForm.firstname.value
        const lastname = checkoutForm.lastname.value
        const phone = checkoutForm.phone.value
        const note = checkoutForm.note.value
        const zip = checkoutForm.zip.value
        const floor = checkoutForm.floor.value
        const place = this.getPlace(checkoutForm)

        const address = this.getAddress(checkoutForm)

        const rowsHtml = cartData.map(item => orderRowTemplate({
            quantity: item.quantity,
            name: item.name,
            totalPrice: item.quantity * item.price
       }))

        const orderHtml = orderTemplate({
            totalSum: utils.calculateTotalSumInCart(cartData),
            rows: rowsHtml.join('')
        })

        const emailHtml = orderEmailTemplate({
            firma: firma,
            department: department,
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone: phone,
            email: email,
            note: note,
            zip: zip,
            floor: floor,
            place: place,

            order: orderHtml
        })

        return emailHtml
    },

    submitOrder: function(cartData, checkoutForm) {
        const self = this
        const bodyFormData = new FormData()

        const phone = checkoutForm.phone.value
        const address = this.getAddress(checkoutForm)

        bodyFormData.set('name', 'Bestellung');
        bodyFormData.set('email', 'bestellung@littledragon-asiabistro.de')
        bodyFormData.set('telefon', phone)
        bodyFormData.set('address', address)
        bodyFormData.set('subject', '[Bestellung]')
        bodyFormData.set('message', this.buildOrderMessage(cartData, checkoutForm))

        return axios.post(
            appConfig.mailServerUrl,
            bodyFormData,
            {
                headers:{
                   'Content-Type': 'multipart/form-data'
                }
            })
    }
}

export default OrderSubmittingService