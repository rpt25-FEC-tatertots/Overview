import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -.32px;
`;

class DescriptionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { overviewInfo } = this.props;
    return (
      <StyledDescription>
        { overviewInfo.product_description }
      </StyledDescription>
    );
  }
}

export default DescriptionInfo;
