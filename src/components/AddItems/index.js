import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Text, Platform } from 'react-native';
import { Container, TextArea, Price, GreenText, GrayText, InputBox, MinusArea, OtherTextArea } from './styles';
import PlusIcon from '~/assets/svg/productspage/plus-icon.svg';
import MinusIcon from '~/assets/svg/productspage/minus-icon.svg';
import formatTwoDecimal from '~/utils/helpers/formatTwoDecimal';

import { Creators as offerActions } from '~/store/ducks/offers';

const AddItems = ({ product, quantity, handleIncrement, handleDecrement }) => {
  const dispatch = useDispatch();

  const { emailsList } = useSelector(state => state.userCheck);
  const { priceTags } = useSelector(state => state.offers);

  const haveTax = useMemo(() => {
    return !!(priceTags?.length && priceTags[0].taxes.length);
  }, [product, priceTags]);

  const isDSM = useMemo(() => {
    if (haveTax) {
      let haveDSM = false;
      priceTags[0].taxes.map(item => {
        if (item.name.includes('DSM')) haveDSM = true;
      });
      return haveDSM;
    } else false;
  }, [product, priceTags, haveTax]);

  const totalPrice = useMemo(() => {
    let discount = 0;
    if (haveTax) {
      discount = product?.items[0]?.sellers[0]?.commertialOffer?.price + Number(priceTags[0].taxes[0].value);
    }
    const finalValue = haveTax ? discount : product?.items[0]?.sellers[0]?.commertialOffer?.price;
    return finalValue * quantity;
  }, [product.items, quantity, haveTax]);

  const totalPriceWithoutDiscount = useMemo(() => {
    return product?.items[0]?.sellers[0]?.commertialOffer?.listPrice * quantity;
  }, [product.items, quantity]);

  const savingPrice = useMemo(() => {
    return totalPriceWithoutDiscount - totalPrice;
  }, [totalPriceWithoutDiscount, totalPrice]);

  const naoApresentarPrecoDePor = useMemo(() => {
    return product?.apresentarPrecoDePor && product.apresentarPrecoDePor[0] === 'Não';
  }, [product.apresentarPrecoDePor]);

  useEffect(() => {
    if (emailsList[0]?.document)
      dispatch(
        offerActions.getPriceTagsRequest(
          [
            {
              sku: product.productId.toString(),
              quantity: 1,
            },
          ],
          emailsList[0].document
        )
      );
  }, [product]);

  return (
    <>
      <Container>
        <TextArea>
          <Price>R$ {formatTwoDecimal(totalPrice)}</Price>
          {!naoApresentarPrecoDePor && savingPrice > 0 && (
            <OtherTextArea>
              <GrayText>R${formatTwoDecimal(totalPriceWithoutDiscount)}</GrayText>
              <GreenText>Economize R$ {formatTwoDecimal(savingPrice)}</GreenText>
            </OtherTextArea>
          )}
        </TextArea>
        <InputBox style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: '#000' } : ''}>
          <TouchableOpacity onPress={handleDecrement}>
            <MinusArea>
              <MinusIcon />
            </MinusArea>
          </TouchableOpacity>
          <Text
            style={{
              width: '30%',
              backgroundColor: '#ffffff',
              color: '#666666',
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
            }}
          >
            {quantity}
          </Text>
          <TouchableOpacity onPress={handleIncrement}>
            <PlusIcon />
          </TouchableOpacity>
        </InputBox>
      </Container>
    </>
  );
};

export default AddItems;
