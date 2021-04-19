import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

// Components
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { NumberChange } from "src/app/components/NumberChange";

export function StatsCard({ icon, title, value }) {
  return (
    <Card>
      <CardBody>
        {isValidElement(icon) && cloneElement(icon)}
        <div tw="ml-5">
          <NumberChange value={value} />
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
};

const CardBody = tw.div`flex items-center`;
