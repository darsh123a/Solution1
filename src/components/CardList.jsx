import React, { useState } from "react";
import Card from "./Card";
import MainHeader from "./MainHeader";
import data from "./data/data.json";

const CardList = () => {
  const [originalData, setOriginalData] = useState(data);
  const [dataList, setDataList] = React.useState(data);

  function RemoveItem(index) {
    const filtered = dataList.filter((_, i) => i !== index);
    setDataList(filtered);
    setOriginalData(filtered);
  }
  function ToggleActive(index) {
    const updated = dataList.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: !item.isActive };
      } else {
        return item;
      }
    });
    setOriginalData(updated);
    setDataList(updated);
  }
  function Filter(base) {
    switch (base) {
      case "all":
        setDataList(originalData);
        break;

      case "active":
        setDataList(originalData.filter((item) => item.isActive));
        break;

      case "inactive":
        console.log("Filter called with base:", base);

        setDataList(originalData.filter((item) => !item.isActive));
        break;

      default:
        setDataList(originalData);
    }
  }

  return (
    <>
      <MainHeader Filter={Filter} />

      <div className=" grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 py-15 h-auto">
        {dataList.map((item, index) => {
          return (
            <Card
              key={index}
              data={item}
              ToggleActive={ToggleActive}
              RemoveItem={RemoveItem}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
