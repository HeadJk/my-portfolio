import React, { ComponentProps } from "react";

declare global {
    type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;
    type OverwriteProps<Comp, Props> = Overwrite<ComponentProps<Comp>, Props>
}