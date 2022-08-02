import { useSelector } from "react-redux";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function ImageDetail () {
    const product = useSelector(state => state.product)

    return (

                        <ImageList sx={{ width: 350, height: 350 }} cols={1} rowHeight={50}>
                            <ImageListItem key={product.img}>
                              <img
                                src={`${product.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${product.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={product.name}
                                loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
)};