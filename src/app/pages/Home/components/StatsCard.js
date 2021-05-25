import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";

export const StatsCard = ({ icon, title, value, values, prefix, decimals }) => {
  return (
    <Card>
      <CardBody>
        {isValidElement(icon) && cloneElement(icon)}
        <div tw="ml-5">
          <NumberChange
            value={value}
            values={values}
            prefix={prefix}
            decimals={decimals}
          />
          <Text size={theme`fontSize.sm`} color={theme`colors.textSecondary`}>
            {title}
          </Text>
        </div>
      </CardBody>
    </Card>
  );
};

StatsCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  decimals: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
};

StatsCard.defaultProps = {
  decimals: 0,
};

const CardBody = tw.div`flex items-center`;
