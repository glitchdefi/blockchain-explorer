import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";

export const StatsCard = React.memo(
  ({ icon, title, value, values, prefix, decimals, separator }) => {
    return (
      <Card>
        <CardBody>
          {isValidElement(icon) && cloneElement(icon)}
          <div tw="ml-5">
            {typeof value === "string" ? (
              <Text>{value}</Text>
            ) : (
              <NumberChange
                value={value}
                values={values}
                prefix={prefix}
                decimals={decimals}
                separator={separator}
              />
            )}

            <Text size={theme`fontSize.sm`} color={theme`colors.textSecondary`}>
              {title}
            </Text>
          </div>
        </CardBody>
      </Card>
    );
  },
  startCardsPropsAreEqual
);

function startCardsPropsAreEqual(prev, next) {
  return (
    prev.value === next.value &&
    JSON.stringify(prev.values) === JSON.stringify(next.values)
  );
}

StatsCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  prefix: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  values: PropTypes.array,
  decimals: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
};

StatsCard.defaultProps = {
  decimals: 0,
};

const CardBody = tw.div`flex items-center`;
