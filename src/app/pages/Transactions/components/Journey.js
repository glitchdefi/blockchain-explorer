import React from "react";
import tw from "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { Link } from "src/app/components/Link";
import { Tooltip } from "src/app/components/Tooltip";
import { truncateAddress } from "src/utils/strings";

export function Journey({ id, from, to }) {
  const fromId = `${from} row-${id}`;
  const toId = `${to} row-${id}`;

  return (
    <>
      <Flex>
        <Label>From</Label>
        <Link
          primary
          href={`/address/${from}`}
          data-tip={from}
          data-for={fromId}
        >
          {truncateAddress(from)}
        </Link>
      </Flex>

      <Flex>
        <Label>To</Label>
        <Link primary href={`/address/${to}`} data-tip={to} data-for={toId}>
          {truncateAddress(to)}
        </Link>
      </Flex>

      <Tooltip id={fromId} />
      <Tooltip id={toId} />
    </>
  );
}

const Flex = tw.div`flex items-center`;
const Label = tw(Text)`mr-3 text-color5 w-8 text-left`;
