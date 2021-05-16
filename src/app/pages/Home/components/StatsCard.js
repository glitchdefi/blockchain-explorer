import React, {
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
import tw, { theme } from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";
import { Skeleton } from "src/app/components/Skeleton";

export function StatsCard({ icon, title, value, loading }) {
  return (
    <Card>
      <CardBody>
        {isValidElement(icon) && cloneElement(icon)}
        <div tw="ml-5">
          {loading ? <Skeleton tw="mb-1" /> : <NumberChange value={value} />}
          <Text size={theme`fontSize.sm`} color={theme`colors.textSecondary`}>
            {title}
          </Text>
        </div>
      </CardBody>
    </Card>
  );
}

StatsCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const CardBody = tw.div`flex items-center`;
