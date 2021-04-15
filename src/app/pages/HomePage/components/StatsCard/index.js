import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { UpDownIcon } from "../../icons";

export function StatsCard({ icon, title, value, isCompare }) {
  return (
    <Card>
      <CardBody>
        {isValidElement(icon) && cloneElement(icon)}
        <div tw="ml-5">
          <TitleWrapper>
            <Text>{value}</Text>
            {isCompare && <UpDownIcon />}
            {isCompare && <Text tw="text-12 text-secondary!">260</Text>}
          </TitleWrapper>
          <Text tw="text-12 opacity-60">{title}</Text>
        </div>
      </CardBody>
    </Card>
  );
}

StatsCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isCompare: PropTypes.bool,
};

const CardBody = tw.div`flex items-center`;
const TitleWrapper = tw.div`flex items-center`;
