import React, { useState, useEffect } from "react";
// import "./style.css";
import Chart from "react-google-charts";

const CustomApp = () => {
  let availableCountries = new Map([
    ["WORLDWIDE", { woeid: 1, code: "" }],
    ["ALGERIA", { woeid: 23424740, code: "DZ" }],
    ["ARGENTINA", { woeid: 23424747, code: "AR" }],
    ["AUSTRALIA", { woeid: 23424748, code: "AU" }],
    ["AUSTRIA", { woeid: 23424750, code: "AT" }],
    ["BAHRAIN", { woeid: 23424753, code: "BH" }],
    ["BELARUS", { woeid: 23424765, code: "BY" }],
    ["BELGIUM", { woeid: 23424757, code: "BE" }],
    ["BRAZIL", { woeid: 23424768, code: "BR" }],
    ["CANADA", { woeid: 23424775, code: "CA" }],
    ["CHILE", { woeid: 23424782, code: "CL" }],
    ["COLOMBIA", { woeid: 23424787, code: "CO" }],
    ["DENMARK", { woeid: 23424796, code: "DK" }],
    ["DOMINICAN REPUBLIC", { woeid: 23424800, code: "DO" }],
    ["ECUADOR", { woeid: 23424801, code: "EC" }],
    ["EGYPT", { woeid: 23424802, code: "EG" }],
    ["FRANCE", { woeid: 23424819, code: "FR" }],
    ["GERMANY", { woeid: 23424829, code: "DE" }],
    ["GHANA", { woeid: 23424824, code: "GH" }],
    ["GREECE", { woeid: 23424833, code: "GR" }],
    ["GUATEMALA", { woeid: 23424834, code: "GT" }],
    ["INDIA", { woeid: 23424848, code: "IN" }],
    ["INDONESIA", { woeid: 23424846, code: "ID" }],
    ["IRELAND", { woeid: 23424803, code: "IE" }],
    ["ISRAEL", { woeid: 23424852, code: "IL" }],
    ["ITALY", { woeid: 23424853, code: "IT" }],
    ["JAPAN", { woeid: 23424856, code: "JP" }],
    ["JORDAN", { woeid: 23424860, code: "JO" }],
    ["KENYA", { woeid: 23424863, code: "KE" }],
    ["KOREA", { woeid: 23424868, code: "KR" }],
    ["KUWAIT", { woeid: 23424870, code: "KW" }],
    ["LATVIA", { woeid: 23424874, code: "LV" }],
    ["LEBANON", { woeid: 23424873, code: "LB" }],
    ["MALAYSIA", { woeid: 23424901, code: "MY" }],
    ["MEXICO", { woeid: 23424900, code: "MX" }],
    ["NETHERLANDS", { woeid: 23424909, code: "NL" }],
    ["NEW ZEALAND", { woeid: 23424916, code: "NZ" }],
    ["NIGERIA", { woeid: 23424908, code: "NG" }],
    ["NORWAY", { woeid: 23424910, code: "NO" }],
    ["OMAN", { woeid: 23424898, code: "OM" }],
    ["PAKISTAN", { woeid: 23424922, code: "PK" }],
    ["PANAMA", { woeid: 23424924, code: "PA" }],
    ["PERU", { woeid: 23424919, code: "PE" }],
    ["PHILIPPINES", { woeid: 23424934, code: "PH" }],
    ["POLAND", { woeid: 23424923, code: "PL" }],
    ["PORTUGAL", { woeid: 23424925, code: "PT" }],
    ["PUERTO RICO", { woeid: 23424935, code: "PR" }],
    ["QATAR", { woeid: 23424930, code: "QA" }],
    ["RUSSIA", { woeid: 23424936, code: "RU" }],
    ["SAUDI ARABIA", { woeid: 23424938, code: "SA" }],
    ["SINGAPORE", { woeid: 23424948, code: "SG" }],
    ["SOUTH AFRICA", { woeid: 23424942, code: "ZA" }],
    ["SPAIN", { woeid: 23424950, code: "ES" }],
    ["SWEDEN", { woeid: 23424954, code: "SE" }],
    ["SWITZERLAND", { woeid: 23424957, code: "CH" }],
    ["THAILAND", { woeid: 23424960, code: "TH" }],
    ["TURKEY", { woeid: 23424969, code: "TR" }],
    ["UKRAINE", { woeid: 23424976, code: "UA" }],
    ["UNITED ARAB EMIRATES", { woeid: 23424738, code: "AE" }],
    ["UNITED KINGDOM", { woeid: 23424975, code: "GB" }],
    ["UNITED STATES", { woeid: 23424977, code: "US" }],
    ["VENEZUELA", { woeid: 23424982, code: "VE" }],
    ["VIETNAM", { woeid: 23424984, code: "VN" }],
  ]);
  return (
    <>
      <h1>Google Charts Example</h1>
      <GoogleChart />
    </>
  );
};

export default CustomApp;

const GoogleChart: React.FC = () => {
  return (
    <>
      <div className="App">
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="GeoChart"
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
          columns={[
            {
              type: "string",
              label: "location",
            },
            {
              type: "number",
              label: "color",
            },
            {
              type: "string",
              role: "tooltip",
            },
          ]}
          rows={getData()}
          options={{
            displayMode: "regions",
            datalessRegionColor: "#fff",
            backgroundColor: "#dff1ff",
            tooltip: {
              isHtml: true,
            },
            colorAxis: {
              colors: randomcolor({
                count: initialdata.length,
                luminosity: "light",
              }),
              // colors: ["#D132D6", "#2F3245", "#D13200"],
              minValue: 0,
              maxValue: initialdata.length,
            },
            legend: "none",
          }}
        />
      </div>
    </>
  );
};
