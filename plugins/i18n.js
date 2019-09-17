import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from '@/i18n'
Vue.use(VueI18n)

const numberFormats = {
  'pt-BR': {
    currency: {
      style: 'currency',
      currency: 'BRL'
    },
    number: {
      style: 'number'
    },
    decimal: {
      style: 'decimal'
    },
    percentage: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'pt-BR',
    fallbackLocale: 'pt-BR',
    numberFormats,
    messages
  })
}
