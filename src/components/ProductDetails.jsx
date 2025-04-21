import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const products = [
    // New Arrivals (IDs 1-30)
    { id: 1, name: 'Women Black Mermaid Dress', price: 399, image: '/Dresses/Black mermaid 1.WEBP', sideView: '/Dresses/Black mermaid 2.JPG', leftView:  '/Dresses/Black mermaid 1.WEBP', rightView: '/Dresses/Black mermaid 2.JPG', description: 'Care: Machine Wash  ', color: 'Mermaid Black', material: 'Rayon' },
    { id: 2, name: 'Women White Mermaid Dress', price: 399, image: '/Dresses/White mermaid 1.WEBP', sideView: '/Dresses/White mermaid 2.JPG', leftView: '/Dresses/White mermaid 1.WEBP', rightView: '/Dresses/White mermaid 2.JPG', description: 'Care: Machine Wash .', color: 'Off White', material: 'Rayon' },
    { id: 3, name: 'Women Red Mermaid Dress', price: 399, image: '/Dresses/Red mermaid 1.JPG', sideView: '/Dresses/Red mermaid 2.JPG', leftView: '/Dresses/Red mermaid 1.JPG', rightView: '/Dresses/Red mermaid 2.JPG', description: 'Care :Machine Wash', color: 'Red ', material: 'Rayon' },
    { id: 4, name: 'Women Blue Mermaid Dress', price: 399, image: '/Dresses/Blue mermaid 1.WEBP', sideView: '/Dresses/Blue mermaid 2.JPG', leftView: '/Dresses/Blue mermaid 1.WEBP', rightView: '/Dresses/Blue mermaid 2.JPG', description: 'Care : Machine Wash ', color: 'Blue ', material: 'Rayon' },
    { id: 5, name: 'Women Sky Blue Mermaid Dress', price: 399, image: '/Dresses/sky white mermaid 1.WEBP', sideView: '/Dresses/sky white mermaid 2.WEBP', leftView: '/Dresses/sky white mermaid 1.WEBP', rightView: '/Dresses/sky white mermaid 2.WEBP', description: 'Machine Wash.', color: 'Sky White', material: 'Rayon' },
    { id: 6, name: 'Women Yellow One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/Women yellow 1.WEBP', sideView: '/Dresses/womens yellow 2.WEBP', leftView: '/Dresses/womens yellow 2.WEBP', rightView: '/Dresses/Women yellow 1.WEBP', description: 'Machine Wash', color: 'Yellow', material: 'Rayon' },
    { id: 7, name: 'Women Blue One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/womens blue 1.JPG', sideView: '/Dresses/womens blue 2.JPG', leftView: '/Dresses/womens blue 1.JPG', rightView: '/Dresses/womens blue 1.JPG', description: 'Machine Wash', color: 'Blue', material: 'Rayon' },
    { id: 8, name: 'Women Wine One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/womens wine 1.JPG', sideView: '/Dresses/womens wine 2.JPG', leftView: '/Dresses/womens wine 1.JPG', rightView: '/Dresses/womens wine 2.JPG', description: 'Machine Wash', color: 'Royal Wine ', material: 'Rayon' },
    { id: 9, name: 'Women Pink Bodycon Sleeveless Dress', price: 400, image: '/Dresses/Pink bodycon 1.JPG', sideView: '/Dresses/Pink bodycon 2.JPG', leftView: '/Dresses/Pink bodycon 1.JPG', rightView: '/Dresses/Pink bodycon 2.JPG', description: 'Machine Wash.', color: 'Pink', material: 'Rayon' },
    { id: 10, name: 'Women Green Bodycon Sleeveless Dress', price: 400, image: '/Dresses/Green bodycon 1.JPG', sideView: '/Dresses/Green bodycon 2.JPG', leftView: '/Dresses/Green bodycon 1.JPG', rightView: '/Dresses/Green bodycon 2.JPG', description: 'Machine Wash', color: 'Green', material: 'Rayon' },
    { id: 11, name: 'Women Blue Bodycon Sleeveless Dress', price: 400, image: '/Dresses/Blue bodycon 1.JPG', sideView: '/Dresses/Blue bodycon 2.JPG', leftView: '/Dresses/Blue bodycon 1.JPG', rightView: '/Dresses/Blue bodycon 2.JPG', description: 'Machine Wash', color: 'Navy Blue', material: 'Rayon' },
    { id: 12, name: 'Women Blue Layered Dress', price: 399, image: '/Dresses/Blue layred 1.JPG', sideView: '/Dresses/Blue layerd 2.JPG', leftView: '/Dresses/Blue layred 1.JPG', rightView: '/Dresses/Blue layerd 2.JPG', description: 'Machine', color: 'Blue', material: 'Silk' },
    { id: 13, name: 'Women Yellow Sweet Heart Neck Dress', price: 399, image: '/Dresses/Yellow sweet 1.JPG', sideView: '/Dresses/Yellow sweet 2.JPG', leftView: '/Dresses/Yellow sweet 1.JPG', rightView: '/Dresses/Yellow sweet 2.JPG', description: 'Machine Wash', color: 'Yellow', material: 'Silk' },
    { id: 14, name: 'Women Orange Layered/Tie-Up Dress ', price: 399, image: '/Dresses/Orange layred 1.JPG', sideView: '/Dresses/Orange layred 2.JPG', leftView: '/Dresses/Orange layred 1.JPG', rightView: '/Dresses/Orange layred 2.JPG', description: 'Machine Wash', color: 'Orange', material: 'Silk' },
    { id: 15, name: 'Women Black Mini Polyester Floral Print Dress', price: 400, image: '/Dresses/Black mini 1.WEBP', sideView: '/Dresses/Black mini 2.WEBP', leftView: '/Dresses/Black mini 1.WEBP', rightView: '/Dresses/Black mini 2.WEBP', description: 'Machine Wash', color: 'Black', material: 'Silk' },
    { id: 16, name: 'Women Rama Mini Polyester Woven Dress', price: 400, image: '/Dresses/Rama mini 1.WEBP', sideView: '/Dresses/Rama mini.WEBP', leftView: '/Dresses/Rama mini 1.WEBP', rightView: '/Dresses/Rama mini.WEBP', description: 'Machine Wash', color: 'Blue with Green Floral Print', material: 'Silk' },
    { id: 17, name: 'Women Purple Mini V-Neck Dress', price: 400, image: '/Dresses/Purple mini 1.WEBP', sideView: '/Dresses/Purple mini 2.WEBP', leftView: '/Dresses/Purple mini 1.WEBP', rightView: '/Dresses/Purple mini 2.WEBP', description: 'Machine Wash', color: 'Purple', material: 'Silk' },
    { id: 18, name: 'Women Peach Knee Lenght Strap Dress', price: 400, image: '/Dresses/peach V neck 1.WEBP', sideView: '/Dresses/Peach V neck 2.WEBP', leftView: '/Dresses/peach V neck 1.WEBP', rightView: '/Dresses/Peach V neck 2.WEBP', description: 'Machine Wash.', color: 'Peach', material: 'Rayon' },
    { id: 19, name: 'Women Blue Above Knee Dress', price: 400, image: '/Dresses/Blue V neck 1.WEBP', sideView: '/Dresses/Blue V neck 2.WEBP', leftView: '/Dresses/Blue V neck 1.WEBP', rightView: '/Dresses/Blue V neck 2.WEBP', description: 'Machine Wash', color: 'Blue', material: 'Rayon' },
    { id: 20, name: 'Women Off White Strap V Neck Dress', price: 400, image: '/Dresses/White V neck 1.WEBP', sideView: '/Dresses/White V neck 2.WEBP', leftView: '/Dresses/White V neck 1.WEBP', rightView: '/Dresses/White V neck 2.WEBP', description: 'Machine Wash', color: 'White', material: 'Rayon' },
    { id: 21, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/obshivka printed 1.WEBP', sideView: '/Dresses/obshivka printed 2.WEBP', leftView: '/Dresses/obshivka printed 1.WEBP', rightView: '/Dresses/obshivka printed 2.WEBP', description: 'Machine Wash ', color: 'Mix of Blue Green white Brown', material: 'Rayon' },
    { id: 22, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/Obshivka blue 1.WEBP', sideView: '/Dresses/Obshivka blue 2.WEBP', leftView: '/Dresses/Obshivka blue 1.WEBP', rightView: '/Dresses/Obshivka blue 2.WEBP', description: 'Machine Wash', color: 'Blue', material: 'Rayon' },
    { id: 23, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/obshivka fit 1.WEBP', sideView: '/Dresses/obshivka fit 1.WEBP', leftView: '/Dresses/obshivka fit 1.WEBP', rightView: '/Dresses/obshivka fit 1.WEBP', description: 'Machine Wash', color: 'Mix of Blue Green white Brown ', material: 'Rayon' },
    { id: 24, name: 'Women Pink Mini Cutout Dress', price: 400, image: '/Dresses/Cutout pink 1.WEBP', sideView: '/Dresses/Cutout pink 2.WEBP', leftView: '/Dresses/Cutout pink 1.WEBP', rightView: '/Dresses/Cutout pink 2.WEBP', description: 'Care : Machine Wash', color: 'Pink', material: 'Rayon' },
    { id: 25, name: 'Women Red Flared Cutout Dress', price: 400, image: '/Dresses/Cutout red 2.WEBP', sideView: '/Dresses/Cutout red 1.WEBP', leftView: '/Dresses/Cutout red 2.WEBP', rightView: '/Dresses/Cutout red 1.WEBP', description: 'Care : Machine Wash', color: 'Red', material: 'Rayon' },
    { id: 26, name: 'Women Purple Flared Boat Neck Dress', price: 400, image: '/Dresses/Cutout purple 1.WEBP', sideView: '/Dresses/Cutout purple 2.WEBP', leftView: '/Dresses/Cutout purple 1.WEBP', rightView: '/Dresses/Cutout purple 2.WEBP', description: 'Care : Machine Wash', color: 'Purple', material: 'Rayon' },
    // Indian Wear (IDs 31-60)
    { id: 31, name: 'Dewdrop Charm Cotton Dress', price: 899, image: '/Dress/Dewdrop Charm Cotton Dress 1.jpg', sideView: '/Dress/Dewdrop Charm Cotton Dress 2.jpg', leftView: '/Dress/Dewdrop Charm Cotton Dress 3.jpg', rightView: '/Dress/Dewdrop Charm Cotton Dress 1.jpg', description: 'Care: DRY CLEAN', color: 'Off White', material: '100% Cotton' },
    { id: 32, name: 'Breezy Grace Mini Dress ', price: 899, image: '/Dress/Breezy Grace Mini Dress 1.jpg', sideView: '/Dress/Breezy Grace Mini Dress 2.jpg', leftView: '/Dress/Breezy Grace Mini Dress 3.jpg', rightView: '/Dress/Breezy Grace Mini Dress 1.jpg', description: 'Care: DRY CLEAN ', color: 'OFF WHITE', material: 'Cotton Linen' },
    { id: 33, name: 'Victorian Cotton Maxi Dress', price: 899, image: '/Dress/Victorian Cotton Maxi Dress 1.jpg', sideView: '/Dress/Victorian Cotton Maxi Dress 2.jpg', leftView: '/Dress/Victorian Cotton Maxi Dress 3.jpg', rightView: '/Dress/Victorian Cotton Maxi Dress 1.jpg', description: 'Care : DRY CLEAN ', color: 'BLACK', material: 'Rayon' },
    { id: 34, name: 'Petal Grace Pink Cotton Dress', price: 899, image: '/Dress/Petal Grace Pink Cotton Dress 1.jpg', sideView: '/Dress/Petal Grace Pink Cotton Dress 2.jpg', leftView: '/Dress/Petal Grace Pink Cotton Dress 3.jpg', rightView: '/Dress/Petal Grace Pink Cotton Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Royal Pink', material: '100% Cotton' },
    { id: 35, name: 'Olive Breeze Cotton Dress', price: 899, image: '/Dress/Olive Breeze Cotton Dress 1.jpg', sideView: '/Dress/Olive Breeze Cotton Dress 2.jpg', leftView: '/Dress/Olive Breeze Cotton Dress 3.jpg', rightView: '/Dress/Olive Breeze Cotton Dress 1.jpg', description: 'Care : DRY CLEAN.', color: 'Olive Green ', material: '100% Cotton' },
    { id: 36, name: 'Ocean Drift Grey Maxi Dress', price: 899, image: '/Dress/Ocean Drift Grey Maxi Dress 1.jpg', sideView: '/Dress/Ocean Drift Grey Maxi Dress 2.jpg', leftView: '/Dress/Ocean Drift Grey Maxi Dress 3.jpg', rightView: '/Dress/Ocean Drift Grey Maxi Dress 1.jpg', description: 'Care : DRY CLEAN .', color: 'Blue with White Floral Print', material: 'Rayon' },
    { id: 37, name: 'Vanilla Breeze Mini Dress', price: 899, image: '/Dress/Vanilla Breeze Mini Dress 1.jpg', sideView: '/Dress/Vanilla Breeze Mini Dress 2.jpg', leftView: '/Dress/Vanilla Breeze Mini Dress 3.jpg', rightView: '/Dress/Vanilla Breeze Mini Dress 1.jpg', description: 'Care : DRY CLEAN .', color: 'Light Pastel Yellow', material: 'Cotton Linen' },
    { id: 38, name: 'Ivory Blossom Cotton Dress', price: 899, image: '/Dress/Ivory Blossom Cotton Dress 1.jpg', sideView: '/Dress/Ivory Blossom Cotton Dress 1.jpg', leftView: '/Dress/Ivory Blossom Cotton Dress 2.jpg', rightView: '/Dress/IMG_20250405_154405_716.jpg', description: 'Care : DRY CLEAN.', color: 'Off White',  material:   'Cotton' },
    { id: 39, name: 'Lilac Breeze Maxi Dress', price: 899, image: '/Dress/Lilac Breeze Maxi Dress 1.jpg', sideView: '/Dress/Lilac Breeze Maxi Dress 2.jpg', leftView: '/Dress/Lilac Breeze Maxi Dress 3.jpg', rightView: '/Dress/Lilac Breeze Maxi Dress 1.jpg', description: 'Care : DRY CLEAN.', color: 'Dusty Rose', material: 'Rayon' },
    { id: 40, name: 'Coastal Charm Blue Maxi Dress', price: 899, image: '/Dress/Coastal Charm Blue Maxi Dress 1.jpg', sideView: '/Dress/Coastal Charm Blue Maxi Dress 2.jpg', leftView: '/Dress/Coastal Charm Blue Maxi Dress 3.jpg', rightView: '/Dress/Coastal Charm Blue Maxi Dress 1.jpg', description: 'Care : DRY CLEAN .', color: 'BLUE', material: 'Rayoncd' },
    { id: 41, name: 'Mint Blossom Floral Maxi Dress', price: 899, image: '/Dress/Mint Blossom Floral Maxi Dress 1.jpg', sideView: '/Dress/Mint Blossom Floral Maxi Dress 2.jpg', leftView: '/Dress/Mint Blossom Floral Maxi Dress 3.jpg', rightView: '/Dress/Mint Blossom Floral Maxi Dress 1.jpg', description: 'Care : DRY CLEAN ', color: 'Mint Green with Vibrant Pink Floral Print', material: 'Rayon' },
    { id: 42, name: 'Sunkissed Lavender Maxi Dress', price: 899, image: '/Dress/Sunkissed Lavender Maxi Dress 1.jpg', sideView: '/Dress/Sunkissed Lavender Maxi Dress 2.jpg', leftView: '/Dress/Sunkissed Lavender Maxi Dress 3.jpg', rightView: '/Dress/Sunkissed Lavender Maxi Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Yellow with Purple Floral Print', material: 'Rayon' },
    { id: 43, name: 'Bohemian Bloom Cotton Dress', price: 900, image: '/Dress/Bohemian Bloom Cotton Dress 1.jpg', sideView: '/Dress/Bohemian Bloom Cotton Dress 2.jpg', leftView: '/Dress/Bohemian Bloom Cotton Dress 3.jpg', rightView: '/Dress/Bohemian Bloom Cotton Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Deep Maroon with Orange , Yellow', material: 'Cotton' },
    { id: 44, name: 'Galaxy White Cotton Maxi', price: 899, image: '/Dress/Galaxy White Cotton Maxi 1.jpg', sideView: '/Dress/Galaxy White Cotton Maxi 2.jpg', leftView: '/Dress/Galaxy White Cotton Maxi 3.jpg', rightView: '/Dress/Galaxy White Cotton Maxi 1.jpg', description: 'Care : DRY CLEAN ', color: 'Off-White with Dark Navy Blue', material: 'Cotton' },
    { id: 45, name: 'Skyline Charm Mini Dress', price: 799, image: '/Dress/Skyline Charm Mini Dress 1.jpg', sideView: '/Dress/Skyline Charm Mini Dress 2.jpg', leftView: '/Dress/Skyline Charm Mini Dress 3.jpg', rightView: '/Dress/Skyline Charm Mini Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Sky Blue with White Floral Prints', material: 'Cotton' },
    { id: 46, name: 'Filo Cotton Dress', price: 999, image: '/Dress/Filo Cotton Dress 1.jpg', sideView: '/Dress/Filo Cotton Dress 2.jpg', leftView: '/Dress/Filo Cotton Dress 3.jpg', rightView: '/Dress/Filo Cotton Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Black', material: 'Silk' },
    { id: 47, name: 'Sarah Haze Cotton Dress', price: 899, image: '/Dress/Sarah Haze Cotton Dress 1.jpg', sideView: '/Dress/Sarah Haze Cotton Dress 2.jpg', leftView: '/Dress/Sarah Haze Cotton Dress 3.jpg', rightView: '/Dress/Sarah Haze Cotton Dress 1.jpg', description: 'Care : DRY CLEAN', color: 'Light Beige Blue Floral Print ', material: 'Cotton Flared' },
    { id: 48, name: 'The White Canvas Dress', price: 799, image: '/Dress/The White Canvas Dress 1.jpg', sideView: '/Dress/The White Canvas Dress 2.jpg', leftView: '/Dress/The White Canvas Dress 3.jpg', rightView: '/Dress/The White Canvas Dress 1.jpg', description: 'Care : DRY CLEAN ', color: 'White ', material: 'Cotton ' },
    { id: 49, name: 'Calming Mist Floral Maxi', price: 899, image: '/Dress/Calming Mist Floral Maxi 1.jpg', sideView: '/Dress/Calming Mist Floral Maxi 2.jpg', leftView: '/Dress/Calming Mist Floral Maxi 3.jpg', rightView: '/Dress/Calming Mist Floral Maxi 1.jpg', description: 'Care : DRY CLEAN ', color: 'Light Pink with floral Print cd', material: 'Cotton' },
    { id: 50, name: 'Posh Delight Green Cotton Maxi', price: 899, image: '/Dress/Posh Delight Green Cotton Maxi 1.jpg', sideView: '/Dress/Posh Delight Green Cotton Maxi 2.jpg', leftView: '/Dress/Posh Delight Green Cotton Maxi 3.jpg', rightView: '/Dress/Posh Delight Green Cotton Maxi 1.jpg', description: 'Care : DRY CLEAN.', color: 'White with Large Green Floral Print', material: 'Cotton' },
    { id: 51, name: 'Artistry Pearl Cotton Maxi', price: 900, image: '/Dress/Artistry Pearl Cotton Maxi 1.jpg', sideView: '/Dress/Artistry Pearl Cotton Maxi 2.jpg', leftView: '/Dress/Artistry Pearl Cotton Maxi 3.jpg', rightView: '/Dress/Artistry Pearl Cotton Maxi 1.jpg', description: 'Care : DRY CLEAN .', color: 'Dark Brown with a peach or Beige Floral Pattern', material: 'Cotton ' },
    // Western Wear (IDs 61-90)
    { id: 61, name: 'Mauve Melody Cosmos Suit Set', price: 1499, image: '/Dress/Dewdrop Charm Cotton Dress 1.jpg', sideView: '/Dress/Dewdrop Charm Cotton Dress 2.jpg', leftView: '/Dress/Dewdrop Charm Cotton Dress 3.jpg', rightView: '/Dress/Dewdrop Charm Cotton Dress 1.jpg', description: 'Care : DRY CLEAN .', color: 'OFF White', material: 'Cotton' },
    { id: 62, name: 'Moss Green Majesty Suit Set', price: 1499, image: '/Kurta Set/moss green majesty 1.jpg', sideView: '/Kurta Set/moss green majesty 2.jpg', leftView: '/Kurta Set/moss green majesty 3.jpg', rightView: '/Kurta Set/moss green majesty 1.jpg', description: 'Care : DRY CLEAN.', color: 'Olive Green ', material: 'Cosmos' },
    { id: 63, name: 'Mimosa Luxe Yellow Suit Set', price: 1499, image: '/Kurta Set/mimosa luxe yellow 1.jpg', sideView: '/Kurta Set/mimosa luxe yellow 2.jpg', leftView: '/Kurta Set/mimosa luxe yellow 3.jpg', rightView: '/Kurta Set/mimosa luxe yellow 1.jpg', description: 'Care : DRY CLEAN ', color: 'Yellow', material: 'Cosmos [Embroidered Work]' },
    { id: 64, name: 'Molten Magic Orange Suit Set', price: 1499, image: '/Kurta Set/molten magic orange 1.jpg', sideView: '/Kurta Set/molten magic orange 2.jpg', leftView: '/Kurta Set/molten magic orange 3.jpg', rightView: '/Kurta Set/molten magic orange 1.jpg', description: 'Care : DRY CLEAN', color: 'Orange ', material: 'Cosmos [Embroidered Work]' },
    { id: 65, name: 'Samara Green Heavy Embroidered', price: 1599, image: '/Kurta Set/samara green heavy embroidered 1.jpg', sideView: '/Kurta Set/samara green heavy embroidered 2.jpg', leftView: '/Kurta Set/samara green heavy embroidered 3.jpg', rightView: '/Kurta Set/samara green heavy embroidered 1.jpg', description: 'Care : DRY CLEAN', color: 'Royal Green', material: 'Georgette' },
    { id: 66, name: 'Samaira Ivory Cotton Suit Set', price: 1199, image: '/Kurta Set/samara ivory cotton 1.jpg', sideView: '/Kurta Set/samara ivory cotton 1.jpg', leftView: '/Kurta Set/samara ivory cotton 2.jpg', rightView: '/Kurta Set/samara ivory cotton 3.jpg', description: 'Care : DRY CLEAN', color: 'Off White with Green and Brown Floral Print', material: 'Cotton' },
    { id: 67, name: 'Spring Olive Cotton Suit Set', price: 1199, image: '/Kurta Set/spring olive cotton 1.jpg', sideView: '/Kurta Set/spring olive cotton 2.jpg', leftView: '/Kurta Set/spring olive cotton 3.jpg', rightView: '/Kurta Set/spring olive cotton 1.jpg', description: 'Care : DRY CLEAN ', color: 'Light Green with White Floral Print', material: '100% Cotton' },
    { id: 68, name: 'Zeenat Pink Muslin Suit Set', price: 1199, image: '/Kurta Set/zeenat pink mulsin 1.jpg', sideView: '/Kurta Set/zeenat pink mulsin 2.jpg', leftView: '/Kurta Set/zeenat pink mulsin 3.jpg', rightView: '/Kurta Set/zeenat pink mulsin 1.jpg', description: 'Care : DRY CLEAN', color: 'Bright Pinkl ', material: 'Muslin' },
    { id: 69, name: 'Navy Elegance Cotton Suit Set', price: 1099, image: '/Kurta Set/navy elegance cotton 1.jpg', sideView: '/Kurta Set/navy elegance cotton 2.jpg', leftView: '/Kurta Set/navy elegance cotton 3.jpg', rightView: '/Kurta Set/navy elegance cotton 1.jpg', description: 'Care : DRY CLEAN', color: 'Navy Blue with Floral Print', material: 'Cotton' },
    { id: 70, name: 'Crimson Blush Kurta Set', price: 1499, image: '/Kurta Set/crimson blush kurta 1.jpg', sideView: '/Kurta Set/crimson blush kurta 2.jpg', leftView: '/Kurta Set/crimson blush kurta 3.jpg', rightView: '/Kurta Set/crimson blush kurta 1.jpg', description: 'Care : DRY CLEAN', color: 'Red ', material: 'Crushed' },
    { id: 71, name: 'Anamika Muslin Suit Set', price: 1299, image: '/Kurta Set/Anamika muslin 1.jpg', sideView: '/Kurta Set/Anamika muslin 2.jpg', leftView: '/Kurta Set/Anamika muslin 3.jpg', rightView: '/Kurta Set/Anamika muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'Deep Maroon ', material: 'Muslin' },
    { id: 72, name: 'Advika Ivory Cotton Suit Set', price: 1299, image: '/Kurta Set/advika ivory cotton 1.jpg', sideView: '/Kurta Set/advika ivory cotton 2.jpg', leftView: '/Kurta Set/advika ivory cotton 3.jpg', rightView: '/Kurta Set/advika ivory cotton 1.jpg', description: 'Care : DRY CLEAN ', color: 'Off White with Floral Print', material: 'cotton' },
    { id: 73, name: 'Vintage Charm Cotton Suit Set', price: 1199, image: '/Kurta Set/vintage charm cotton 1.jpg', sideView: '/Kurta Set/vintage charm cotton 2.jpg', leftView: '/Kurta Set/vintage charm cotton 3.jpg', rightView: '/Kurta Set/vintage charm cotton 1.jpg', description: 'Care : DRY CLEAN', color: 'Slate Grey with Floral Print', material: 'Cotton' },
    { id: 74, name: 'Shadow Grace Cotton Suit Set', price: 1299, image: '/Kurta Set/shadow grace cotton 1.jpg', sideView: '/Kurta Set/shadow grace cotton 2.jpg', leftView: '/Kurta Set/shadow grace cotton 3.jpg', rightView: '/Kurta Set/shadow grace cotton 1.jpg', description: 'Care : DRY CLEAN ', color: 'Black', material: 'Cotton' },
    { id: 75, name: 'Abeer Cotton Suit Set', price: 1099, image: '/Kurta Set/abeer cotton 1.jpg', sideView: '/Kurta Set/abeer cotton 2.jpg', leftView: '/Kurta Set/abeer cotton 3.jpg', rightView: '/Kurta Set/abeer cotton 1.jpg', description: 'Care : DRY CLEAN', color: 'Royal Pink ', material: 'Cotton' },
    { id: 76, name: 'Kesariya Cosmos Kurta Set', price: 1499, image: '/Kurta Set/Kesariya cosmos kurta 1.jpg', sideView: '/Kurta Set/Kesariya cosmos kurta 2.jpg', leftView: '/Kurta Set/Kesariya cosmos kurta 3.jpg', rightView: '/Kurta Set/Kesariya cosmos kurta 1.jpg', description: 'Care : DRY CLEAN ', color: 'Sunny Yellow with Pink Tie-Dye Pattern', material: 'Crush Cosmos' },
    { id: 77, name: 'Shivanjali Silk Suit Set', price: 1499, image: '/Kurta Set/Shivanjali silk 1.jpg', sideView: '/Kurta Set/Shivanjali silk 2.jpg', leftView: '/Kurta Set/Shivanjali silk 3.jpg', rightView: '/Kurta Set/Shivanjali silk 1.jpg', description: 'Care : DRY CLEAN', color: 'Aqua Blue with Gold and Peach Motifs', material: 'Banarasi Silk' },
    { id: 78, name: 'Mystic Waves Muslin Suit Set', price: 1299, image: '/Kurta Set/Mystic waves muslin 1.jpg', sideView: '/Kurta Set/Mystic waves muslin 2.jpg', leftView: '/Kurta Set/Mystic waves muslin 3.jpg', rightView: '/Kurta Set/Mystic waves muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'Charcoal Grey with Paisley and Floral print', material: 'Muslin' },
    { id: 79, name: 'Regal Shadow Black Kurta Set', price: 1399, image: '/Kurta Set/Regal shadow black kurta 1.jpg', sideView: '/Kurta Set/Regal shadow black kurta 2.jpg', leftView: '/Kurta Set/Regal shadow black kurta 3.jpg', rightView: '/Kurta Set/Regal shadow black kurta 1.jpg', description: 'Care : DRY CLEAN', color: 'Shadow Black', material: 'Chanderi' },
    { id: 80, name: 'Aadhya Pink Muslin Suit Set', price: 1299, image: '/Kurta Set/Aadhya pink muslin 1.jpg', sideView: '/Kurta Set/Aadhya pink muslin 2.jpg', leftView: '/Kurta Set/Aadhya pink muslin 3.jpg', rightView: '/Kurta Set/Aadhya pink muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'Pink', material: 'Muslin' },
    { id: 81, name: 'Saadhvi Muslin Suit Set', price: 1299, image: '/Kurta Set/Saadhvi muslin 1.jpg', sideView: '/Kurta Set/Saadhvi muslin 2.jpg', leftView: '/Kurta Set/Saadhvi muslin 3.jpg', rightView: '/Kurta Set/Saadhvi muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'A Mix of black pink ivory and maroon  ', material: 'Muslin' },
    { id: 82, name: 'Roshni Pink Silk Kurta Set', price: 1299, image: '/Kurta Set/Roshni pink silk kurta 1.jpg', sideView: '/Kurta Set/Roshni pink silk kurta 2.jpg', leftView: '/Kurta Set/Roshni pink silk kurta 3.jpg', rightView: '/Kurta Set/Roshni pink silk kurta 1.jpg', description: 'Care : DRY CLEAN', color: 'Royal Pink', material: 'Silk' },
    { id: 83, name: 'Electric Lush Heavy Embroidered Suit Set', price: 1499, image: '/Kurta Set/Electric lush heavy embroidered 1.jpg', sideView: '/Kurta Set/Electric lush heavy embroidered 2.jpg', leftView: '/Kurta Set/Electric lush heavy embroidered 3.jpg', rightView: '/Kurta Set/Electric lush heavy embroidered 1.jpg', description: 'Care : DRY CLEAN', color: 'intricate multicoloured embroidery Gold Pink Green Red ', material: 'Crepe [Heavy Embroidery]' },
    { id: 84, name: 'Sofia Brown Heavy Embroidered Suit Set', price: 1499, image: '/Kurta Set/sofia brown heavy embroidered 1.jpg', sideView: '/Kurta Set/sofia brown heavy embroidered 2.jpg', leftView: '/Kurta Set/sofia brown heavy embroidered 3.jpg', rightView: '/Kurta Set/sofia brown heavy embroidered 1.jpg', description: 'Care : DRY CLEAN', color: 'Warm Brown', material: 'Crepe [Heavy Embroidery]' },
    { id: 85, name: 'Rutvik Silk Suit Set', price: 1299, image: '/Kurta Set/Rutvik silk 1.jpg', sideView: '/Kurta Set/Rutvik silk 2.jpg', leftView: '/Kurta Set/Rutvik silk 3.jpg', rightView: '/Kurta Set/Rutvik silk 1.jpg', description: 'Care : DRY CLEAN', color: 'Rich Golden', material: 'Crepe Silk' },
    { id: 86, name: 'Pastel Grow Co-Ord Set', price: 1399, image: '/Kurta Set/pastel grow co-ords set 1.jpg', sideView: '/Kurta Set/pastel grow co-ords set 2.jpg', leftView: '/Kurta Set/pastel grow co-ords set 3.jpg', rightView: '/Kurta Set/pastel grow co-ords set 1.jpg', description: 'Care : DRY CLEAN', color: 'Royal Pink', material: 'Inner Fabric: Crepe   / Jacket Fabric : Silk ' },
    { id: 87, name: 'Vasana Silk Worked Kurta Set', price: 1599, image: '/Kurta Set/Vasana silk worked kurta 1.jpg', sideView: '/Kurta Set/Vasana silk worked kurta 2.jpg', leftView: '/Kurta Set/Vasana silk worked kurta 3.jpg', rightView: '/Kurta Set/Vasana silk worked kurta 1.jpg', description: 'Care : DRY CLEAN', color: 'Red', material: 'Silk' },
    { id: 88, name: 'Mermaid Wave Muslin Suit Set', price: 1299, image: '/Kurta Set/mermaid wave muslin 1.jpg', sideView: '/Kurta Set/mermaid wave muslin 2.jpg', leftView: '/Kurta Set/mermaid wave muslin 3.jpg', rightView: '/Kurta Set/mermaid wave muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'Teal Blue', material: 'Muslin' },
    { id: 89, name: 'Paakhi Yellow Muslin Suit Set', price: 1099, image: '/Kurta Set/paakhi yellow muslin 1.jpg', sideView: '/Kurta Set/paakhi yellow muslin 2.jpg', leftView: '/Kurta Set/paakhi yellow muslin 3.jpg', rightView: '/Kurta Set/paakhi yellow muslin 1.jpg', description: 'Care : DRY CLEAN', color: 'Yellow', material: 'Muslin' },
    { id: 90, name: 'Swan Pink Muslin Suit Set', price: 1099, image: '/Kurta Set/swan pink muslin 1.jpg', sideView: '/Kurta Set/swan pink muslin 2.jpg', leftView: '/Kurta Set/swan pink muslin 1.jpg', rightView: '/Kurta Set/swan pink muslin 2.jpg', description: 'Care : DRY CLEAN', color: 'Pink', material: 'Muslin' },
  ];

  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/product/${product.id}`;
    const message = `I'd like to order the following from Girls Fashion Trends:\n\n` +
                    `Product: ${product.name}\n` +
                    `Price: ₹${product.price}\n` +
                    `Size: ${selectedSize}\n` +
                    `Quantity: ${quantity}\n` +
                    `Color: ${product.color}\n` +
                    `Material: ${product.material}\n` +
                    `Link: ${shareUrl}`;
    const whatsappUrl = `https://wa.me/+918306526811?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-4" />
          <div className="grid grid-cols-3 gap-4">
            <img src={product.sideView} alt="Side View" className="w-full h-32 object-cover rounded-lg" />
            <img src={product.leftView} alt="Left View" className="w-full h-32 object-cover rounded-lg" />
            <img src={product.rightView} alt="Right View" className="w-full h-32 object-cover rounded-lg" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">₹{product.price}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {['M', 'L', 'XL', '2XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-full px-4 py-2 ${
                    selectedSize === size ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'
                  } hover:bg-pink-500 hover:text-white transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 px-3 py-1 rounded-l-full hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded-r-full hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.812-1.48-1.77-1.48-2.91 0-.634.233-1.218.652-1.697.42-.477.956-.766 1.535-.788.58-.022 1.13.198 1.63.57.501.373 1.883 1.25 1.883 2.975 0 1.726-1.883 3.447-1.62 3.595.263.148 1.547-.074 2.39-.694.846-.62 1.49-1.39 1.667-1.64.177-.248.099-.471-.074-.644zM12 0C5.373 0 0 5.373 0 12c0 2.137.561 4.248 1.62 6.095L0 24l5.904-1.62A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.182c-1.978 0-3.84-.561-5.447-1.535L5.03 21.18l.533-1.523A10.073 10.073 0 013.818 12 10.182 10.182 0 0112 1.818c5.635 0 10.182 4.547 10.182 10.182S17.635 22.182 12 22.182z"/>
            </svg>
            Order Now
          </button>
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-600"><span className="font-semibold">Color:</span> {product.color}</p>
            <p className="text-gray-600"><span className="font-semibold">Material:</span> {product.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;