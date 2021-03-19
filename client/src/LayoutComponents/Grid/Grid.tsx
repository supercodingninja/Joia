import React from "react";

// Exporting the Container, FlexContainer Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names

interface IContainerProps {
    fluid?: string;
    children: any;
    backGround?: string;
    py?: string;
}

export const Container = (props: IContainerProps) => {
    const {fluid, children, backGround, py} = props;
  return <div className={`container${fluid ? "" : "-fluid"} bg${backGround ? "" : "-light"} py${py}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names

interface IRowProps {
    fluid?: string;
    children: any;
    py?: string;
}

export const Row  = ( props: IRowProps) => {
    const {fluid, children, py} = props;

    return <div className={`row${fluid ? "-fluid" : ""} py${py}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">

interface IColProps {
    size?: any;
    children: any;
}

export const Col = (props: IColProps) => {
    const {size, children} = props;

    return (
        <div
          className={size
            .split(" ")
            .map((size: string) => "col-" + size)
            .join(" ")}
        >
          {children}
        </div>
      );
}



