/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { Card, overrides, ...rest } = props;
  return (
    <View
      width="753px"
      height="531px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(249,249,249,1)"
      {...getOverrideProps(overrides, "Card")}
      {...rest}
    >
      <Image
        width="800px"
        height="450px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 225px - 40.5px)"
        left="calc(50% - 400px - -23.5px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={Card?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="725px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="491px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={Card?.address}
        {...getOverrideProps(overrides, "address")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="724px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="466px"
        left="13px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price$        "}${Card?.price}${"/Year"}`}
        {...getOverrideProps(overrides, "Price")}
      ></Text>
    </View>
  );
}
