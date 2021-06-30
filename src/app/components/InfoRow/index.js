import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import tw, { theme } from "twin.macro";

// Components
import { InfoIcon } from "src/app/components/Svg/Icons";
import { Text as TextBase } from "src/app/components/Text";
import { CopyButton } from "../CopyButton";
export function InfoRow(props) {
  const {
    label,
    labelWrapStyles,
    value,
    copyValue,
    customValueComp,
    isCopy,
    dataTip,
    ...rest
  } = props;

  const renderValue = () => {
    if (isValidElement(customValueComp)) {
      return (
        <div tw="flex items-center">
          {cloneElement(customValueComp)}
          {isCopy && (
            <CopyButton
              text={copyValue || (typeof value !== "string" ? null : value)}
              tw="ml-3"
            />
          )}
        </div>
      );
    }

    return (
      <div tw="flex items-center">
        <Text>{value}</Text>
        {isCopy && (
          <CopyButton
            text={copyValue || (typeof value !== "string" ? null : value)}
            tw="ml-3"
          />
        )}
      </div>
    );
  };

  const renderInfoIcon = () => (
    <div data-tip={dataTip} data-for={label} tw="items-center flex">
      <InfoIcon />
    </div>
  );

  return (
    <Container {...rest}>
      {renderInfoIcon()}
      <Content className="info-row-content">
        <LabelWrapper css={[labelWrapStyles]}>
          <Text tw="mb-1 lg:mb-0">{label}:</Text>
        </LabelWrapper>
        {renderValue()}
      </Content>
      <ReactTooltip
        id={label}
        effect="solid"
        backgroundColor={theme`colors.bg2`}
        tw="w-80 shadow-lg"
      />
    </Container>
  );
}

const Container = tw.div`mt-6 first:mt-0 flex w-full lg:items-center`;
const Content = tw.div`flex flex-col ml-2 lg:flex-grow lg:flex-row lg:ml-6`;
const LabelWrapper = tw.div`flex items-start lg:(items-center w-2/12)`;
const Text = tw(TextBase)`text-base text-textSecondary`;

InfoRow.propTypes = {
  label: PropTypes.string,
  labelWrapStyles: PropTypes.any,
  contentStyles: PropTypes.object,
  value: PropTypes.any,
  customValueComp: PropTypes.element,
  dataTip: PropTypes.string,
  copyValue: PropTypes.string,
};

InfoRow.defaultProps = {
  dataTip: "",
};
