/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="883px"
      height="755px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Image
        width="1280px"
        height="596px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "606103_04 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="0px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="546px"
        height="62px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="616px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price -- $"}${home?.price}${" limit"}`}
        {...getOverrideProps(overrides, "address36462692")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="0px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="546px"
        height="62px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="678px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "address36462693")}
      ></Text>
    </View>
  );
}
