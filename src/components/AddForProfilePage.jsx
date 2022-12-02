import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

export default function AddForProfilePage() {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://static.vecteezy.com/system/resources/previews/000/178/364/original/super-sale-offer-and-discount-banner-template-for-marketing-and-vector.jpg"
      />
      <CardContent>
        <Link to="/">Shop Products</Link>
      </CardContent>
    </Card>
  );
}
