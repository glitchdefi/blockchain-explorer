import React, { useEffect } from "react";
import PropTypes from "prop-types";
import tw, { theme, css } from "twin.macro";
import TableContainer from "./TableContainer";
import { Spinner } from "../LoadingIndicator/Spinner";
import { Pagination } from "../Pagination";
import { usePagination } from "src/hooks/usePagination";
export default function Table({ children, loading, total, ...props }) {
  const { current, pParams, onChange } = usePagination();

  useEffect(() => {
    if (current) {
      props.onChange && props.onChange(pParams);
    }
  }, [current]);

  const renderLoading = () => (
    <div>
      <div css={[spinWrapStyles]}>
        <Spinner size="30px" />
      </div>
      <div className="glch-spin-container" />
    </div>
  );

  const renderPagination = () => {
    return <Pagination current={current} total={total} onChange={onChange} />;
  };

  return (
    <>
      <div css={[glchNestedLoading]}>
        {loading && renderLoading()}
        <TableContainer>
          <table css={[tw`w-full bg-bgPrimary`, tableStyles]} {...props}>
            {children}
          </table>
        </TableContainer>
        {total ? renderPagination() : null}
      </div>
    </>
  );
}

const glchNestedLoading = css`
  position: relative;

  .glch-spin-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: ${theme`colors.bgPrimary`};
    opacity: 0.6;
    transition: opacity 0.5s;
    pointer-events: none;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const spinWrapStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const tableStyles = css`
  border-spacing: inherit;
`;
Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
