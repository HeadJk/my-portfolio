import React, { ComponentProps } from "react";

export type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
export type OverwriteProps<Comp extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>, Props> = Overwrite<ComponentProps<Comp>, Props>