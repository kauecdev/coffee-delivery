import { FormProvider, useForm } from 'react-hook-form'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { CheckoutForm } from './components/CheckoutForm'
import { ConfirmOrderPanel } from './components/ConfirmOrderPanel'

enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  MONEY = 'MONEY',
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.coerce.string().length(8, 'Informe um CEP válido'),
  street: zod.string().min(1),
  number: zod.number().nonnegative(),
  complement: zod.string(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().length(2),
  paymentMethod: zod.nativeEnum(PaymentMethod),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>()

  return (
    <CheckoutContainer>
      <FormProvider {...newOrderForm}>
        <div>
          <h3>Complete seu pedido</h3>
          <CheckoutForm />
        </div>
        <div>
          <h3>Cafés selecionados</h3>
          <ConfirmOrderPanel />
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}
