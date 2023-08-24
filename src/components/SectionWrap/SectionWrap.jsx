import React from 'react';
import PropTypes from 'prop-types';
import { SectionFeedWrap, SectionFeedTitle } from './SectionWrap.styled';

export const SectionWrap = ({ title, children }) => {
  return (
    <SectionFeedWrap>
      <SectionFeedTitle>{title}</SectionFeedTitle>
      {children}
    </SectionFeedWrap>
  );
};

SectionWrap.propTypes = {
  title: PropTypes.string.isRequired,
};