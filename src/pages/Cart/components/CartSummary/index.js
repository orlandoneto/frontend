import React, { useMemo } from 'react';
import { Platform } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  LinkArea,
  Link,
  SummaryArea,
  SummaryTitle,
  SummaryDetails,
  SummaryQtd,
  SummaryQtdLabel,
  SummaryQtdValue,
  SummaryDiscount,
  SummaryDiscountLabel,
  SummaryDiscountPrice,
  SummaryCoupon,
  SummaryCouponLabel,
  SummaryCouponButton,
  SummaryCouponPrice,
  SummaryDiscountArea,
  SummaryLabel,
  DiscountArea,
  DiscountButtonModal,
} from './styles';

import { selectQtdeProdutos } from '~/store/selectors/Cart.selectors';

import QuestionCircleIcon from '~/assets/svg/cart/question-circle';
import Utils from '~/utils/helpers/utils';
import CartTooltip from '../CartTooltip';
import { Creators as offerActions } from '~/store/ducks/offers';

const CartSummary = ({ openModalCoupon, navigation }) => {
  const dispatch = useDispatch();

  const { itemsSimulation } = useSelector(state => state.cart);
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleIconDiscount = useMemo(() => {
    const discountDSM = itemsSimulation?.totals?.find(t => t.id === 'DiscountsDSM');
    if (discountDSM) {
      dispatch(offerActions.setDiscountDSMSuccess(discountDSM.value));
    }

    if (Object.keys(itemsSimulation).length > 0) {
      const totalDiscount = itemsSimulation?.totals?.find(t => t.id === 'Discounts');

      if (totalDiscount !== undefined && Object.keys(totalDiscount).length > 0) {
        return Utils.formatoMoeda((totalDiscount.value * -1) / 100);
      } else return '0,00';
    }
  }, [itemsSimulation]);

  return (
    <Container>
      <LinkArea onPress={navigation} accessibilityLabel={'btn-continuar-comprando'}>
        <Link>Continuar comprando</Link>
      </LinkArea>

      <SummaryArea>
        <SummaryTitle>Resumo da cesta</SummaryTitle>

        <SummaryDetails style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
          <SummaryQtd>
            <SummaryQtdLabel>Quantidade:</SummaryQtdLabel>
            <SummaryQtdValue>
              {selectQtdeProdutos(itemsSimulation) === 1
                ? `${selectQtdeProdutos(itemsSimulation)} produto`
                : `${selectQtdeProdutos(itemsSimulation)} produtos`}
            </SummaryQtdValue>
          </SummaryQtd>

          <SummaryDiscount>
            <SummaryDiscountLabel>Descontos:</SummaryDiscountLabel>
            <SummaryDiscountPrice>
              <SummaryDiscountArea>
                <DiscountArea>
                  <DiscountButtonModal onPress={() => setModalVisible(!modalVisible)}>
                    {/* <QuestionCircleIcon width="20" height="20" /> */}
                  </DiscountButtonModal>
                  <SummaryLabel>R$ {handleIconDiscount}</SummaryLabel>
                </DiscountArea>
              </SummaryDiscountArea>
            </SummaryDiscountPrice>
          </SummaryDiscount>

          <SummaryCoupon>
            <SummaryCouponLabel>Cupom:</SummaryCouponLabel>
            <SummaryCouponButton accessibilityLabel={'btn-aplicar-cupom'} onPress={openModalCoupon}>
              <SummaryCouponPrice>Aplicar cupom</SummaryCouponPrice>
            </SummaryCouponButton>
          </SummaryCoupon>
        </SummaryDetails>
      </SummaryArea>

      <CartTooltip
        itemsSimulation={itemsSimulation}
        modalVisible={modalVisible}
        handleCloseModal={() => setModalVisible(!modalVisible)}
      />
    </Container>
  );
};

export default CartSummary;
