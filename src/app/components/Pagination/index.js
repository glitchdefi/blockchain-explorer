import React from "react";
import RcPagination from "rc-pagination";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

import { DEFAULT_PAGE_SIZE } from "src/constants";
import "./styles/index.css";

export const Pagination = React.memo((props) => {
  const { containerStyles, total, current, onChange } = props;
  const { t } = useTranslation();

  /**
   *
   *
   */
  const renderButtons = (_, type, element) => {
    if (type === "prev") {
      return <button type="button">{t("pagination.prev")}</button>;
    }
    if (type === "next") {
      return <button type="button">{t("pagination.next")}</button>;
    }
    return element;
  };

  return (
    <>
      <Wrapper css={containerStyles}>
        <RcPagination
          current={current}
          total={total}
          pageSize={DEFAULT_PAGE_SIZE}
          onChange={onChange}
          itemRender={renderButtons}
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
