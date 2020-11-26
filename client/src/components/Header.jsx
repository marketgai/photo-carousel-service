import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <div>
    <Banner>
      <BannerBoxLeft>
        <img src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/AILPUP.png" alt="ailpup logo" />
      </BannerBoxLeft>
      <BannerBox>
        <img src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/TitleBarMiddle.png" alt="searchbar" />
      </BannerBox>
      <BannerBoxRight>
        <img src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/TitleBarRIght.png" alt="userinfo" />
      </BannerBoxRight>
    </Banner>
    <UnderBar src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Bar.png" />
  </div>
);

const Banner = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 500px;
  height: auto;
`;

const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 300px;
`;

const BannerBoxLeft = styled(BannerBox)`
  justify-content: flex-start;
`;

const BannerBoxRight = styled(BannerBox)`
  justify-content: flex-end;
`;

const UnderBar = styled.img`
  width: 100%
`;

export default Header;
