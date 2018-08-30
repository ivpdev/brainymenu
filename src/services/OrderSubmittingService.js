import axios from 'axios'
import _ from 'lodash'
import utils from './utils'

const appConfig = window.appConfig

const orderEmailTemplate = _.template(`
    <table width='750px'>
                   <tr><th colspan='2'>Bestellungsdaten</th></tr>
                   <tr><td>Firma:</td><td>TODO</td></tr>
                   <tr><td>Abteilung:</td><td>TODO</td></tr>
                   <tr><td>Familienname:</td><td>TODO</td></tr>
                   <tr><td>Vorname:</td><td>TODO</td></tr>
                   <tr><td>Telefonnummer:</td><td>1234567</td></tr>
                   <tr><td>Strasse:</td><td>Musterstr</td></tr>
                   <tr><td>Nr:</td><td>123</td></tr>
                   <tr><td>PLZ:</td><td>81549</td></tr>
                   <tr><td>Ort:</td><td>München</td></tr>
                   <tr><td>Etage:</td><td>7</td></tr>
                   <tr><td>Email-Adresse:</td><td>ivan.v.panov@gmail.com</td></tr>
                   <tr><td>Bemerkung</td><td>ERTT</td></tr>
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
    buildOrderMessage: function(cartData) {
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
            order: orderHtml
        })

        return emailHtml
    },

    submitOrder: function(cartData) {
        const self = this
        const bodyFormData = new FormData()

        bodyFormData.set('name', 'Bestellung');
        bodyFormData.set('email', 'bestellung@littledragon-asiabistro.de')
        bodyFormData.set('telefon', '-')
        bodyFormData.set('address', '-')
        bodyFormData.set('subject', '[Bestellung]')
        bodyFormData.set('message', this.buildOrderMessage(cartData))

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