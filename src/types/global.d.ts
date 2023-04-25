import React, { ComponentsProps } from "react";

declare global {

    type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
    type OverwriteProps<Comp, Props> = Overwrite<ComponentsProps<Comp>, Props>
}