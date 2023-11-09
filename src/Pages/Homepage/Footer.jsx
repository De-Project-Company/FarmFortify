import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  opacity: 0.70;
  background: #D3F5C6;
`;

const StyledSection = styled.div`
  color: #121415;
  font-size: 20px;
  font-family: 'Aeonik';
  font-weight: 500;
  word-wrap: break-word;
`;

const StyledItem = styled.div`
  color: #33383D;
  font-size: 16px;
  font-family: 'Aeonik';
  font-weight: 400;
  word-wrap: break-word;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #E49115;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(0deg, rgba(26, 116, 8, 0.22) 0%, rgba(26, 116, 8, 0.22) 100%)' }}>
        <div style={{ width: '100%', color: 'white', fontSize: 32, fontFamily: 'Aeonik', fontWeight: '700', wordWrap: 'break-word' }}>What Kind Of Loan Am I Eligible For?</div>
        <div style={{ width: '100%', color: 'white', fontSize: 18, fontFamily: 'Aeonik', fontWeight: '400', wordWrap: 'break-word' }}>Not sure what kind of loan or resource fits your business needs presently? Book a free consultation from us.</div>
        <StyledButton>
          <div style={{ textAlign: 'justify', color: 'white', fontSize: 18, fontFamily: 'Aeonik', fontWeight: '500', wordWrap: 'break-word' }}>Free Consultation</div>
        </StyledButton>
        <div style={{ width: '100%', height: '100%', background: 'rgba(131.04, 131.04, 131.04, 0.07)' }}>
          <img style={{ width: '100%', height: '100%', borderRadius: 5 }} src="https://via.placeholder.com/284x198" alt="Placeholder Image 1" />
          <img style={{ width: '100%', height: '100%', borderRadius: 5 }} src="https://via.placeholder.com/289x198" alt="Placeholder Image 2" />
          <img style={{ width: '100%', height: '100%', borderRadius: 5 }} src="https://via.placeholder.com/289x173" alt="Placeholder Image 3" />
          <img style={{ width: '100%', height: '100%', borderRadius: 5 }} src="https://via.placeholder.com/284x173" alt="Placeholder Image 4" />
        </div>
      </div>
      <div style={{ width: '100%', height: '100%', background: '#D3F5C6' }}>
        <div style={{ color: '#1A7408', fontSize: 28, fontFamily: 'Aeonik', fontWeight: '700', wordWrap: 'break-word' }}>FarmFortify</div>
        <div style={{ width: '100%', color: '#33383D', fontSize: 14, fontFamily: 'Aeonik', fontWeight: '400', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</div>
        <div style={{ width: '100%', height: '100%', background: '#D3F5C6', borderRadius: 9999, border: '1px #1A7408 solid' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: 6.12, height: 11.67, left: 4.08, top: 1.17, position: 'absolute', background: '#1A7408' }}></div>
          </div>
        </div>
        <div style={{ width: '100%', height: '100%', background: '#D3F5C6', borderRadius: 9999, border: '1px #1A7408 solid' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: 11.67, height: 11.67, left: 1.17, top: 1.17, position: 'absolute', background: '#1A7408' }}></div>
          </div>
        </div>
        <div style={{ width: '100%', height: '100%', background: '#D3F5C6', borderRadius: 9999, border: '1px #1A7408 solid' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: 11.70, height: 9.71, left: 0.84, top: 2.07, position: 'absolute', background: '#1A7408' }}></div>
          </div>
        </div>
        <div style={{ width: '100%', height: '100%', background: '#D3F5C6', borderRadius: 9999, border: '1px #1A7408 solid' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: 11.67, height: 9.33, left: 1.17, top: 2.33, position: 'absolute', background: '#1A7408' }}></div>
          </div>
        </div>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div style={{ width: 19.50, height: 19.50, left: 2.25, top: 2.25, position: 'absolute', background: '#33383D' }}></div>
        </div>
        <div style={{ color: '#33383D', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', wordWrap: 'break-word' }}>2023</div>
        <div style={{ color: '#1A7408', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', wordWrap: 'break-word' }}>FarmFortify Team</div>
      </div>
      <div>
        <StyledSection>COMPANY</StyledSection>
        <StyledItem>About Us</StyledItem>
        <StyledItem>Mission</StyledItem>
        <StyledItem>Our Team</StyledItem>
        <StyledItem>News</StyledItem>
      </div>
      <div>
        <StyledSection>PRODUCT</StyledSection>
        <StyledItem>Loans</StyledItem>
        <StyledItem>Resources</StyledItem>
        <StyledItem>Reviews</StyledItem>
        <StyledItem>Community</StyledItem>
      </div>
      <div>
        <StyledSection>HELP</StyledSection>
        <StyledItem>Getting Started</StyledItem>
        <StyledItem>Contact Center</StyledItem>
        <StyledItem>FAQs</StyledItem>
      </div>
      <div>
        <StyledSection>SUBSCRIBE</StyledSection>
        <div style={{ width: '100%', height: '100%', borderRadius: 5, border: '0.50px #121415 solid' }}>
          <div style={{ width: '100%', height: '100%', color: '#999999', fontSize: 14, fontFamily: 'Aeonik', fontWeight: '400', wordWrap: 'break-word' }}>Enter email address</div>
        </div>
        <div style={{ width: '100%', height: '100%', background: '#E49115', borderRadius: 5 }}>
          <div style={{ width: '100%', height: '100%', color: 'white', fontSize: 14, fontFamily: 'Aeonik', fontWeight: '400', wordWrap: 'break-word' }}>SEND</div>
        </div>
      </div>
    </StyledFooter>
  )
}