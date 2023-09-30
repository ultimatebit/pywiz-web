import React, {FC, ReactElement} from "react";
import { RouteProps } from "react-router";

type RouteWrapperProps = {
    title: string
} & RouteProps;

const RouteWrapper: FC<RouteWrapperProps> =  ({title, ...props}) => {
    document.title = title ? `${title} - Pywiz` : 'Pywiz';
    return props.element as ReactElement;
};

export default RouteWrapper;