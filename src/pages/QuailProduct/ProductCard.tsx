import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CImg,
  CCardTitle,
  CCardImg,
  CCardText,
} from "@coreui/react";

export interface ProductCardProps {
  title: string;
  img: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  img,
  description,
  price,
}) => {
  return (
    <CCard className="w-25 m-3">
      <CCardHeader>
        <CCardTitle className="mb-0">{title}</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CCardImg src={img} />
        <CCardText>{description}</CCardText>
      </CCardBody>
      <CCardFooter>{price}</CCardFooter>
    </CCard>
  );
};

export default ProductCard;
