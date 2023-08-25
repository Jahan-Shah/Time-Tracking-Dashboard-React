import ElipsisIcon from "assets/icon-ellipsis.svg";
import { useEffect, useState } from "react";
import "./TrackingItem.css";

export default function TrackingItem({ selectedDuration }) {
  const [jsonData, setJsonData] = useState([]);
  const [dynamicIcons, setDynamicIcons] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const icons = {};
    jsonData.forEach((item) => {
      import(`assets/icon-${getTitle(item)}.svg`)
        .then((module) => {
          icons[getTitle(item)] = module.default;
          setDynamicIcons({ ...icons });
        })
        .catch((error) => console.error("Error loading the icon", error));
    });
  }, [jsonData]);

  const getTime = (item) => {
    if (selectedDuration === "Day") {
      return {
        current: item.timeframes.daily.current,
        previous: item.timeframes.daily.previous,
      };
    } else if (selectedDuration === "Week") {
      return {
        current: item.timeframes.weekly.current,
        previous: item.timeframes.weekly.previous,
      };
    } else if (selectedDuration === "Month") {
      return {
        current: item.timeframes.monthly.current,
        previous: item.timeframes.monthly.previous,
      };
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data from JSON: ", error);
    }
  };

  const getTitle = (item) => {
    const className =
      item.title.charAt(0).toLowerCase() + item.title.substring(1);
    return className.replace(/\s+/g, "");
  };

  return (
    <>
      <div className="item__container">
        {jsonData.map((item, index) => (
          <div className={`item ${getTitle(item)}`} key={index}>
            <img
              src={dynamicIcons[getTitle(item)]}
              alt="tracking icon"
              className="item__svg"
            />
            <div className="item__content">
              <div className="heading">
                <h3 className="item__title">{item.title}</h3>
                <img src={ElipsisIcon} alt="ellipsis" className="ellipsis" />
              </div>
              <div className="item__content-text">
                <h2 className="item__hours">{getTime(item).current}hrs</h2>
                <p className="item__lasthr">
                  last {selectedDuration} - {getTime(item).previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
