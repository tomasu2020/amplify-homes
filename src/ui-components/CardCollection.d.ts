/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardProps, CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCollectionOverridesProps = {
    CardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
} & EscapeHatchProps;
export declare type CardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardProps;
} & {
    overrides?: CardCollectionOverridesProps | undefined | null;
}>;
export default function CardCollection(props: CardCollectionProps): React.ReactElement;
