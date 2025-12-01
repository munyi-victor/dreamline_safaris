import hotel11 from "../public/images/hotels/hotel11.jpg"
import hotel12 from "../public/images/hotels/hotel12.jpg"
import hotel13 from "../public/images/hotels/hotel13.jpg"
import hotel14 from "../public/images/hotels/hotel14.jpg"
import hotel21 from "../public/images/hotels/hotel21.jpg"
import hotel22 from "../public/images/hotels/hotel22.jpg"
import hotel23 from "../public/images/hotels/hotel23.jpg"
import hotel24 from "../public/images/hotels/hotel24.jpg"
import hotel31 from "../public/images/hotels/hotel31.jpg"
import hotel32 from "../public/images/hotels/hotel32.jpg"
import hotel33 from "../public/images/hotels/hotel33.jpg"
import hotel34 from "../public/images/hotels/hotel34.jpg"
import hotel41 from "../public/images/hotels/hotel41.jpg"
import hotel42 from "../public/images/hotels/hotel42.jpg"
import hotel43 from "../public/images/hotels/hotel43.jpg"
import hotel44 from "../public/images/hotels/hotel44.jpg"
import hotel51 from "../public/images/hotels/hotel51.jpg"
import hotel52 from "../public/images/hotels/hotel52.jpg"
import hotel53 from "../public/images/hotels/hotel53.jpg"
import hotel54 from "../public/images/hotels/hotel54.jpg"
import hotel61 from "../public/images/hotels/hotel61.jpg"
import hotel62 from "../public/images/hotels/hotel62.jpg"
import hotel63 from "../public/images/hotels/hotel63.jpg"
import hotel64 from "../public/images/hotels/hotel64.jpg"
import hotel71 from "../public/images/hotels/hotel71.jpg"
import hotel72 from "../public/images/hotels/hotel72.jpg"
import hotel73 from "../public/images/hotels/hotel73.jpg"
import hotel74 from "../public/images/hotels/hotel74.jpg"

import testImg1 from "../public/images/image1.jpeg"
import testImg2 from "../public/images/image2.jpeg"
import testImg3 from "../public/images/image3.jpeg"

import hotelOut from "../public/images/hotels/hotelOut.jpg"

export const allImages = {
  hotel11,
  hotel12,
  hotel13,
  hotel14,
  hotel21,
  hotel22,
  hotel23,
  hotel24,
  hotel31,
  hotel32,
  hotel33,
  hotel34,
  hotel41,
  hotel42,
  hotel43,
  hotel44,
  hotel51,
  hotel52,
  hotel53,
  hotel54,
  hotel61,
  hotel62,
  hotel63,
  hotel64,
  hotel71,
  hotel72,
  hotel73,
  hotel74,
  testImg1,
  testImg2,
  testImg3,
  hotelOut
}

export const hotel1Data = {
  "_id" : "Sxeh6fQM0rZpqUdW4hAnAw",
  "name": "Beams Hotel",
  "address": "Junction Mfangano Street CBD",
  "contact" :"+254722609698",
  "city" : "Nairobi",
  "pricePerNight": "5000",
  "ammenities":["Free WiFi", "Ample Parking", "Hot Shower"],
  "images": [hotel11, hotel12, hotel13, hotel14],
}

export const hotel2Data = {
  "_id" : "yN38iyOIAAjv3U5TECWoKg",
  "name": "JW Mariot Hotel",
  "address": "GTC Buildings Westlands",
  "contact" :"+254708905136",
  "city" : "Nairobi",
  "pricePerNight": "10000",
  "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
  "images": [hotel21, hotel22, hotel23, hotel24],
}

export const hotel3Data = {
  "_id" : "a4LnBEDkTrwg0GbMTxo3OQ",
  "name": "Makasembo Apmts",
  "address": "Makasembo Housing by Lapfund",
  "contact" :"+254742729276",
  "city" : "Kisumu",
  "pricePerNight": "5000",
  "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
  "images": [hotel51, hotel62, hotel63, hotel64],
}

export const hotels = [
  hotel1Data,
  hotel2Data,
  hotel3Data
]

export const roomsData = [
  {
    "_id" : "nsWMLCbDjDpdXjHpw7ySCw",
    "hotel": hotel1Data,
    "roomType": "Double Bed",
    "pricePerNight": "49",
    "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
    "images": [hotel11, hotel12, hotel13, hotel14],
    "isAvailable": true,
  },
  {
    "_id" : "utQIpEqK60LNH4aGZF9cqQ",
    "hotel": hotel3Data,
    "roomType": "Single Bed",
    "pricePerNight": "49",
    "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
    "images": [hotel51, hotel62, hotel63, hotel64],
    "isAvailable": true,
  },
  {
    "_id" : "mu4gOHZhKA6zrellK8J7pg",
    "hotel": hotel2Data,
    "roomType": "Double Bed",
    "pricePerNight": "99",
    "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
    "images": [hotel21, hotel22, hotel23, hotel24],
    "isAvailable": true,
  },
  {
    "_id" : "slpKwQmCOaRAqhKnAs2k1w",
    "hotel": hotel1Data,
    "roomType": "Single Bed",
    "pricePerNight": "5000",
    "ammenities" : ["Free WiFi", "Hot Shower", "Ample Parking"],
    "images": [hotel51, hotel52, hotel53, hotel54],
    "isAvailable": true,
  },
]

export const exclusiveOffers = [
  {
    _id:1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast.",
    priceOff: 24,
    expiryDate: "Nov 30",
    image: "/images/hotels/hotel11.jpg"
  },
  {
    _id:2,
    title: "Luxury Retreat",
    description: "Book 30 days in advance and save on your at any of our luxury properties.",
    priceOff: 20,
    expiryDate: "Nov 30",
    image: "/images/hotels/hotel62.jpg"
  },
  {
    _id:3,
    title: "Romantic Gateway",
    description: "Special couples package including spa and treatment.",
    priceOff: 25,
    expiryDate: "Dec 5",
    image: "/images/hotels/hotel42.jpg"
  },
]

export const testimonials = [
  {
    id: 1,
    name:"Jameson Carlos",
    address: "London, UK",
    image: testImg1,
    rating: 5,
    review: "I've used many booking platforms before, but none of them comapre to the personalised experience and the attention to detail that Dreamline Safaris provides."
  },
  {
    id: 2,
    name:"Chimedu Abuga",
    address: "Abuja, Nigeria",
    image: testImg2,
    rating: 4,
    review: "Amazing services! I always find the best luxury hotels through Dreamline Safaris. Their recommendatiions never disappoint!"
  },
  {
    id: 3,
    name:"Saleem Muhammad",
    address: "Dubai, UAE",
    image: testImg3,
    rating: 5,
    review: "Dreamline Safaris exceeded my expectations! Thier booking process was unmatched. I highly recommend them."
  },
]

export const hotelCommonData = [
  {
    iconName: "DoorOpen",
    main:"Easy check-in process throughout all our hotels.",
    description:"All our clients rate our check-in proces as the best."
  },
  {
    iconName: "Sparkles",
    main:"Well maintained and clean rooms.",
    description:"All our rooms are constantly maintained and thoroughly cleaned by professionals."
  },
  {
    iconName: "BedDouble",
    main:"Full furnished rooms.",
    description:"All our rooms are full equipped with all apliances and furniture our clients may need."
  },
  {
    iconName: "Headphones",
    main:"Caring and considerate customer service.",
    description:"Our clients are satisfied with our caring and professional customer service."
  },
]

export const bookings = [
  {
    bookingID: "BK-100",
    guest:"John Mwangi",
    hotel:"Safari Blue Hotel",
    roomType:"Deluxe Room",
    checkIn:"2025-11-30",
    checkOut:"2025-12-03",
    amount:"200",
    status:"Paid",
  },
    {
    bookingID: "BK-101",
    guest:"Grace Johnson",
    hotel:"Safari Blue Hotel",
    roomType:"Executive Suite",
    checkIn:"2025-11-30",
    checkOut:"2025-12-03",
    amount:"300",
    status:"Paid",
  },
  {
    bookingID: "BK-102",
    guest:"Sarah Kimani",
    hotel:"The Palm Resort",
    roomType:"Standard Room",
    checkIn:"2025-11-30",
    checkOut:"2025-12-03",
    amount:"125",
    status:"Pending",
  },
  {
    bookingID: "BK-103",
    guest:"Rooney Otieno",
    hotel:"Royal Hills Lodge",
    roomType:"Executive Suite",
    checkIn:"2025-11-30",
    checkOut:"2025-12-03",
    amount:"300",
    status:"Paid",
  },
  {
    bookingID: "BK-104",
    guest:"Peter Morris",
    hotel:"Ocean Breeze Resort",
    roomType:"Executive Suite",
    checkIn:"2025-11-30",
    checkOut:"2025-12-03",
    amount:"250",
    status:"Cancelled",
  },
]