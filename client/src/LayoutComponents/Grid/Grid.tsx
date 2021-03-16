import React from "react";

// Exporting the Container, FlexContainer Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names

interface IContainerProps {
    fluid?: string;
    children: any;
    backGround?: string;
    padingTop?: string | number;
}

export const Container = (props: IContainerProps) => {
    const {fluid, children, backGround, padingTop} = props;
  return <div className={`container${fluid ? "" : "-fluid"}  bg${backGround ? "" : "-light"} mp${padingTop ? "" : "-5"}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names

interface IRowProps {
    fluid?: string;
    children: any;
}

export const Row  = ( props: IRowProps) => {
    const {fluid, children} = props;

    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
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



