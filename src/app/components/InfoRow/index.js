import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

// Components
import { InfoIcon } from "src/app/components/Svg/Icons";
import { Text as TextBase } from "src/app/components/Text";

export function InfoRow(props) {
  const { label, labelWrapStyles, value, customValueComp, ...rest } = props;

  const renderValue = () => {
    if (isValidElement(customValueComp)) {
      return cloneElement(customValueComp);
    }

    return <Text>{value}</Text>;
  };

  return (
    <Container {...rest}>
      <InfoIcon />
      <Content className="info-row-content">
        <LabelWrapper css={[labelWrapStyles]}>
          <Text tw="mb-1 lg:mb-0">{label}:</Text>
        </LabelWrapper>
        {renderValue()}
      </Content>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customValueComp: PropTypes.element,
};
