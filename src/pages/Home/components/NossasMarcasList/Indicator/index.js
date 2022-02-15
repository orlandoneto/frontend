import React, { useCallback } from 'react';
import {
  Container,
  Indicator as IndicatorView,
  ActivatedIndicator,
} from './styles';

const Indicator = ({ itemCount, currentIndex }) => {
  const renderIndicators = useCallback(() => {
    const indicators = [];
    for (let i = 0; i < itemCount; i += 1) {
      if (i === currentIndex) {
        indicators.push(<ActivatedIndicator key={i} />);
      } else {
        indicators.push(<IndicatorView key={i} />);
      }
    }
    return indicators;
  }, [currentIndex, itemCount]);
  return <Container>{renderIndicators()}</Container>;
};

export default Indicator;
