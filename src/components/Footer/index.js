import React from 'react';
import { SubFooter, FooterText, Wrapper } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper className="footer">
      <SubFooter>
        <FooterText variant="subheading" component="span">
          © {currentYear} CHISW, Inc.
        </FooterText>
      </SubFooter>
    </Wrapper>
  );
};

export default Footer;
