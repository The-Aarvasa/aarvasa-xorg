import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/PropertyBrief/About';
import { Explore } from '../components/PropertyBrief/Explore';
import Slider from '../components/About/Slider';
import Sale from '../components/PropertyBrief/Sale';
import Photos from '../components/PropertyBrief/Photos';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const res = await axios.get(`https://aarvasa-systemd.onrender.com/api/listings/${id}`);
        console.log(res.data);
        setData(res.data.data[0]); // assuming API returns { status: true, data: [property] }
      } catch (err) {
        console.error("Error fetching property:", err);
      }
      finally{
        setLoader(false);
      }
    };

    getData();
  }, [id]);

  if (!data) return <Loader></Loader>;

  return (
    loader ? <Loader></Loader> :<>
      <div className="bg-orange-50 pt-[60px] mb-[20px]">
        <Photos data={data} />
        <Sale
          address={data.location}
          price={data.price}
          priceD={data.priceD}
          unit={data.unit}
          bed={data.bedrooms}
          bath={data.bathrooms}
          area={data.carpetArea}
          transactionType={data.transactionType}
        />
        <About data={data} />
        <Explore data={data} coordinates={data.coordinates} />
      </div>
      <Slider />
    </>
  );
};

export default PropertyDetails;
