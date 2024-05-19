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

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <Form>
      <FormSection>
        <FormHeader iconColor="yellow-dark">
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <FormBody>
          <TextInput gridArea="cep" required placeholder="CEP" {...register} />
          <TextInput
            gridArea="street"
            required
            placeholder="Rua"
            {...register}
          />
          <TextInput
            gridArea="number"
            required
            placeholder="Número"
            {...register}
          />
          <TextInput
            gridArea="complement"
            placeholder="Complemento"
            {...register}
          />
          <TextInput
            gridArea="neighborhood"
            required
            placeholder="Bairro"
            {...register}
          />
          <TextInput
            gridArea="city"
            required
            placeholder="Cidade"
            {...register}
          />
          <TextInput gridArea="state" required placeholder="UF" {...register} />
        </FormBody>
      </FormSection>

      <FormSection>
        <FormHeader iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormHeader>
        <PaymentSelectContainer>
          <PaymentSelectInput isSelected={true}>
            <CreditCard size={16} />
            <span>Cartão de Crédito</span>
          </PaymentSelectInput>

          <PaymentSelectInput isSelected={false}>
            <Bank size={16} />
            <span>Cartão de Débito</span>
          </PaymentSelectInput>

          <PaymentSelectInput isSelected={false}>
            <Money size={16} />
            <span>Dinheiro</span>
          </PaymentSelectInput>
        </PaymentSelectContainer>
      </FormSection>
    </Form>
  )
}
