import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { getSubtotal } from "../utils";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feature/cart-slice";
import { useNavigate } from "react-router-dom";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";

export default function Cart() {
  const cart = useSelector((state) => state.cart?.value);
  const theme = useTheme();
  const subTotal = getSubtotal(cart).toFixed(2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function updateProductQuantity(e, { product, quantity }) {
    const updatedQuantity = e.target.valueAsNumber;
    if (updatedQuantity < quantity) {
      dispatch(removeFromCart({ product }));
    } else {
      dispatch(addToCart({ product }));
    }
  }

  function goToHomePage() {
    navigate("/");
  }

  function goToCheckoutPage() {
    navigate("/checkout");
  }

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        <Grid item container spacing={2} md={8}>
          {cart.length ? (
            cart.map(({ product, quantity }) => {
              const { title, id, price, image, description, rating } = product;
              return (
                <Grid item key={id} xs={12}>
                  <Card
                    sx={{
                      display: "flex",
                      py: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      sx={{
                        width: theme.spacing(30),
                        height: theme.spacing(30),
                        objectFit: "contain",
                        pt: theme.spacing(),
                      }}
                      alt={title}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <Typography variant="h5">{title}</Typography>
                        <Rating readOnly precision={0.5} value={rating.rate} />
                        <form>
                          <TextField
                            sx={{
                              width: theme.spacing(8),
                            }}
                            inputProps={{ min: 0, max: 10 }}
                            id={`${id}-product-id`}
                            type="number"
                            variant="standard"
                            value={quantity}
                            label="Quantity"
                            onChange={(e) =>
                              updateProductQuantity(e, { product, quantity })
                            }
                          ></TextField>
                        </form>
                      </Box>
                      <Box>
                        <Typography variant="h5" paragraph>
                          {getSubtotal([{ product, quantity }])?.toFixed(2)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <ProductionQuantityLimitsSharpIcon color="action" />
                    <Typography variant="h6" color="text.secondary">
                      The cart is empty.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          container
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Card
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h4">Subtotal</Typography>
              <Typography variant="h5">{subTotal}</Typography>
              {subTotal > 0 ? (
                <Button variant="contained" onClick={goToCheckoutPage}>
                  Buy now
                </Button>
              ) : (
                <Button variant="contained" onClick={goToHomePage}>
                  Shop products
                </Button>
              )}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
