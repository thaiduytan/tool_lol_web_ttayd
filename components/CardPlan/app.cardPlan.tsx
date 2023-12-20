import {
  Badge,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  NumberFormatter,
  Text,
  rem,
} from '@mantine/core';
import React from 'react';
import ButtonCustom from '../Button/app.button';

type CardProps = {
  img: string;
  title: string;
  priceT: number;
  priceB: number;
  labelSale: string;
  backGroundSale: string;
  backGroundAfterSale: string;
  iconSale: string;
  monthy: boolean;
  saler: boolean;
};
const CardPlan = ({
  title,
  img,
  priceT,
  priceB,
  labelSale,
  backGroundSale,
  backGroundAfterSale,
  iconSale,
  monthy,
  saler,
}: CardProps) => {
  return (
    <>
      <Card
        className="plan-card"
        w={rem('270px')}
        style={{
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        <Saler
          label={labelSale}
          backGroundSale={backGroundSale}
          iconSale={iconSale}
          backGroundAfterSale={backGroundAfterSale}
        />
        <CardSection>
          <Image
            fit="cover"
            src={`/asset/img/${img}`}
            w={rem('213px')}
            height={rem('183px')}
            alt={title}
          />
        </CardSection>

        <Text mt={rem('18px')} ta={'center'} className="plan-card_title">
          {title}
        </Text>

        <Group
          align="end"
          justify="space-between"
          mt={rem('15px')}
          mb={rem('21px')}
          gap={rem('18px')}
          wrap="nowrap"
        >
          <Flex gap={rem('2px')} justify="flex-start" align="flex-start" direction="column">
            <NumberFormatter
              className="plan-price_top"
              prefix="$ "
              value={priceT}
              suffix={'.00'} // Số chữ số phần thập phân bạn muốn hiển thị
              thousandSeparator="."
              decimalSeparator=","
            />
            <Flex gap={0} align={'baseline'} direction="row">
              <NumberFormatter
                className="plan-price_bottom"
                prefix="$"
                value={priceB}
                suffix={`.00`} // Số chữ số phần thập phân bạn muốn hiển thị
                thousandSeparator="."
                decimalSeparator=","
              />
              {monthy ? <span className="plan-price_month">/month</span> : ''}
            </Flex>
          </Flex>
          <Badge
            w={rem('106px')}
            h={rem('31px')}
            style={{
              background: 'transparent',
              color: '#3B3089',
              border: '1px solid #3B3089',
              cursor: 'pointer',
            }}
          >
            See Details
          </Badge>
        </Group>

        <ButtonCustom
          color="#FFFFFF"
          background="linear-gradient(180deg, #5DA7DA 19.79%, #5D8FDA 100%)"
          height={rem('50px')}
          width={rem('226px')}
        >
          <Image
            pr={rem('10px')}
            fit="cover"
            src="/asset/img/Vector (Stroke) (3).png"
            alt="buy now"
          />
          Buy Now
        </ButtonCustom>
      </Card>
    </>
  );
};

type PropsSaler = {
  label: string;
  backGroundSale: string;
  backGroundAfterSale: string;
  iconSale: string;
};
const Saler = ({ label, backGroundSale, iconSale, backGroundAfterSale }: PropsSaler) => {
  return (
    <>
      <Flex
        bg={backGroundSale}
        gap={rem('9px')}
        justify="stretch"
        align="center"
        direction="row"
        wrap="wrap"
        className="plan-sale"
      >
        {iconSale ? <Image src={`/asset/img/${iconSale}`} /> : ''}
        <Text>{label}</Text>
        <TrianglePlan backGroundAfterSale={backGroundAfterSale} />
      </Flex>
    </>
  );
};

type PropsTrianglePlan = {
  backGroundAfterSale: string;
};
const TrianglePlan = ({ backGroundAfterSale }: PropsTrianglePlan) => {
  return (
    <div
      className="plan-sale_triangle"
      style={{
        position: 'absolute',
        right: '4px',
        bottom: '-8px',
        transform: 'rotate(-145.19deg)',
        borderLeft: `8px solid ${backGroundAfterSale}`,
        borderRight: '8px solid transparent',
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
      }}
    ></div>
  );
};
export default CardPlan;
