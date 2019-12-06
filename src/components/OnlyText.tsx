import React, { ReactNode } from "react";
import { onlyText } from "react-children-utilities";

interface IProps {
    children?: ReactNode;
}

export default function OnlyText(props: IProps) {
    const { children } = props;
    console.log(onlyText(children));

    return <>{children}</>;
}
