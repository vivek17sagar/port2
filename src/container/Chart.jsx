import React from "react";

const Chart = ({ dataSet, activeSkill }) => {
  console.log(dataSet);
  return (
    <>
      {dataSet[`${activeSkill}`].map((item, index) => {
        return (
          <div>
            <div className="flex justify-between">
              <div className={`mb-1 text-base font-medium dark:text-black`}>
                {item?.name}
              </div>
              <div className={`mb-1 text-base font-medium dark:text-black`}>
                {item.percentage}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
              <div
                className={`h-2.5 rounded-full ${item.color}`}
                style={{ width: item?.percentage }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Chart;
