import React from "react";
import RcPagination from "rc-pagination";
import PropTypes from "prop-types";
import tw from "twin.macro";

import { Options } from "./Options";

import localeEN from "./locale";
import "./styles/index.css";

export const Pagination = React.memo((props) => {
  const { containerStyles, total, current, pageSize, onChange } = props;

  return (
    <>
      <Wrapper css={containerStyles}>
        <RcPagination
          locale={localeEN}
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
        />
        <Options
          onChange={(pageSize) =>
            onChange({ page_index: 1, page_size: pageSize })
          }
        />
      </Wrapper>
    </>
  );
});

const Wrapper = tw.div`
 flex 
 mt-7
 mb-2
 items-center 
 justify-start 
 lg:justify-end 
 w-full
`;

Pagination.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  onChange: PropTypes.func,
  containerStyles: PropTypes.object,
};
