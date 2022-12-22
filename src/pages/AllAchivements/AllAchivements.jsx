import React from "react";
import NavBar from "../../components/NavBar";
import EachAch from "../../components/EachAch";

      var achiveDetails = [
        { title: "Winner of SIH 2022 Software Edition." },
        { title: "Qualified for an International Competion COFAS" },
        { title: "Contrubuted in our College wedsite" },
      ];

const AllAchivements = () => {
  return (
    <div className="AllAchivements">
      <NavBar />
      <div className="achiveBgText">
        <span>Achivements</span>
      </div>
      <div className="ScrollAch">
        {achiveDetails.map((x,i) => (
          <EachAch title={x.title} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AllAchivements;
