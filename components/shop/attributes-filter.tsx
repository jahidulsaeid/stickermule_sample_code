import { Attribute } from "@/types";
import React from "react";
import { ColorFilter } from "./color-filter";
import { VariationFilter } from "./variation-filter";

type Props = {
  attributes: Attribute[]
}

export const AttributesFilter: React.FC<Props> = ({ attributes }) => (
  <>
    {attributes.map((attribute: Attribute) => attribute.slug === 'color'
      ? <ColorFilter attribute={attribute} key={attribute.id}/> :
      <VariationFilter attribute={attribute} key={attribute.id}/>)}
  </>
)