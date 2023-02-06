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
      width="400px"
      height="400px"
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
        width="400px"
        height="186.25px"
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
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="24px"
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
        top="290px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.title}
        {...getOverrideProps(overrides, "title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
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
        top="330px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.description}
        {...getOverrideProps(overrides, "description")}
      ></Text>
    </View>
  );
}
