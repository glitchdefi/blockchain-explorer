import React from "react";
import RcPagination from "rc-pagination";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import "./styles/index.css";

export const Pagination = ({ containerStyles }) => {
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
        <RcPagination total={100} itemRender={renderButtons} />
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex 
 mt-3
 mb-2 
 items-center 
 justify-start 
 lg:justify-end 
 w-full
`;
