import React, { useEffect, useState } from "react";
import Banner from "./../layout/Banner";
import axios from "axios";
import { MobileDeviceTypes } from "../types";

// Define the expected API response structure
interface ApiResponse {
  mobiledevice: MobileDeviceTypes[];
}

const Service: React.FC = () => {
  // State variables
  const [items, setItems] = useState<MobileDeviceTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiserver = "http://localhost:5000/mobiledevice";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(apiserver);
        console.log('API Response:', response.data); // Log the response
        setItems(response.data); // Set items to the array from response
      } catch (err) {
        setError(`Failed to fetch data: ${err instanceof Error ? err.message : "Unknown error"}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content">
    <Banner
      title="Service"
      desc="Dolor dolor magna esse laborum. Elit amet anim ullamco irure non. Ea esse ut voluptate pariatur deserunt magna nisi nostrud. Nisi labore non pariatur enim non et Lorem occaecat elit quis id amet aliqua consectetur. Ad non veniam in in dolore ad anim. Nisi aliquip dolore duis enim do. Consectetur nisi mollit aliquip amet sunt anim dolor qui consequat aliqua. Veniam minim ad ipsum ad aute voluptate occaecat minim proident laboris."
    />
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="mb-4 p-2 border border-gray-200 rounded"
              >
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>
                  {item.detail?.color ?? "N/A"} |{" "}<br />
                  {item.detail?.capacity ?? item.detail?.["Capacity"] ?? "N/A"} |{" "}<br />
                  {item.detail?.price ?? "N/A"} |{" "}<br />
                  {item.detail?.["Case Size"] ?? "N/A"} |{" "}<br />
                  {item.detail?.["Strap Colour"] ?? item.detail?.["Color"] ?? "N/A"} |{" "}
                  <br />
                  {item.detail?.["Description"] ?? "N/A"}<br />
                  <strong>Year</strong>: {item.detail?.year ?? "N/A"}
                  <br />
                  <strong>Hard disk size</strong> {item.detail?.["Hard disk size"] ?? "N/A"}
                  <br />
                  <strong>generation</strong>  {item.detail?.generation ?? "N/A"}
                  <br />
                  <strong>Screen size</strong> {item.detail?.["Screen size"] ?? "N/A"}
                </p>
              </li>
            ))}
          </ul>
    </div>  
  </div>
  );
};

export default Service;
