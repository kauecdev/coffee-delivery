import { useFormContext } from 'react-hook-form'
import { TextInput } from '../../../../components/Form/TextInput'
import {
  Form,
  FormBody,
  FormHeader,
  FormSection,
  PaymentSelectContainer,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { PaymentSelectInput } from '../../../../components/Form/PaymentSelectInput'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { OrderData, PaymentMethod } from '../..'
import toast from 'react-hot-toast'

export function CheckoutForm() {
  const { cart, checkout } = useContext(CartContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<OrderData>()

  function handleOrderCheckout(data: OrderData) {
    if (cart.length === 0) {
      return toast.error('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  function handleOrderFormInvalid() {
    return toast.error('Preencha os campos do formulário de entrega')
  }

  const paymentMethodValue = watch('paymentMethod')

  return (
    <Form
      id="order"
      onSubmit={handleSubmit(handleOrderCheckout, handleOrderFormInvalid)}
    >
      <FormSection>
        <FormHeader $iconColor="yellow-dark">
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <FormBody>
          <TextInput
            gridArea="cep"
            required
            placeholder="CEP"
            maxLength={8}
            isInvalid={!!errors.cep}
            mRef={register('cep').ref}
            {...register('cep')}
          />
          <TextInput
            gridArea="street"
            required
            placeholder="Rua"
            isInvalid={!!errors.street}
            mRef={register('street').ref}
            {...register('street')}
          />
          <TextInput
            gridArea="number"
            required
            placeholder="Número"
            isInvalid={!!errors.number}
            mRef={register('number').ref}
            {...register('number')}
          />
          <TextInput
            gridArea="complement"
            placeholder="Complemento"
            mRef={register('complement').ref}
            {...register('complement')}
          />
          <TextInput
            gridArea="neighborhood"
            required
            placeholder="Bairro"
            mRef={register('neighborhood').ref}
            isInvalid={!!errors.neighborhood}
            {...register('neighborhood')}
          />
          <TextInput
            gridArea="city"
            required
            placeholder="Cidade"
            mRef={register('city').ref}
            isInvalid={!!errors.city}
            {...register('city')}
          />
          <TextInput
            gridArea="state"
            required
            placeholder="UF"
            maxLength={2}
            mRef={register('state').ref}
            isInvalid={!!errors.state}
            {...register('state')}
          />
        </FormBody>
      </FormSection>

      <FormSection>
        <FormHeader $iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormHeader>
        <PaymentSelectContainer>
          <PaymentSelectInput
            isSelected={paymentMethodValue === PaymentMethod.CREDIT_CARD}
            {...register('paymentMethod')}
            value={PaymentMethod.CREDIT_CARD}
            mRef={register('paymentMethod').ref}
          >
            <CreditCard size={16} />
            <span>Cartão de Crédito</span>
          </PaymentSelectInput>

          <PaymentSelectInput
            isSelected={paymentMethodValue === PaymentMethod.DEBIT_CARD}
            {...register('paymentMethod')}
            value={PaymentMethod.DEBIT_CARD}
            mRef={register('paymentMethod').ref}
          >
            <Bank size={16} />
            <span>Cartão de Débito</span>
          </PaymentSelectInput>

          <PaymentSelectInput
            isSelected={paymentMethodValue === PaymentMethod.MONEY}
            {...register('paymentMethod')}
            value={PaymentMethod.MONEY}
            mRef={register('paymentMethod').ref}
          >
            <Money size={16} />
            <span>Dinheiro</span>
          </PaymentSelectInput>
        </PaymentSelectContainer>
      </FormSection>
    </Form>
  )
}
